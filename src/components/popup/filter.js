/**
 * @file 筛选浮层
 * @author xieyaowu
 * @required
 *     ./filter.css
 *     ./popup
 * @logs
 *     需要使用者在阿拉丁模板里触发
 *     1. 全选：{type: popup, action: 1}
 *     2. 完成：{type: popup, action: 2}
 *     3. 点击选择单个：{type: popup, action: 3, extra: '点击项的文本,截断10个字'}
 *     4. 点击遮罩层取消：{type: popup, action: 4}
 */

define([
    './popup'
], function (Popup) {
    'use strict';

    // 注入样式
    $('<style data-for="pmd/popup/filter"></style>').text(__inline('./filter.css')).appendTo('head');

    /**
     * 构造函数
     *
     * @param {Object}              options 配置对象
     * @param {boolean}             [options.multiple=false] 是否多选
     * @param {Array}               options.data 数据列表，页面最多显示4条，超出则列表区域为上下滑动
     * @param {string}              options.data[].text 菜单中显示文本
     * @param {string|number}       options.data[].value 菜单选中的值
     * @param {undefined|boolean}   options.data[].selected 是否选中
     * @param {string}              [options.title=请选择] 浮层显示标题
     * @param {Function}            options.onSelect 选择完成后回调， 参数data={old: 上次的索引, oldValue: 上次的值, index: 新索引, value: 新值, event: 事件类型（有change、none选项}
     * @param {Function}            options.onCancel 点击遮罩关闭时回调
     * @param {Function}            options.onClickAll 点击全选时回调
     * @param {Function}            options.onClickDone 点击完成时回调
     * @param {Function}            options.onClickItem 点击列表每个项时回调
     */
    function Filter(options) {
        this.options = $.extend({
            multiple: false,
            data: [],
            title: '请选择',
            onSelect: function () {},
            onCancel: function () {},
            onClickAll: function () {},
            onClickDone: function () {},
            onClickItem: function () {}
        }, options);

        // 根据是否多选来弹出不同的dom
        this.options.multiple ? this._showPropMultiple() : this._showProp();
    }

    /**
     * 绑定一些公用事件，包含单选、多选
     *
     * @private
     */
    Filter.prototype._bindEvent = function () {
        var self = this;

        // 绑定滚动列表阻止冒泡，为的是让popup基类不阻止默认事件
        // 必须是个数大于4时才执行，以降低在列表里滑动整个结果页的风险，这里跟.c-popup-filter-list样式有耦合
        if (self.options.data.length > 4) {
            self._popup.$popupContent.find('.c-popup-filter-list').on('touchmove', function (event) {
                event.stopPropagation();
            });
        }

        // 绑定点击遮罩层解决 onCancel 事件
        self._popup.$popupFrame.find('.c-popup-mask').on('click', function () {
            self.options.onCancel({
                type: 'popup',
                action: 4
            });
        });
    };

    /**
     * 显示多选弹出层
     *
     * @private
     */
    Filter.prototype._showPropMultiple = function () {
        var self = this;
        var options = self.options;
        var html;
        var $popupContent;

        // 拼标题
        html = [
            '<div class="c-popup-filter-header c-flexbox">',
                '<div class="c-popup-filter-header-all">全部</div>',
                '<div class="c-popup-filter-title c-line-clamp1">' + options.title + '</div>',
                '<div class="c-popup-filter-header-done">完成</div>',
            '</div>'
        ].join('');

        // 拼列表
        html += '<ul class="c-popup-filter-list c-popup-filter-list-multiple">';
        options.data.forEach(function (val, index) {
            html += [
                '<li class="c-popup-filter-item' + (val.selected ? ' c-popup-filter-selected' : '') + '">',
                    '<div class="c-popup-filter-inner">',
                        '<p class="c-line-clamp1">' + val.text + '</p>',
                        '<i class="c-icon"></i>',
                    '</div>',
                '</li>'
            ].join('');
        });
        html += '</ul>';

        // 弹出来浮层吧
        self._popup = new Popup({
            content: html,
            customClassName: 'c-popup-filter c-popup-filter-multiple'
        });

        // 获取当前浮层里的content对象，跟@dongshihao沟通过
        $popupContent = self._popup.$popupContent;

        // 绑定公用事件
        self._bindEvent();

        // 如果已经是全选则让全选搞灰
        if ($popupContent.find('.c-popup-filter-selected').length === options.data.length) {
            $popupContent.find('.c-popup-filter-header-all').addClass('c-color-gray');
        }

        // 绑定点击每个项
        $popupContent.find('.c-popup-filter-item').on('click', function () {
            var isAll;

            $(this).toggleClass('c-popup-filter-selected');

            // 当前的列表是否全部选中
            isAll = $popupContent.find('.c-popup-filter-selected').length === options.data.length;

            $popupContent.find('.c-popup-filter-header-all')[isAll ? 'addClass' : 'removeClass']('c-color-gray');

            // 绑定点击每个项时触发日志
            options.onClickItem({
                action: 3,
                type: 'popup',
                extra: String($(this).find('.c-line-clamp1').text()).substr(0, 10)
            });
        });

        // 绑定点击全部
        $popupContent.find('.c-popup-filter-header-all').on('click', function () {
            // 如果是灰的表示禁用
            if ($(this).hasClass('c-color-gray')) {
                return false;
            }

            // 让列表所有的都选中
            $popupContent.find('.c-popup-filter-item').addClass('c-popup-filter-selected');

            // 触发完成事件，带上true是为了避免日志重复发送（全选和完成）
            $popupContent.find('.c-popup-filter-header-done').triggerHandler('click', [true]);

            // 触发全选日志
            options.onClickAll({
                type: 'popup',
                action: 1
            });
        });

        // 绑定点击完成
        $popupContent.find('.c-popup-filter-header-done').on('click', function (event, forAllTrigger) {
            // 查找当前选中的索引
            var index = $popupContent.find('.c-popup-filter-selected').map(function () {
                return $(this).index();
            }).get();

            // 查找之前选中的索引，可能是空数组
            var old = [];

            options.data.forEach(function (val, i) {
                // 把之前选中的收集起来
                if (val.selected) {
                    old.push(i);
                }

                // 更新数据里的选中状态
                val.selected = $.inArray(i, index) !== -1;
            });

            // 触发选择回调
            options.onSelect({
                index: index,
                value: index.map(function (val) {
                    return options.data[val].value;
                }),
                old: old,
                oldValue: old.map(function (val) {
                    return (options.data[val] || '').value;
                }),
                event: String(index) === String(old) ? 'none' : 'change'
            });

            // 如果不是从全选那边触发的完成事件
            if (!forAllTrigger) {
                options.onClickDone({
                    action: 'popup',
                    type: 2
                });
            }

            // 关闭浮层并销毁
            self._popup.closePopup();
            delete self._popup;
        });
    };

    /**
     * 显示单选浮层
     *
     * @private
     */
    Filter.prototype._showProp = function () {
        var self = this;
        var options = self.options;
        var html;
        var $popupContent;

        // 拼标题
        html = [
            '<div class="c-popup-filter-header">',
                '<div class="c-popup-filter-title c-line-clamp1">' + options.title + '</div>',
            '</div>'
        ].join('');

        // 拼列表
        html += '<ul class="c-popup-filter-list">';
        options.data.forEach(function (val, index) {
            html += [
                '<li class="c-popup-filter-item' + (val.selected ? ' c-popup-filter-selected' : '') + '">',
                    '<div class="c-popup-filter-inner">',
                        '<p class="c-line-clamp1">' + val.text + '</p>',
                        '<i class="c-icon"></i>',
                    '</div>',
                '</li>'
            ].join('');
        });
        html += '</ul>';

        // 弹出来浮层吧
        self._popup = new Popup({
            content: html,
            customClassName: 'c-popup-filter c-popup-filter-radio'
        });

        // 获取当前浮层里的content对象，跟@dongshihao沟通过
        $popupContent = self._popup.$popupContent;

        // 绑定公用事件
        self._bindEvent();

        // 绑定单选点击列表项
        $popupContent.find('.c-popup-filter-item').on('click', function () {
            var index = $(this).index();
            var old = $popupContent.find('.c-popup-filter-selected').eq(0).index();

            // 把数据的data选中，以方便下次再弹出来时使用
            options.data.forEach(function (val, i) {
                val.selected = i === index;
            });

            // 触发选择回调
            options.onSelect({
                index: index,
                value: options.data[index].value,
                old: old === -1 ? undefined : old,
                oldValue: (options.data[old] || '').value,
                event: old === index ? 'none' : 'change'
            });

            // 绑定点击每个项时触发日志
            options.onClickItem({
                type: 'popup',
                action: 3,
                extra: String($(this).find('.c-line-clamp1').text()).substr(0, 10)
            });

            // 关闭浮层并销毁
            self._popup.closePopup();
            delete self._popup;
        });
    };

    return Filter;
});
