# 标签页
> by yangfan


## 使用方式

js组件，require方式引入。

``` javascript
require(['pmd/tabs/tabs'], function (Tabs){
    // 固定tabs
    var fixedTabs = new Tabs($(dom));
    // 横滑tabs
    var scrollTabs = new Tabs($(dom), {
        allowScroll: true,
        toggleMore: false
    });
    // 下拉tabs
    var moreTabs = new Tabs($(dom), {
        allowScroll: true,
        toggleMore: true,
        toggleLabel: "请选择国家"
    });
});

```

### 参数说明

**panel 必选**：用于显示组件的dom节点，通常是.c-tabs层；

**options 可选**：Object 创建组件的参数；

**options.allowScroll**：Boolean 是否允许tabs滑动，需配合dom中c-tabs-nav-view结构使用；

**options.toggleMore**：Boolean 是否显示下拉菜单，需配合dom中c-tabs-nav-toggle结构使用，且options.allowScroll必须为true；

**options.toggleLabel**：String 下拉显示后的引导文字，默认为“请选择”；

**options.logClass**: String 交互点击Classname，默认为“WA_LOG_TAB”；

**options.current**：Number 当前选中tab的序号，默认为0，当tab中有currentClass时，current值以currentClass为主，current指定的参数将无效；

**options.scrollSize**：Number tabs滚动的距离，默认为-40，一般无需更改；

**options.onChange**：Function 在内容切换后触发，通常用于切换内容需异步获取的情况；返回参数(this.current（点击tab序号）, this.currentContent（切换内容的dom）)；

**options.onResetChange**：Function 在内容切换前触发，通常用于在同一个内容层进行内容切换的情况；返回参数(this.current（点击tab序号）)；

**options.onTabScrollEnd**：Function 当允许tabs横滑时，滑动结束时触发的回调（同iscroll的scrollEnd）；返回参数(iscoll实例)；


## html结构

### 等分固定tabs

``` html
<div class="c-tabs wa-tabs-wrapper-fixed">
    <div class="c-row-tile">
        <ul class="c-tabs-nav">
            <li class="c-tabs-nav-li c-tabs-nav-selected">第一季</li>
            <li class="c-tabs-nav-li">第二季</li>
            <li class="c-tabs-nav-li">第三季</li>
            <li class="c-tabs-nav-li">第四季更新至09</li>
        </ul>
    </div>
    <div class="c-tabs-content">第一季内容</div>
    <div class="c-tabs-content" style="display:none;">第二季内容</div>
    <div class="c-tabs-content" style="display:none;">第三季内容</div>
    <div class="c-tabs-content" style="display:none;">第四季内容</div>
</div>
```

由于等分固定导航在文字内容放不下时会截断，请注意导航个数，一般不宜多于6个。

"c-tabs"为标签页父容器；

"c-tabs-nav"为标签页导航父容器；

"c-tabs-nav-li"为标签页导航子元素，当前选中导航使用"c-tabs-nav-selected"标识。

"c-tabs-content"为标签页对应的不同标签内容，以上写法适合同步tabs模式，需保证"c-tabs-content"与"c-tabs-nav-li"个数相同。

若需要异步渲染内容，请勿使用"c-tabs-content"，可结合onChange方法实现内容替换。


### 横滑tabs

``` html
<!--多包裹一层容器用作横滑元素可视区-->
<div class="c-tabs-nav-view">
	<!--导航实际内容-->
    <ul class="c-tabs-nav">
        <li class="c-tabs-nav-li c-tabs-nav-selected">全部</li>
        <li class="c-tabs-nav-li">俄罗斯</li>
        ......
        <li class="c-tabs-nav-li">德国</li>
        <li class="c-tabs-nav-li">法兰西</li>
    </ul>
</div>
```

当导航内容较多时，可以使用横滑导航tabs，在导航父容器"c-tabs-nav"之外再包裹一层"c-tabs-nav-view"。

需配合"allowScroll:true"使用。


### 带下拉按钮的横滑tabs

``` html
<!--多包裹一层容器用作横滑元素可视区-->
<div class="c-tabs-nav-view">
	<!--导航实际内容-->
    <ul class="c-tabs-nav">
        <li class="c-tabs-nav-li c-tabs-nav-selected">全部</li>
        <li class="c-tabs-nav-li">俄罗斯</li>
        ......
        <li class="c-tabs-nav-li">德国</li>
        <li class="c-tabs-nav-li">法兰西</li>
    </ul>
    <!--下拉按钮-->
    <div class="c-tabs-nav-toggle"></div>
</div>
```

