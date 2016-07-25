# 文字图标
> by yangfan


## 使用方法

``` html
<i class="classname">文字</i>
```

全局样式组件，可直接使用。

除c-text-info文字图标字体大小继承父元素外，其它文字图标字体大小为10px（pc_chrome下最小显示12px，wise设备正常），一般不允许自定义font-size。


#### 背景色文字图标

``` html
// 蓝色背景
<i class="c-text c-text-public">官网</i>
// 红色背景
<i class="c-text c-text-danger">风险</i>
```

#### 线框文字图标

``` html
// 蓝色线框
<i class="c-text-box c-text-box-blue">MV</i>
// 红色线框
<i class="c-text-box c-text-box-red">新</i>
// 橙色线框
<i class="c-text-box c-text-box-orange">付费</i>
// 绿色线框
<i class="c-text-box c-text-box-green">票</i>
// 黄色线框
<i class="c-text-box c-text-box-yellow">券</i>
// 灰色线框
<i class="c-text-box c-text-box-gray">时间</i>
```

#### 提示信息文字

``` html
<i class="c-text-info">[图文]</i>
<i class="c-text-info">[专业回答]</i>
```

#### 序号图标

序号图标引入方式为<span class="c-index">数字</i>；

其中1、2、3位可分别定义加强样式，对应c-index-hot*，序号最多支持两位数。

``` html
// 加强样式，只允许前三位
<span class="c-index c-index-hot1">1</span>
<span class="c-index c-index-hot2">2</span>
<span class="c-index c-index-hot3">3</span>
// 普通序号样式
<span class="c-index">1</span>
<span class="c-index">2</span>
<span class="c-index">3</span>
<span class="c-index">4</span>
<span class="c-index">5</span>
<span class="c-index">99</span>
```



## 示例代码

#### 文字图标

``` html
<div class="c-container">
    <table class="c-table">
        <tbody><tr class="c-table-hihead"><th><div>示例</div></th><th><div>class</div></th></tr>
        <tr><td><i class="c-text c-text-public">官网</i></td><td>.c-text .c-text-public</td></tr>
        <tr><td><i class="c-text c-text-danger">风险</i></td><td>.c-text .c-text-danger</td></tr>
        <tr><td><i class="c-text-box c-text-box-red">新</i></td><td>.c-text-box .c-text-box-red</td></tr>
        <tr><td><i class="c-text-box c-text-box-red">热</i></td><td>.c-text-box .c-text-box-red</td></tr>
        <tr><td><i class="c-text-box c-text-box-orange">付费</i></td><td>.c-text-box .c-text-box-orange</td></tr>
        <tr><td><i class="c-text-box c-text-box-blue">MV</i></td><td>.c-text-box .c-text-box-blue</td></tr>
        <tr><td><i class="c-text-box c-text-box-gray">超清</i></td><td>.c-text-box .c-text-box-gray</td></tr>
        <tr><td><i class="c-text-info">[图文]</i></td><td>.c-text-info</td></tr>
        <tr><td><i class="c-text-info">[专业回答]</i></td><td>.c-text-info</td></tr>
        <tr><td><i class="c-text-box c-text-box-orange">减</i></td><td>.c-text-box .c-text-box-orange</td></tr>
        <tr><td><i class="c-text-box c-text-box-red">免</i></td><td>.c-text-box .c-text-box-red</td></tr>
        <tr><td><i class="c-text-box c-text-box-green">票</i></td><td>.c-text-box .c-text-box-green</td></tr>
        <tr><td><i class="c-text-box c-text-box-blue">赔</i></td><td>.c-text-box .c-text-box-blue</td></tr>
        <tr><td><i class="c-text-box c-text-box-yellow">券</i></td><td>.c-text-box .c-text-box-yellow</td></tr>
    </tbody></table>
</div>
```

#### 序号图标
``` html
<div class="c-container">
    <table class="c-table">
        <tbody><tr class="c-table-hihead"><th><div>示例</div></th><th><div>class</div></th></tr>
        <tr><td><span class="c-index c-index-hot1">1</span></td><td>.c-index .c-index-hot1</td></tr>
        <tr><td><span class="c-index c-index-hot2">2</span></td><td>.c-index .c-index-hot2</td></tr>
        <tr><td><span class="c-index c-index-hot3">3</span></td><td>.c-index .c-index-hot3</td></tr>
        <tr><td><span class="c-index">1</span></td><td>.c-index</td></tr>
        <tr><td><span class="c-index">2</span></td><td>.c-index</td></tr>
        <tr><td><span class="c-index">3</span></td><td>.c-index</td></tr>
        <tr><td><span class="c-index">4</span></td><td>.c-index</td></tr>
        <tr><td><span class="c-index">5</span></td><td>.c-index</td></tr>
        <tr><td><span class="c-index">99</span></td><td>.c-index</td></tr>
    </tbody></table>
</div>
```