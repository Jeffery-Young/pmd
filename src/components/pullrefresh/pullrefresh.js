define(function () {

    // 加载pullrefresh公共css
    var $dialogStyle = $('<style data-for="pmd/pullrefresh/pullrefresh"></style>');
    $dialogStyle.text(__inline("pullrefresh.css"));
    $('head').append($dialogStyle);

    var PullRefresh = function(opt) {
        if (false) {
            return;
        };
        var me = this;
        // 设置默认值
        me.options = $.extend({
            $pullWrapper: $('body'),        // 拖动容器
            pullDistance: 50                // 拖动距离,超过这个距离后,松手即触发刷新
        }, opt);

        me._init();
    };

    PullRefresh.prototype = {

        _init: function() {
            var me = this;

            // me._prepareDialogWrapper();
            // me._render();
            me._bindEvent();
        },

        /*
         * 绑定滚动事件
         */
        _bindEvent: function() {
            var me = this;

            var startY;                 // 开始拖动时手指Y轴位置
            var refreshFlag = false;    // 下拉刷新标记,默认false

            me.options.$pullWrapper.on('touchstart', function(e) {
                startY = e.changedTouches[0].pageY;
            }).on('touchmove', function(e) {
                // direction方向 1:手指向下,-1手指向上
                var direction = e.changedTouches[0].pageY > startY ? 1 : -1;
                // 滚动条到顶 && 继续向下拖动 = 触发下拉逻辑
                if (pageYOffset <= 0 && direction == 1) {
                    e.preventDefault();
                    var diffY = Math.floor(Math.pow(e.changedTouches[0].pageY - startY, 0.75)); // 拖动距离
                    refreshFlag = (diffY > me.options.pullDistance) ? true : false;             // 是否触发下拉刷新

                    me._initLoadingTips();

                    me.options.$pullWrapper.css({
                        '-webkit-transform': 'translate3d(0, ' + diffY + 'px, 0)',
                        'transform': 'translate3d(0, ' + diffY + 'px, 0)'
                    });
                };
            }).on('touchend', function(e) {
                if (refreshFlag) {
                    // 触发下拉刷新,还原到pullDistance高度
                    me.options.$pullWrapper.animate({
                        '-webkit-transform': 'translate3d(0, ' + me.options.pullDistance + 'px, 0)',
                        'transform': 'translate3d(0, ' + me.options.pullDistance + 'px, 0)'
                    }, 300, 'ease', function() {

                    });
                } else {
                    // 未触发,还原
                    me.options.$pullWrapper.animate({
                        '-webkit-transform': 'translate3d(0, 0, 0)',
                        'transform': 'translate3d(0, 0, 0)'
                    }, 300, 'ease', function() {

                    });
                };
            });

        },

        /*
         * 初始化loading提示区
         */
        _initLoadingTips: function() {
            var me = this;

            if (me.$loading && me.$loading.length) {

            } else {
                me.$loading = $('<div class="c-pullrefresh-loading"></div>');
                me.$loading.css({
                    'width': '100%',
                    'height': me.options.pullDistance + 'px',
                    'position': 'absolute',
                    'top': (0 - me.options.pullDistance) + 'px',
                    'left': 0,
                    'background': 'red' // just for test
                });

                me.options.$pullWrapper.append(me.$loading);
            };
            
        },

        constructor: PullRefresh
    };

    return PullRefresh;
});