若需要使用下拉按钮，需要在"c-tabs-nav-view"中增加"c-tabs-nav-toggle"元素，并配合"toggleMore:true"使用。

组件会自动处理下拉按钮点击切换状态。


## 卡片底部选项卡

提供在卡片底部使用tabs实现选项卡功能。

``` javascript
require(['pmd/tabs/tabs'], function (Tabs){
    var fixedTabs = new Tabs($(dom), {
        allowScroll: true
    });
});
```

js接口完全相同，禁止使用options.toggleMore。


### html结构

``` html
<div class="c-tabs c-gap-top wa-tabs-wrapper-card">
    <div class="c-tabs-content">百度音乐</div>
    <div class="c-tabs-content" style="display:none;">QQ音乐</div>
    <div class="c-tabs-content" style="display:none;">虾米音乐</div>
    <div class="c-tabs-content" style="display:none;">听音乐</div>
    <div class="c-tabs-content" style="display:none;">网易云音乐</div>
    <div class="c-row-tile c-row-bottom">
        <div class="c-tabs-nav-view">
            <ul class="c-tabs-nav c-tabs-nav-bottom">
                <li class="c-tabs-nav-li c-tabs-nav-selected"><i class="c-tabs-nav-icon wa-tabs-card-icon-baidu c-gap-right-small"></i>百度音乐</li>
                <li class="c-tabs-nav-li"><i class="c-tabs-nav-icon c-icon c-gap-right-small">&#xe73a</i>QQ音乐</li>
                <li class="c-tabs-nav-li"><i class="c-tabs-nav-icon c-icon c-gap-right-small">&#xe73a</i>虾米音乐</li>
                <li class="c-tabs-nav-li"><i class="c-tabs-nav-icon c-icon c-gap-right-small">&#xe73a</i>听音乐</li>
                <li class="c-tabs-nav-li"><i class="c-tabs-nav-icon c-icon c-gap-right-small">&#xe73a</i>网易云音乐</li>
            </ul>
        </div>
    </div>
</div>
```

HTML结构区别：

1. "c-tabs-content"置于"c-tabs-nav"上方；

2. "c-tabs-nav"需加入"c-tabs-nav-bottom"样式；

3. "c-row-tile"需结合"c-row-bottom"样式消除卡片下边距影响；

4. 可以加入图标(只在选中tab中显示)，在"c-tabs-nav-li"中采用'<i class="c-tabs-nav-icon c-icon c-gap-right-small">xxx</i>'方式引入。支持文字icon(c-icon)及自定义icon(自行定义classname)；

5. 同时支持等分布局及滑动布局，使用方法与普通c-tabs相同；

6. 底部选项卡不支持下拉按钮功能。



## 代码示例

### 等分固定tabs

``` html
<div class="c-tabs c-gap-top wa-tabs-wrapper-fixed">
    <div class="c-row-tile">
        <ul class="c-tabs-nav">
            <li class="c-tabs-nav-li c-tabs-nav-selected">第一季
            </li><li class="c-tabs-nav-li">第二季
            </li><li class="c-tabs-nav-li">第三季
            </li><li class="c-tabs-nav-li">第四季更新至09
            </li>
        </ul>
    </div>
    <div class="c-tabs-content">第一季内容</div>
    <div class="c-tabs-content" style="display:none;">第二季内容</div>
    <div class="c-tabs-content" style="display:none;">第三季内容</div>
    <div class="c-tabs-content" style="display:none;">第四季内容</div>
</div>
```
``` javascript
<script type="text/javascript">
    require(['pmd/tabs/tabs'], function (Tabs) {
        var fixedTabs = new Tabs($('.wa-tabs-wrapper-fixed'));
    });
</script>
```

### 横滑tabs

