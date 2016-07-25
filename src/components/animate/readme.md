# 动画
> by yangfan


## 使用方式

css3动画组件，同时支持CSS、JS使用。

**注意：该组件还未开放使用，内部征集意见中......**



## 代码示例

#### css引用

``` css
    <div class="myElement animate shake"></div>;
```

由于动画样式库依赖amd组件加载，因此在套用css时也需要js require动画样式代码（此方法有待商榷）。

``` javascript
    require(['pmd/animate/animate'], function () {});
```


#### js引用

``` javascript
    require(['pmd/animate/animate'], function (Animate) {
        $('.myElement').animate(nowAnimate, 800, function () {
            console.log('do sth...');
        });
    });
```