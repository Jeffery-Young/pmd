# 流式图片
> by yangfan


## 使用方法

``` html
<div class="c-span4">
    <img class="c-img" src="1x1.jpg">
</div>
```

全局样式组件，可直接使用。

流式图片按照栅格尺寸缩放，因此需结合栅格容器使用。

直接加载的图片，在栅格子元素"c-span*"中加入"c-img"元素即可。

**注意**："c-img"样式自带margin:0.04rem 0，主要为对齐文字消除行高影响，特殊情况下可用自定义样式消除。

**注意**：在安卓4.4+的uc/qq/掌百浏览器使用旧版盒模型webkit-box渲染，存在margin上下边距失效的bug。栅格框架针对这部分浏览器盒模型中的图片加入了hack，使用border-top/border-bottom代替margin，因此自定义样式消除图片边距的完整的写法为：

``` css
.xx-classname {
    margin: 0;
    border-top: 0 none;
    border-bottom: 0 none;
}
```


### 延迟加载的图片

若图片需要延迟加载，使用"data-imagedelaysrc"属性，则这些图片会在页面dom ready的时候统一回显，如下：

``` html
<div class="c-span4">
    <div class="c-img c-img-s">
        <!--dom ready时统一回显的图片-->
        <img data-imagedelaysrc="1x1.jpg">
    </div>
    <div class="c-img c-img-s wa-invisible-image">
        <!--需要手动回显的图片-->
        <img data-imagedelaysrc="1x1.jpg" data-imageinvisible="1">
    </div>
</div>
```
``` javascript
$('body').one('scroll', function() {
    // zepto回显图片插件
    // 同时查找当前元素及子元素, 筛选出需要回显的图片dom执行回显并返回$dom对象, 支持链式调用
    $('.wa-invisible-image').imageDelayload();
});
    
```

延迟加载的图片由于需要控制容器高度，因此需要加入父层div，`"c-img c-img-*"`，比例对应如下表。请保证图片资源的比例与选用的`"c-img-*"`匹配，否则会出现截断、灰边等异常情况。

另外，某些默认不显示的图片，如横向滑动的图片、tabs切换content中的图片，不需要在dom ready时立即回显，则需要为这些图片同时加上`data-imageinvisible="1"`属性。并在合适的时机调用$(doms).imageDelayload()方法执行回显。

| classname | 比例     |
|:----------|:---------|
| c-img-s   | 1:1方图  |
| c-img-l   | 3:4长图  |
| c-img-w   | 16:9宽图 |
| c-img-x   | 4:3宽图  |



## 图片资源尺寸规范

为保证页面性能，wise结果页对图片资源的原始尺寸做如下规定（若比例不全，则按比例计算）

| 图片宽度 | 比例 | 图片尺寸(px) | 字节大小 |
|:--------:|:-----|:-------------|:---------|
| 12n      | 16:9 | 480 x 270    | < 20k    |
| 6n       | 1:1  | 240 x 240    | < 12k    |
| 4n       | 1:1  | 160 x 160    | < 9k     |
| 4n       | 3:4  | 159 x 212    | < 10k    |
| 4n       | 16:9 | 160 x 90     | < 7k     |
| 4n       | 4:3  | 160 x 120    | < 8k     |
| 3n       | 1:1  | 120 x 120    | < 8k     |
| 3n       | 3:4  | 120 x 160    | < 8k     |
| 3n       | 4:3  | 120 x 90     | < 8k     |
| 2n       | 1:1  | 80 x 80      | < 4k     |



## 示例代码

#### 延迟加载的图片

``` html
<div class="c-container">
    <div class="c-row">
        <div class="c-span2">
            <div class="c-img c-img-l">
                <img data-imagedelaysrc="3x4.jpg">
            </div>
        </div>
        <div class="c-span4">
            <div class="c-img c-img-s">
                <img data-imagedelaysrc="1x1.jpg">
            </div>
        </div>
        <div class="c-span6">
            <div class="c-img c-img-w">
                <img data-imagedelaysrc="16x9.jpg">
            </div>
        </div>
    </div>
</div>
```

#### 直接加载的图片

``` html
<div class="c-container">
    <div class="c-row">
        <div class="c-span2">
            <img class="c-img" src="3x4.jpg">
        </div>
        <div class="c-span4">
            <img class="c-img" src="1x1.jpg">
        </div>
        <div class="c-span6">
            <img class="c-img" src="16x9.jpg">
        </div>
    </div>
</div>
```

#### 左图右文

``` html
<div class="c-container">
    <div class="c-row">
        <div class="c-span3">
            <div class="c-img c-img-s">
                <img data-imagedelaysrc="1x1.jpg">
            </div>
        </div>
        <div class="c-span9">
            奎爷饶命，我只是一段卑微的文字。
        </div>
    </div>
</div>
```