``` html
<div class="c-tabs c-gap-top wa-tabs-wrapper-scroll">
    <div class="c-row-tile">
        <div class="c-tabs-nav-view">
            <ul class="c-tabs-nav">
                <li class="c-tabs-nav-li c-tabs-nav-selected">全部
                </li><li class="c-tabs-nav-li">俄罗斯
                </li><li class="c-tabs-nav-li">美国
                </li><li class="c-tabs-nav-li">中国
                </li><li class="c-tabs-nav-li">英格兰
                </li><li class="c-tabs-nav-li">日本
                </li><li class="c-tabs-nav-li">德国
                </li><li class="c-tabs-nav-li">法兰西
                </li>
            </ul>
        </div>
    </div>
    <div class="c-tabs-content">全部区域</div>
    <div class="c-tabs-content" style="display:none;">俄罗斯区域</div>
    <div class="c-tabs-content" style="display:none;">美国区域</div>
    <div class="c-tabs-content" style="display:none;">中国区域</div>
    <div class="c-tabs-content" style="display:none;">英格兰区域</div>
    <div class="c-tabs-content" style="display:none;">日本区域</div>
    <div class="c-tabs-content" style="display:none;">德国区域</div>
    <div class="c-tabs-content" style="display:none;">法兰西区域</div>
</div>
```
``` javascript
<script type="text/javascript">
    require(['pmd/tabs/tabs'], function (Tabs) {
        var scrollTabs = new Tabs($('.wa-tabs-wrapper-scroll'), {
            allowScroll: true,
            toggleMore: false,
            onTabScrollEnd: function (e) {
                console.log(e);
            }
        });
    });
</script>
```

### 带下拉按钮的横滑tabs

``` html
<div class="c-tabs c-gap-top wa-tabs-wrapper-more">
    <div class="c-row-tile">
        <div class="c-tabs-nav-view">
            <ul class="c-tabs-nav">
                <li class="c-tabs-nav-li c-tabs-nav-selected">全部
                </li><li class="c-tabs-nav-li">俄罗斯
                </li><li class="c-tabs-nav-li">美国
                </li><li class="c-tabs-nav-li">中国
                </li><li class="c-tabs-nav-li">英格兰
                </li><li class="c-tabs-nav-li">日本
                </li><li class="c-tabs-nav-li">德国
                </li><li class="c-tabs-nav-li">法兰西
                </li>
            </ul>
            <div class="c-tabs-nav-toggle"></div>
        </div>
    </div>
    <div class="c-tabs-content">全部区域</div>
    <div class="c-tabs-content" style="display:none;">俄罗斯区域</div>
    <div class="c-tabs-content" style="display:none;">美国区域</div>
    <div class="c-tabs-content" style="display:none;">中国区域</div>
    <div class="c-tabs-content" style="display:none;">英格兰区域</div>
    <div class="c-tabs-content" style="display:none;">日本区域</div>
    <div class="c-tabs-content" style="display:none;">德国区域</div>
    <div class="c-tabs-content" style="display:none;">法兰西区域</div>
</div>
```
``` javascript
<script type="text/javascript">
    require(['pmd/tabs/tabs'], function (Tabs) {
        var moreTabs = new Tabs($('.wa-tabs-wrapper-more'), {
            allowScroll: true,
            toggleMore: true,
            toggleLabel: "请选择国家"
        });
    });
</script>
```

### 卡片底部选项卡

``` html
<div class="c-tabs c-gap-top wa-tabs-wrapper-card">
    <div class="c-tabs-content">百度音乐</div>
    <div class="c-tabs-content" style="display:none;">QQ音乐</div>
    <div class="c-tabs-content" style="display:none;">虾米音乐</div>
    <div class="c-tabs-content" style="display:none;">听音乐</div>
    <div class="c-tabs-content" style="display:none;">网易云音乐</div>
    <div class="c-row-tile c-row-bottom">
        <div class="c-tabs-nav-view">
            <ul class="c-tabs-nav c-tabs-nav-bottom">
                <li class="c-tabs-nav-li c-tabs-nav-selected"><i class="c-tabs-nav-icon c-icon c-gap-right-small">&#xe780</i>百度音乐
                </li><li class="c-tabs-nav-li"><i class="c-tabs-nav-icon c-icon c-gap-right-small">&#xe780</i>QQ音乐
                </li><li class="c-tabs-nav-li"><i class="c-tabs-nav-icon c-icon c-gap-right-small">&#xe780</i>虾米音乐
                </li><li class="c-tabs-nav-li"><i class="c-tabs-nav-icon c-icon c-gap-right-small">&#xe780</i>听音乐
                </li><li class="c-tabs-nav-li"><i class="c-tabs-nav-icon c-icon c-gap-right-small">&#xe780</i>网易云音乐
                </li>
            </ul>
        </div>
    </div>
</div>
```
``` javascript
<script type="text/javascript">
    require(['pmd/tabs/tabs'], function (Tabs){
        var fixedTabs = new Tabs($('.wa-tabs-wrapper-card'), {
            allowScroll: true
        });
    });
</script>
```