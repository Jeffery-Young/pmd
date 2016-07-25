# 表格
> by yangfan


## 使用方法

``` html
<table class="c-table">
    <tbody>
        <tr>
            <th>表头</th><th>表头</th><th>表头</th>
        </tr>
        <tr>
            <td>表格内容</td><td>表格内容</td><td>表格内容</td>
        </tr>
        <tr>
            <td>表格内容</td><td>表格内容</td><td>表格内容</td>
        </tr>
    </tbody>
</table>
```

全局样式组件，可直接使用。

只需为table元素引入c-table类名即可。

表格可根据实际情况设置每列的列宽及文字对齐方式，一般保留一列不设置宽度，该列可随屏幕大小任意缩放。


### 着重强调表头的表格

``` html
<table class="c-table">
    <tbody>
        <tr class="c-table-hihead">
            <th><div>表头</div></th><th><div>表头</div></th><th><div>表头</div></th>
        </tr>
        <tr>
            <td>表格内容</td><td>表格内容</td><td>表格内容</td>
        </tr>
    </tbody>
</table>
```

若需要这种强调表头的表格，则为表头所在tr引入"c-table-hihead"类，并为th中多包裹一层div（用于实现背景色超出表格区域）。


### 无底线表格

``` html
<table class="c-table">
    <tbody>
        <tr>
            <th>表头</th><th>表头</th><th>表头</th>
        </tr>
        <tr class="c-table-noborder">
            <td>表格内容</td><td>表格内容</td><td>表格内容</td>
        </tr>
    </tbody>
</table>
```

某些table元素下方无内容，不适合添加下边线，则为最后的tr标签引入c-table-noborder即可取消边线。



## 示例代码

#### 一般表格

``` html
<div class="c-container">
    <table class="c-table">
        <tbody>
            <tr>
                <th>表头</th><th>表头</th><th>表头</th>
            </tr>
            <tr>
                <td>表格内容</td><td>表格内容</td><td>表格内容</td>
            </tr>
            <tr>
                <td>表格内容</td><td>表格内容</td><td>表格内容</td>
            </tr>
        </tbody>
    </table>
</div>
```

#### 着重强调表头的表格

``` html
<div class="c-container">
    <table class="c-table">
        <tbody>
            <tr class="c-table-hihead">
                <th><div>表头</div></th><th><div>表头</div></th><th><div>表头</div></th>
            </tr>
            <tr>
                <td>表格内容</td><td>表格内容</td><td>表格内容</td>
            </tr>
            <tr>
                <td>表格内容</td><td>表格内容</td><td>表格内容</td>
            </tr>
        </tbody>
    </table>
</div>
```

#### 无底线表格

``` html
<div class="c-container">
    <table class="c-table">
        <tbody>
            <tr class="c-table-hihead">
                <th><div>表头</div></th><th><div>表头</div></th><th><div>表头</div></th>
            </tr>
            <tr>
                <td>表格内容</td><td>表格内容</td><td>表格内容</td>
            </tr>
            <tr class="c-table-noborder">
                <td>表格内容</td><td>表格内容</td><td>表格内容</td>
            </tr>
        </tbody>
    </table>
</div>
```