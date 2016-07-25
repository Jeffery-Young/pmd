# 卡片
> by yangfan


## 使用方法

``` html
<div class="c-container">xxxxxx</div>
```

全局样式组件，可直接使用。

用于创建一个卡片容器，容器内可以包含任意内容。


## 卡片公共样式

``` html
<p class="c-title">大标题　c-title　18x/26px</p>
<p class="c-abstract">摘要　c-abstract　14px/22px</p>
<p class="c-gray">辅助信息　c-gray　13px/21px</p>
<p class="c-showurl">绿色showurl　c-showurl　13px/21px</p>
<a class="c-blocka" href="#"><p class="c-title">可点区块链接　c-blocka</p></a>
<p class="c-line-top c-gap-top">上分割线　c-line-top</p>
<p class="c-line-dotted-top c-gap-top">上分割点线　c-line-dotted-top</p>
<p class="c-line-bottom c-gap-bottom">下分割线　c-line-bottom</p>
<p class="c-line-dotted-bottom c-gap-bottom">下分割点线　c-line-dotted-bottom</p>
```

## 文字颜色

**注意**：文字颜色一般不需要单独使用，卡片公共样式已定义了颜色及对应的字号，可用于被区块点击a标签包裹的元素覆盖a链接颜色。

``` html
<p class="c-color">正文[#333] c-color</p>
<p class="c-color-gray">辅助文字[#999] c-color-gray</p>
<p class="c-color-gray-a">配合图标出现的可点文字[#666] c-color-gray-a</p>
<p class="c-color-link">链接色[#00c] c-color-link</p>
<p class="c-color-url">外部url色[#2a9457] c-color-url</p>
<p class="c-color-red">红色(风险，慎用)[#ee4433] c-color-red</p>
<p class="c-color-orange">橙色(一般用于价格)[#ff6500] c-color-orange</p>
```

## 间隔

目前定义了上下左右四个方向的三种全局间隔：0.08rem(8px)、0.12rem(12px)、0.04rem(4px)，使用margin属性实现，分别对应如下classname：

* 0.08rem: c-gap-top, c-gap-right, c-gap-bottom, c-gap-left
* 0.12rem: c-gap-top-large, c-gap-right-large, c-gap-bottom-large, c-gap-left-large
* 0.04rem: c-gap-top-small, c-gap-right-small, c-gap-bottom-small, c-gap-left-small

原则上不允许自定义其它margin、padding值，在实际开发中，建议采取优先设置上、左边距的原则。即:

* 两个元素，左右排列有间距时，设置第二个元素的左边距
* 两个元素，上下排列有间距时，设置第二个元素的上边距

**注意行高影响**：

由于文字存在行高，即实际占位空间大于文字显示空间，因此，在定义文字与图片、文字与文字间隙时，因根据实际情况，使用"c-gap-*-small"控制间隙。

目前全局样式控制文字上下留白为4px，可参考该值计算。


## 按行截断

``` html
<p class="c-line-clamp2">我是一段两行截断的内容；我是一段两行截断的内容；我是一段两行截断的内容；我是一段两行截断的内容；我是一段两行截断的内容；我是一段两行截断的内容；我是一段两行截断的内容；</p>
```

目前定义了1/2/3/4/5行截断的class，使用"c-line-clamp*"引入。

其中1行截断采用"white-space:nowrap; overflow:hidden;"实现；多行截断采用"-webkit-box-orient:vertical;"实现。

**注意**：多行截断当文字确实被截断时，会出现最下方一行文字与文字父容器之间行高消失现象，因此为多行截断样式默认添加了"margin-bottom:4px;"补足行高。但是当文字较少未发生截断时，行高恢复正常，因此在这一情况下会出现底部留白过多的问题。该问题暂时无法解决。



## 示例代码

#### 基本卡片

``` html
<div class="c-container">
    这是一个用纯文本的简单卡片，卡片中可以包含任意内容。卡片定义了固定的内边距，当然也可以通过一些方式消除。
</div>
```

#### 消除边距的卡片

``` html
<div class="c-container">
    <div class="c-row-tile c-row-top c-row-bottom" style="background:#C2F9FF;">
        <p>这是一个消除了内边距的卡片</p>
        <p>c-row-tile：占满左右边距</p>
        <p>c-row-top：占满上边距</p>
        <p>c-row-bottom：占满下边距</p>
        <p>可应用于卡片包含背景图等特殊情况，以上属性可随意组合使用</p>
    </div>
</div>
```

#### 纯文本卡片

