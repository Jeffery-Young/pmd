/**
 * @file img list component for zbios(手百)
 * @author  zhulei05
 */

define(function () {
    // 调起图集接口
    var callImgList = function () {};

    // 获取UA
    var UA = navigator.userAgent.toLowerCase();

    // 是否手百
    if (UA.indexOf('baiduboxapp/') != -1) {
        require('./aio');

        callImgList = function (imgs, index) {
            // imgs参数必须是数组
            if (Object.prototype.toString.call(imgs) !== '[object Array]') {
                return;
            }
            // imgs的每个对象必须带有url属性
            for (var i = 0, len = imgs.length; i < len; i++) {
                if (!imgs[i].url) {
                    return;
                }
            }
            // index 范围必须是 0 ~ imgs.length - 1
            index = +index;
            index = Math.min(index, imgs.length - 1);
            index = Math.max(index, 0);

            var options = {
                type: '1',
                img_items: imgs,
                index: index,
                source: 'discovery'
            };
            options = JSON.stringify(options);

            if (Box.os.android) {
                Box.android.invokeApp("Bdbox_android_utils","image",[options, window.callback]);
            }
            else {
                Box.ios.invokeApp("utils",{"action":"image","params": encodeURIComponent(options),"minver":"6.2.0.0"},"image");
            }
        };
    }

    return callImgList;

});
