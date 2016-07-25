/**
 * @file toast
 * @author dongshihao
 */
define(function () {

    // 加载公共css
    var $toastStyle = $('<style data-for="pmd/toast/toast"></style>');
    $toastStyle.text(__inline('toast.css'));
    $('head').append($toastStyle);

    var Toast = function (opt) {
        var me = this;
        // 设置默认值
        me.options = $.extend({
            msg: '',                 // 标题，支持html和Zepto对象
            customClassName: '',     // 自定义样式名
            duration: 2000,          // toast展现的时长
            autoClose: true,             // 是否自动关闭
            onOpen: function () {},
            onClose: function () {}
        }, opt);
        // 初始化
        me._init();
    };

    Toast.prototype = {

        constructor: Toast,

        version: '0.0.1',

        /*
        *  初始化：渲染父层dom，弹出toast
        */
        _init: function () {
            var me = this;
            // 渲染父层dom单例
            me._prepareWrapper();
            me.open();
        },
        /*
         * 创建.c-toast-wrapper父容器单例,所有toast内容都append到这个dom中
         */
        _prepareWrapper: function () {
            var me = this;
            var toastWrapperDom = $('.c-toast-wrapper');
            toastWrapperDom.remove();
            me.$toastWrapper = $('<div class="c-toast-wrapper"></div>');
            me.$toastWrapper.append(me.options.msg).addClass(me.options.customClassName);
            $(document.body).append(me.$toastWrapper);
        },
        /*
        * 弹出层
        */
        open: function () {
            var me = this;
            // 设置居中
            me.$toastWrapper.css({
                'margin-top': - (me.$toastWrapper.height() / 2) + 'px',
                'margin-left': - (me.$toastWrapper.width() / 2) + 'px'
            });
            // 入场动画
            me.$toastWrapper.css({
                '-webkit-transform': 'scale3d(1.5, 1.5, 1)',
                'transform': 'scale3d(1.5, 1.5, 1)',
                'opacity': 0
            }).animate({
                '-webkit-transform': 'scale3d(1, 1, 1)',
                'transform': 'scale3d(1, 1, 1)',
                'opacity': 1
            }, 200, 'ease', function () {
                me.$toastWrapper.css({
                    '-webkit-transform': 'none',
                    'transform': 'none'
                });
                // toast展现回调
                me.options.onOpen();
                // 延迟关闭
                if (me.options.autoClose) {
                    me.delay = setTimeout($.proxy(me.close, me), me.options.duration);
                }
            });
        },
        close: function () {
            var me = this;
            me.$toastWrapper.animate({
                '-webkit-transform': 'scale3d(0.7, 0.7, 1)',
                'transform': 'scale3d(0.7, 0.7, 1)',
                'opacity': 0
            }, 200, 'ease', function () {
                me.$toastWrapper.css({
                    '-webkit-transform': 'none',
                    'transform': 'none'
                });
                me.options.onClose();
                me._destory();
            });
        },
        _destory: function () {
            var me = this;
            // 消除dom
            me.$toastWrapper.remove();
            // 清除setTimeout
            if (me.delay) {
                clearTimeout(me.delay);
            }
        }
    };
    return Toast;
});
