define(function () {

    // 加载dialog公共css
    var $dialogStyle = $('<style data-for="pmd/dialog/dialog"></style>');
    $dialogStyle.text(__inline("dialog.css"));
    $('head').append($dialogStyle);

    var Dialog = function(opt) {
        if (!opt || !opt.buttons || !opt.buttons.length || (!opt.title && !opt.text)) {
            return;
        };
        var me = this;
        // 设置默认值
        me.options = $.extend({
            customClassName: '',    // 自定义样式名
            title: '',              // 标题
            text: '',               // 文本,支持html
            duration: 200,          // 动画执行时间
            verticalButtons: false, // 按钮排列方式,默认水平排列
            buttons: []             // 按钮数组
        }, opt);

        me._init();
    };

    Dialog.prototype = {

        _init: function() {
            var me = this;

            me._prepareDialogWrapper();
            me._render();
            me._bindEvent();
        },

        /*
         * 创建#c-dialog父容器单例,所有dialog都append到这个dom中
         */
        _prepareDialogWrapper: function() {
            var me = this;

            me.$dialog = $('#c-dialog');
            // 没有#c-dialog
            if (!me.$dialog.length) {
                me.$dialog = $('<div id="c-dialog"></div>');
                $('body').append(me.$dialog);
            };

            // 阻止滚动
            me.$dialog.on('touchmove', function(e) {
                e.preventDefault();
            });
        },

        _render: function() {
            var me = this;

            me.$dialog_mask    = $('<div class="c-dialog-mask"></div>');
            me.$dialog_layout  = $('<div class="c-dialog-layout"></div>');
            me.$dialog_content = $('<div class="c-dialog-content"></div>');
            me.$dialog_buttons = $('<div class="c-dialog-buttons"></div>');

            // 拼装title部分
            var contentHtml = [
                '<div class="c-dialog-title">' + me.options.title + '</div>',
                me.options.text ? '<div class="c-dialog-text">' + me.options.text + '</div>' : ''
            ];
            me.$dialog_content.html(contentHtml.join(''));

            // 拼装buttons部分 todo:需要判断是否有text
            var buttonsHtml = [];
            for (var i = 0; i < me.options.buttons.length; i++) {
                buttonsHtml = buttonsHtml.concat([
                    '<span class="c-dialog-button c-line-clamp1">',
                        me.options.buttons[i].text,
                    '</span>'
                ]);
            };
            me.$dialog_buttons.html(buttonsHtml.join('')).addClass(me.options.verticalButtons ? 'c-dialog-vertical-buttons' : 'c-flexbox');

            // 组装&渲染
            me.$dialog_layout.append(me.$dialog_content).append(me.$dialog_buttons).addClass(me.options.customClassName);
            me.$dialog.append(me.$dialog_mask).append(me.$dialog_layout);
            // 设置垂直居中
            me.$dialog_layout.css({
                'margin-top': - (me.$dialog_layout.height() / 2) + 'px'
            });

            // dialog出场动画
            me.$dialog_layout.css({
                '-webkit-transform': 'scale3d(1.3, 1.3, 1)',
                'transform': 'scale3d(1.3, 1.3, 1)',
                'opacity': 0
            }).animate({
                '-webkit-transform': 'scale3d(1, 1, 1)',
                'transform': 'scale3d(1, 1, 1)',
                'opacity': 1
            }, me.options.duration, 'ease', function() {
                me.$dialog_layout.css({
                    '-webkit-transform': 'none',
                    'transform': 'none'
                });
            });
            // mask出场动画
            me.$dialog_mask.css({
                'opacity': 0
            }).animate({
                'opacity': 1
            }, me.options.duration, 'ease');
        },

        _bindEvent: function() {
            var me = this;

            // 绑定按钮点击事件
            me.$dialog_buttons.delegate('.c-dialog-button', 'click', function() {
                var $dom_this = $(this);
                // 获取点击按钮的opt
                var thisButtonOpt = me.options.buttons[$dom_this.index()];

                // 判断是否需要关闭对话框
                if (thisButtonOpt.close !== false) {
                    me._destroy();
                };

                // 执行回调
                if (thisButtonOpt && typeof thisButtonOpt.onClick === 'function') {
                    thisButtonOpt.onClick();
                };
            });
        },

        _destroy: function() {
            var me = this;

            // 解绑事件
            me.$dialog_buttons.off('click');

            // dialog退场动画
            me.$dialog_layout.css({
                '-webkit-transform': 'scale3d(1, 1, 1)',
                'transform': 'scale3d(1, 1, 1)',
                'opacity': 1
            }).animate({
                '-webkit-transform': 'scale3d(0.7, 0.7, 1)',
                'transform': 'scale3d(0.7, 0.7, 1)',
                'opacity': 0
            }, me.options.duration, 'ease', function() {
                // 消除dom
                me.$dialog_layout.remove();
            });

            // mask退场动画
            me.$dialog_mask.css({
                'opacity': 1
            }).animate({
                'opacity': 0
            }, me.options.duration, 'ease', function() {
                // 消除dom
                me.$dialog_mask.remove();
            });
        },

        constructor: Dialog
    };

    return Dialog;
});