``` html
<div class="c-container">
    <a href="http://www.baidu.com" target="_blank" class="c-blocka">
    <h3 class="c-title c-gap-top-small">
        <em>刘德华</em>百度视频百度视频百度视频百度视频百度视频百度视频百度视频百度视频
    </h3>
    <div class="c-abstract c-gap-top-small">
        约有335,967个<em>刘德华</em>相关的视频 <em>刘德华</em>《解开》 - 搜狐视频 tv.sohu.com 鲁豫有约2014125吕良伟曾差点被<em>刘德华</em>...v.ifeng.com..
    </div>
    </a>
    <div><span class="c-showurl">video.baidu.com</span></div>
</div>
```

#### 图文卡片

``` html
<div class="c-container" tpl="www_normal">
    <a href="http://www.baidu.com" target="_blank" class="c-blocka">
    <h3 class="c-title c-gap-top-small">
        <em>刘德华</em>资料
    </h3>
    <div class="c-row c-gap-top-small">
        <div class="c-span3"><img src="1x1.jpg" class="c-img"></div>
        <div class="c-span9">
            <p class="c-line-clamp3 c-color">
            015年7月3日 - ·帕斯卡、景甜(请注意景甜的名字全程排在<em>刘德华</em>前面)、<em>刘德华</em>、张涵予、鹿晗、林更新、王俊凯等...张涵予、鹿晗、林更新、王俊凯等...张涵予、鹿晗、林更新、王俊凯等...张涵予、鹿晗、林更新、王俊凯等...张涵予、鹿晗、林更新、王俊凯等...张涵予、鹿晗、林更新、王俊凯等...张涵予、鹿晗、林更新、王俊凯等
            </p>
            <p><span class="c-showurl">video.baidu.com</span></p>
        </div>
    </div>
    </a>
</div>
```

#### 列表卡片

``` html
<div class="c-container">
    <a href="http://www.baidu.com" target="_blank" class="c-blocka">
    <h3 class="c-title c-gap-top-small">
        <em>安宁里</em>二手房房源
    </h3>
    </a>
    <div class="c-gap-top-small c-line-bottom">
        <a href="http://www.baidu.com" target="_blank" class="c-blocka c-gap-bottom-small">
        <div><em>安居里</em>小区二手房房源</div>
        <div class="c-color">搜房网房北京租房首选网站，热门租房信息搜房网房北京租房首选网站，热门租房信息搜房网房北京租房首选网站，热门租房信息</div>
        <div class="c-gray">北京海淀区东北旺西路八号建明里</div>
        </a>
    </div>
    <div class="c-gap-top-small c-gap-bottom-small c-line-bottom">
        <a href="http://www.baidu.com" target="_blank" class="c-blocka c-gap-bottom-small">
        <div><em>安居里</em>小区二手房房源</div>
        <div class="c-color">搜房网房北京租房首选网站，热门租房信息</div>
        <div class="c-gray">北京海淀区东北旺西路八号建明里</div>
        </a>
    </div>
    <div class="c-row">
        <div class="c-span6">
            <a href="http://www.baidu.com" target="_blank" class="c-blocka">
                <p class="c-moreinfo">更多相关信息<i class="c-icon c-gap-left-small">&#xe734</i></p>
            </a>
        </div>
    </div>
</div>
```

#### 多图卡片

``` html
<div class="c-container" tpl="exactqa">
    <h3 class="c-title c-gap-top-small">刘德华的相关人物</h3>
    <div class="c-row c-gap-top-small c-gap-bottom-large">
        <div class="c-span3">
            <a href="http://www.baidu.com" target="_blank">
                <img src="1x1.jpg" class="c-img">
                <p class="c-line-clamp1" style="text-align:center">标题标题标题标题标题标题</p>
            </a>
        </div>
        <div class="c-span3">
            <a href="http://www.baidu.com" target="_blank">
                <img src="1x1.jpg" class="c-img">
                <p class="c-line-clamp1" style="text-align:center">标题</p>
            </a>
        </div>
        <div class="c-span3">
            <a href="http://www.baidu.com" target="_blank">
                <img src="1x1.jpg" class="c-img">
                <p style="text-align:center">标题</p>
            </a>
        </div>
        <div class="c-span3">
            <a href="http://www.baidu.com" target="_blank">
                <img src="1x1.jpg" class="c-img">
                <p style="text-align:center">标题</p>
            </a>
        </div>
    </div>
    <div class="c-row">
        <div class="c-span6">
            <p class="c-color-gray">百度百科</p>
        </div>
        <div class="c-span6">
            <a href="http://www.baidu.com" target="_blank" class="c-blocka">
            <p class="c-moreinfo">更多相关信息<i class="c-icon c-gap-left-small">&#xe734</i></p>
            </a>
        </div>
    </div>
</div>
```
