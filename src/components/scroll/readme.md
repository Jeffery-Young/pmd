# 横向滑动
> by yangfan


## 使用方法

使用iScroll 5

js组件，require方式引入。


## iscroll

``` javascript
require(['pmd/scroll/iscroll'], function (IScroll) {
    new IScroll('.classname', {
        disableMouse: true,			// 是否禁用鼠标操作
        scrollX: true,				// 是否允许X轴滚动
        scrollY: false,				// 是否允许Y轴滑动
        momentum: false,			// 滑动势能动画开关，true性能耗费较高
        eventPassthrough : true,	// 是否允许页面本身的滑动行为
        scrollbars: false			// 是否显示滚动条
    });
});
```

引入[iScroll 5](http://iscrolljs.com/)，版本：iscroll-probe.js。

重要配置参考如上代码注释，有关iScroll具体使用请参考[官方文档](http://iscrolljs.com/)。



## bdscroll

``` javascript
require(['pmd/scroll/bdscroll'], function (bdScroll){
    new bdScroll('.classname', {
    	momentum: true
    });
});
```

基于iscroll封装，继承iscroll，适合wise结果页使用的横滑组件。主要解决以下问题：

1. 设置iscroll初始化默认参数；

2. 统一处理横竖屏及唯一答案强展现情况下需要重新获取元素宽高问题；

3. 封装统一的分页导航样式及方法；



### html结构

``` html
<!--可视区-->
<div class="c-scroll-wrapper c-row-tile wa-xxxxx-scroll-wrapper">
	<!--滑动容器父元素-->
    <div class="c-scroll-parent-gap wa-xxxxx-scroller">
        <div class="c-scroll-element-gap wa-xxxxx-entity"></div>
        <div class="c-scroll-element-gap wa-xxxxx-entity"></div>
        ......
        <div class="c-scroll-element-gap wa-xxxxx-entity"></div>
    </div>
</div>
```

其中，"wa-xxxxx-scroll-wrapper"为滑动可视区域，可根据情况结合"c-row-tile"占满整行。iscroll中必选参数.classname即为该容器。

**注意**：请为滑动可是区域设置上"c-scroll-wrapper"样式，以便全局避让等处理。

"wa-xxxxx-scroller"为滑动元素的父元素（长度超出可视区），其中的内容可自行定义结构。

一般的做法：将"wa-xxxxx-scroller"设置为"white-space:nowrap"，其中的子元素设置为"display:inline-block"，即可完成布局。

**注意**："inline-block"元素之间不能有空格或空行，否则会影响宽度，smarty中可用"{%strip%}"方法将html内容压缩成一行。

使用"c-scroll-parent-gap"样式用于多图横滑场景下统一设置父元素距离外层容器的间距。

使用"c-scroll-element-gap"样式用于多图横滑场景下统一设置子元素之间的间距。

**注意**：以上两者伴随可视区"c-row-tile"样式同时出现，单独设置是错误的做法。



### 元素宽度计算

由于横滑结构中脱离标准栅格系统，因此无法直接采用"c-span*"方式设置子元素宽度，需自行计算设置css，提供以下计算方法供参考：

**注意**：为避免同一个页面有多个相同资源的横滑卡片，横滑元素的宽度请使用内联样式设置。

**注意**：当滑动元素中存在图片时，对于超出可视区域的图片需要做延迟加载，使用`data-imagedelaysrc="xxx"`标记需要加载的图片src、`data-imageinvisible="1"`标记该图片默认不显示，bdscroll组件会统一在scrollStart事件触发时执行一次图片延迟加载。若使用iscroll，请在合适的时机配合`$(dom).imageDelayload();`方法回显图片。

```
假设子元素个数为l，子元素占栅格数为n；
子元素wa-xxxxx-entity宽度：(100 / l)%
父元素wa-xxxxx-scroller宽度：(55 * n - (24 - 10)) / 636 * l，
```

**特别的**：wise结果页aladdin c_base中提供了公共方法，应该使用以下方法计算以便统一调整。

#### fe_fn_c_img_scroll_pwrate

计算横滑父元素的宽度百分比；

例如{%fe_fn_c_img_scroll_pwrate col=3 num=8%}，返回值：177.35849056%，

col表示图片所占栅格列数，num表示子元素个数。

#### fe_fn_c_img_wrate

某些情况下需要js动态计算父元素宽度，该方法单独计算一个图片的宽度百分比，可通过smarty获取该值之后使用js动态乘元素个数，即可进行动态设置；

例如{%fe_fn_c_img_wrate col=3%}，返回值22.16981132，注意该返回值不包含"%"。

col表示图片所占栅格列数。



## 横滑分页

``` javascript
require(['pmd/scroll/bdscroll'], function (bdScroll) {
    var imageScroll = new bdScroll('.classname', {
        snap: true,				// 标识需要分页
        $indicator: $(dom)		// 标识分页指示器dom对象
    });
});
```

### 分页指示器html结构

``` html
<div class="c-scroll-indicator wa-xxxx-indicator">
    <span class="c-scroll-dotty-now"></span><span></span><span></span>
</div>
```

滑动元素html结构相同，注意在css中定义父元素/子元素宽度。流式布局下，一般父元素宽度为"100%*子元素个数"；子元素宽度为"100%/子元素个数"。

分页指示器元素可以定义在页面任意地方，父容器为"c-scroll-indicator"，子容器为多个"span"元素，有几屏则有几个"span"元素。

"c-scroll-dotty-now"用来标识当前显示的页数。



## 示例代码

### 使用bdscroll

``` html
<div class="c-container">
    <div class="c-row-tile c-scroll-wrapper wa-image-scroll-wrapper-bdscroll">
        <div class="c-scroll-parent-gap wa-image-scroller">
            <div class="c-scroll-element-gap wa-image-entity">
                <a href="http://www.baidu.com" target="_blank">
                <img data-imagedelaysrc="1x1.jpg" class="c-img">
                <p style="text-align:center">标题1</p>
                </a>
            </div><div class="c-scroll-element-gap wa-image-entity">
                <img data-imagedelaysrc="1x1.jpg" class="c-img">
                <p style="text-align:center">标题2</p>
            </div><div class="c-scroll-element-gap wa-image-entity">
                <img data-imagedelaysrc="1x1.jpg" class="c-img">
                <p style="text-align:center">标题3</p>
            </div><div class="c-scroll-element-gap wa-image-entity">
                <img data-imagedelaysrc="1x1.jpg" class="c-img">
                <p style="text-align:center">标题4</p>
            </div><div class="c-scroll-element-gap wa-image-entity">
                <img data-imagedelaysrc="1x1.jpg" class="c-img">
                <p style="text-align:center">标题5</p>
            </div><div class="c-scroll-element-gap wa-image-entity">
                <img data-imagedelaysrc="1x1.jpg" data-imageinvisible="1" class="c-img">
                <p style="text-align:center">标题6</p>
            </div><div class="c-scroll-element-gap wa-image-entity">
                <img data-imagedelaysrc="1x1.jpg" data-imageinvisible="1" class="c-img">
                <p style="text-align:center">标题7</p>
            </div><div class="c-scroll-element-gap wa-image-entity">
                <img data-imagedelaysrc="1x1.jpg" data-imageinvisible="1" class="c-img">
                <p style="text-align:center">标题8</p>
            </div>
        </div>
    </div>
</div>
```
``` javascript
<script type="text/javascript">
    require(['pmd/scroll/bdscroll'], function (bdScroll) {
        var imageScroll = new bdScroll('.wa-image-scroll-wrapper-bdscroll', {
            momentum: true
        });
        // 超出显示范围的图片在开始滑动时延迟加载
        imageScroll.on('scrollStart', function(){
            $('.wa-image-scroll-wrapper-bdscroll').imageDelayload();
        });
    });
</script>
```


### 滑动分页
``` html
<div class="c-container">
    <div class="c-row-tile c-scroll-wrapper wa-table-scroll-wrapper">
        <div class="wa-table-scroller">
            <div class="wa-table-page">
                <table class="c-table">
                    <tbody>
                        <tr class="c-table-hihead">
                            <th><div>表头1</div></th><th><div>表头1</div></th><th><div>表头1</div></th>
                        </tr>
                        <tr>
                            <td><span class="c-index c-index-hot1">1</span></td><td>表格内容</td><td>表格内容</td>
                        </tr>
                        <tr>
                            <td><span class="c-index c-index-hot2">2</span></td><td>表格内容</td><td>表格内容</td>
                        </tr>
                        <tr>
                            <td><span class="c-index c-index-hot3">3</span></td><td>表格内容</td><td>表格内容</td>
                        </tr>
                    </tbody>
                </table>
            </div><div class="wa-table-page">
                <table class="c-table">
                    <tbody>
                        <tr class="c-table-hihead">
                            <th><div>表头2</div></th><th><div>表头2</div></th><th><div>表头2</div></th>
                        </tr>
                        <tr>
                            <td><span class="c-index">1</span></td><td>表格内容</td><td>表格内容</td>
                        </tr>
                        <tr>
                            <td><span class="c-index">2</span></td><td>表格内容</td><td>表格内容</td>
                        </tr>
                        <tr>
                            <td><span class="c-index">3</span></td><td>表格内容</td><td>表格内容</td>
                        </tr>
                    </tbody>
                </table>
            </div><div class="wa-table-page">
                <table class="c-table">
                    <tbody>
                        <tr class="c-table-hihead">
                            <th><div>表头3</div></th><th><div>表头3</div></th><th><div>表头3</div></th>
                        </tr>
                        <tr>
                            <td><span class="c-index">1</span></td><td>表格内容</td><td>表格内容</td>
                        </tr>
                        <tr>
                            <td><span class="c-index">2</span></td><td>表格内容</td><td>表格内容</td>
                        </tr>
                        <tr>
                            <td><span class="c-index">3</span></td><td>表格内容</td><td>表格内容</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <!--指示器元素-->
    <div style="text-align:center">
        <div class="c-scroll-indicator wa-table-scroll-indicator">
            <span class="c-scroll-dotty-now"></span><span></span><span></span>
        </div>
    </div>
</div>
```
``` javascript
<script type="text/javascript">
    require(['pmd/scroll/bdscroll'], function (bdScroll) {
        var imageScroll = new bdScroll('.wa-table-scroll-wrapper', {
            snap: true,
            $indicator: $('.wa-table-scroll-indicator')
        });
    });
</script>
```
