Zepto(function($){
    // 延迟加载图片的回显方法插件
    $.fn.imageDelayload = function () {
        // 同时查找当前元素及子元素, 筛选出需要回显的图片dom
        var targetImg = $(this).filter('[data-imagedelaysrc]').add($(this).find('[data-imagedelaysrc]'));
        return targetImg.each(function () {
            // 回显图片
            this.src = this.getAttribute('data-imagedelaysrc');
            this.removeAttribute('data-imagedelaysrc');
            // 消除父层c-img的默认背景图片
            this.onload = function () {
                var $thisImgWrapper = $(this).closest('.c-img');
                if ($thisImgWrapper.length) {
                    $thisImgWrapper.css({background: 'none'});
                };
            };
        });
    };

    // dom ready时即对所有延迟加载的图片执行回显, 不包括默认隐藏的图片(data-imageinvisible="1")
    $('img[data-imagedelaysrc]').not('[data-imageinvisible="1"]').imageDelayload();
});