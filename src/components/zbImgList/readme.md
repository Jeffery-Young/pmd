# 手百调起图集组件
> by zhulei05

## 使用方式

JS组件，require方式引入

``` javascript

require(['pmd/zbImgList/zbImgList'], function (zbImgList) {
    $('#xxx').on('click', function () {
        zbImgList(imgs, 0);
    });
});

```

## 手百版本要求

android 手百 6.1+

ios 手百 6.2.0.0+

## 参数说明

zbImgList(imgs, index);

* imgs: 图片信息数组，每个元素均为一个对象，需要包含 url 和 desc 属性
* index: 数字，默认显示第index张图片(index 范围 0 ~ imgs.length - 1)

imgs示例：

``` javascript

var imgs = [
    {
        url: 'http://d6.yihaodianimg.com/N03/M04/16/3D/CgQCs1N5MUiATsxVAADJLWXi5mk84700.jpg',
        desc: 'haha0'
    },
    {
        url: 'http://pic2.ooopic.com/11/07/15/30bOOOPICd7.jpg',
        desc: 'haha1'
    },
    {
        url: 'http://xs3.op.xywy.com/api.iu1.xywy.com/cms/20160615/d5556b6663168f6b4a3afce1cb524a5526196.jpg',
        desc: 'haha2'
    }
];

```
