/* 
 * @file bdscroll.js
 * @author yangfan
 * @note 对iscroll简单封装,适合baidu结果页使用
 */

define(function () {

    var IScroll = require('./iscroll');
    var BDScroll = function (el, opt) {
        if (!el) {
            return;
        };
        var me = this;
        me.el = el;
        me.options = $.extend({
            disableMouse: true, // 禁止鼠标操作,wise环境默认开
            scrollX: true,
            scrollY: false,
            momentum: true,     // 滑动势能动画开关,默认开
            eventPassthrough : true,
            scrollbars: false,
            snap: false,
			snapThreshold: 0.1,
            snapSpeed: 400
        }, opt);
        me.preprocess();
    };

    // extend of IScroll
    var F = function(){};
    F.prototype = IScroll.prototype;
    BDScroll.prototype = new F();
    BDScroll.prototype.constructor = BDScroll;

    BDScroll.prototype.preprocess = function() {
        var me = this;
        var imageDelayloadFlag = true;  // 图片延迟加载标记,默认需执行
        IScroll.call(me, me.el, me.options);

        // 处理兼容性bug
        $(window).on('orientationchange', function() {
            me.refresh();
        }).on('pageshow', function(){
            me.refresh();
        });
        $('body').one('onlyshowMore', function () {
            setTimeout(function () {
                me.refresh();
            }, 0);
        });

        // 统一执行一次图片延迟加载
        me.on('scrollStart', function() {
            if (imageDelayloadFlag) {
                $(me.el).imageDelayload();
                imageDelayloadFlag = false;
            }
        });

        // 处理分页
        if (me.options.snap && me.options.$indicator) {
            me.on('scrollEnd', function () {
                var thisPage = this.currentPage.pageX;
                me.options.$indicator.find('span').removeClass('c-scroll-dotty-now').eq(thisPage).addClass('c-scroll-dotty-now');
            });
        }
    };

    return BDScroll;
});
