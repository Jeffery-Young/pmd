/*
 * @file grid_hack.js
 * @author yangfan16
 * @description 检测当前设备是否支持新版盒模型
 * @description 检测是否为安卓腾讯x5内核
 * @description 解决旧版盒模型及安卓腾讯x5内核下图片对齐问题
 */

(function () {
    // @description 检测当前设备是否支持某css属性（可带前缀）
    // @param {string} property 属性名
    // @param {string} value 属性值，带前缀
    // @return {boolean} 是否支持
    function featureDetect(property, value) {
        // thanks Modernizr! https://github.com/phistuck/Modernizr/commit/3fb7217f5f8274e2f11fe6cfeda7cfaf9948a1f5
        var prop = property + ':';
        var ele = document.createElement('test');
        var eStyle = ele.style;

        eStyle.cssText = prop + value;
        return eStyle[property].indexOf(value) !== -1;
    }

    // 检测不支持新版盒模型 || 为安卓腾讯x5内核 !!!!!!!!!!WTF!!!!!!!!!!
    if (!featureDetect('display', '-webkit-flex') || (/MQQBrowser/i.test(navigator.userAgent) && /android/i.test(navigator.userAgent))) {
        // 为盒模型下的c-img补上顶部对齐间距
        var hachStyle = '.c-flexbox .c-img, .c-row .c-img{'
                      +     '-webkit-background-clip:padding-box;'
                      +     'background-clip:padding-box;'
                      +     'border-top:4px solid transparent;'
                      +     'border-bottom:4px solid transparent;'
                      + '}';
        $('head').append('<style>' + hachStyle + '</style>');
    }

})();