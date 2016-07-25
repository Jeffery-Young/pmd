# 分享
> by yangfan


## 组件功能简介

分享组件能够支持微信朋友圈、微信好友、QQ好友、QQ空间、新浪微博这些主流app的url分享能力。

由于部分app需要端能力才能进行分享，因此在不同的浏览器下具备的分享app不同(组件已统一进行适配，业务方引用无需关注)。

右侧demo对应下表中“其它”浏览器，可使用手机浏览器扫描二维码体验更多分享功能，具体能力区别可参见下表：

|          | 微信朋友圈 | 微信好友   | QQ好友 | QQ空间 | 新浪微博 | 更多
| :------- | :--------- | :--------- | :----- | :----- | :------- | :-----------------
| 手百     | √ 端       | √ 端       | √ 端   | √ 端   | √ 端     | √ 手百自身分享浮层
| UC       | √ 端       | √ 端       | √ 端   | √ 端   | √ 端     | √ UC浏览器自身分享浮层
| QQ(>5.4) | √ 端       | √ 端       | √ 端   | √ 端   | √ 端     | √ QQ浏览器自身分享浮层(安卓无法吊起)
| 微信     | √ 浮层提示 | √ 浮层提示 | ×      | √ H5   | √ H5     | ×
| 其它     | ×          | ×          | ×      | √ H5   | √ H5     | ×

其中UC和QQ调用端分享能力参考[JefferyWang](https://github.com/JefferyWang)的nativeShare组件JS实现[[github地址]](https://github.com/JefferyWang/nativeShare.js)，此处手工点赞！


## 使用方式

js组件，require方式引入。

``` javascript
// 一个最简答的例子
require(['pmd/share/share'], function (Share) {
    var share = new Share({
        title: 'PS Material Design - Share'
    });

    $(dom).on('click', function () {
        share.popup();
    });
});
```


## 参数说明

实例化Share的时候可以传入一个对象参数，对象各属性说明如下：

* `url:` 字符串，要分享的url，默认为当前页面url
* `title:` 字符串，自定义的分享标题(QZONE 网页版不支持)
* `content:` 字符串，自定义的分享内容
* `iconUrl:` url，自定义的分享图片
* `loginfo:` obj，分享按钮点击时候需要发送的日志内容(只在结果页生效,发tc日志)，具体参见下一节
* `custom:` Array，分享窗口自定义功能，每一个元素都是一个对象，对象的具体属性为
    * `icon:` 字符串，按钮的图标地址
    * `title:` 字符串，按钮的标题
    * `cb:` function，点击按钮后调用的函数


## 结果页日志采集

注意，日志采集仅在大搜结果页运行环境中生效，其它页面使用可忽略。

在大搜结果页环境下每个分享按钮点击均会发送tc交互日志，用以收集分享组件使用率，具体日志规范和格式可参考[sfe结果外链接点击](http://sfe.baidu.com/#/日志/无线网页搜索/点击日志/结果外链接点击)

#### 自定义日志内容：

通过实例化Share时传入参数`loginfo`实现，例如：

``` javascript
new Share({
    url: location.href,
    title: 'PS Material Design',
    content: 'PS Material Design UI',
    loginfo: {
        clk_from : 16024
    }
});
```

`loginfo`必须为obj，且按照规范，需要传入`clk_from: srcid`标记该分享来源于哪个资源id。

其它字段可自定义，注意key和value尽量简短。



## 实例方法

组件提供以下三个方法：

* `share.render();` 在页面中直接渲染分享组件

* `share.popup();` 以popup弹窗方式打开分享组件

* `share.close();` 关闭已经popup的分享组件

具体使用方法可参考如下例子：

``` javascript
require(['pmd/share/share'], function (Share) {
    var share = new Share({
        url: location.href,
        title: 'PS Material Design',
        content: 'PS Material Design UI'
    });

    // render方法可以直接在页面中渲染分享ICON
    // 由于为js渲染会出现抖动,请注意执行时机
    share.render($('.wa-share-page'), {         // 第一个参数必选, 支持$dom或classname, 标记分享ICON需要插入的dom节点
        customClassName: 'wa-share-page-dom',   // 可选, 为分享ICON节点加入自定义classname
        onRender: function () {                 // 可选, render成功后的回调函数
            console.log('Render done!');
        }
    });

    $(dom).on('click', function () {
        // 以popup弹窗方式打开分享组件
        share.popup({
            onOpen: function () {               // 可选, popup完全打开之后的回调函数
                console.log('open share');
            },
            onClose: function () {              // 可选, popup完全关闭之后的回调函数
                console.log('close share');
            }
        });
    });

    $(dom).on('click', function () {
        // 关闭已经popup的分享组件, 保证接口完整性, 一般无需使用
        share.close();
    });
});
```


## 代码示例

### popup浮层展现的分享组件

``` javascript
<script type="text/javascript">
    require(['pmd/share/share'], function (Share) {
        var share = new Share({
            title: 'PS Material Design - Share',
            custom: []
        });

        $('.wa-share-popup').on('click', function () {
            share.popup({
                onOpen: function () {
                    console.log('open share');
                },
                onClose: function () {
                    console.log('close share');
                }
            });
        });
    });
</script>
```

### 直接在页面中展现的分享组件

``` javascript
<script type="text/javascript">
    require(['pmd/share/share'], function (Share) {
        var share = new Share({
            url: location.href,
            title: 'PS Material Design',
            content: 'PS Material Design UI'
        });

        // 调用render方法直接在页面中渲染dom
        // 注意由于为js渲染会出现抖动,请注意执行时机
        share.render($('.wa-share-page'), {
            customClassName: 'wa-share-page-dom',
            onRender: function () {
                console.log('Render done!');
            }
        });
    });
</script>
```