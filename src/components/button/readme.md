# 按钮
> by yangfan


## 使用方法

``` html
<a class="c-btn" href="#">link默认按钮</a>
<a class="c-btn c-btn-primary" href="#">link主要按钮</a>
<a class="c-btn c-btn-disable" href="#">link禁用按钮</a>
<button class="c-btn" type="submit">button默认按钮</button>
<button class="c-btn c-btn-primary" type="submit">button主要按钮</button>
<button class="c-btn c-btn-disable" type="submit">button禁用按钮</button>

```

全局样式组件，可直接使用。

按钮都需引入"c-btn"类名，"c-btn-primary"、"c-btn-disable"分别控制不同样式。

若需控制按钮宽度，请结合栅格"c-row c-span*"使用，例如：

``` html
<div class="c-row">
    <div class="c-span6"><a class="c-btn" href="#">(6n)link默认按钮</a></div>
    <div class="c-span6"><button class="c-btn" type="submit">(6n)button默认按钮</button></div>
</div>
```

### 带图标的按钮

按钮可结合图标使用，采用c-icon方式引入图标即可，图标颜色统一定义，一般不允许修改：

``` html
<a class="c-btn c-btn-primary" href="#"><i class="c-icon">&#xe732</i>图标主要按钮</a>
<a class="c-btn c-btn-disable" href="#"><i class="c-icon">&#xe732</i>图标禁用按钮</a>
```
注意：图标按钮请勿随意使用在普通按钮上，UE只允许在主要按钮样式上使用图标。



## 示例代码

``` html
<div class="c-container">
    <div class="c-row">
        <div class="c-span6"><a class="c-btn" href="#">(6n)link默认按钮</a></div>
        <div class="c-span6"><button class="c-btn" type="submit">(6n)button默认按钮</button></div>
    </div>
    <div class="c-row c-gap-top">
        <div class="c-span6"><a class="c-btn c-btn-primary" href="#">(6n)link主要按钮</a></div>
        <div class="c-span6"><button class="c-btn c-btn-primary" type="submit">(6n)button主要按钮</button></div>
    </div>
    <div class="c-row c-gap-top">
        <div class="c-span6"><a class="c-btn c-btn-disable" href="#">(6n)link禁用按钮</a></div>
        <div class="c-span6"><button class="c-btn c-btn-disable" type="submit">(6n)button禁用按钮</button></div>
    </div>
    <div class="c-row c-gap-top">
        <div class="c-span4"><a class="c-btn" href="#"><i class="c-icon">&#xe732</i>图标默认按钮</a></div>
        <div class="c-span4"><a class="c-btn c-btn-primary" href="#"><i class="c-icon">&#xe732</i>图标主要按钮</a></div>
        <div class="c-span4"><a class="c-btn c-btn-disable" href="#"><i class="c-icon">&#xe732</i>图标禁用按钮</a></div>
    </div>
</div>
```

#### 带图标的按钮

``` html
<div class="c-container">
    <div class="c-row c-gap-top">
        <div class="c-span12"><a class="c-btn c-btn-primary" href="#"><i class="c-icon">&#xe732</i>图标主要按钮</a></div>
    </div>
    <div class="c-row c-gap-top">
        <div class="c-span12"><a class="c-btn c-btn-disable" href="#"><i class="c-icon">&#xe732</i>图标禁用按钮</a></div>
    </div>
</div>
```
