# 表单元素
> by yangfan


## 使用方法

全局样式组件，可直接使用。


### 输入框

``` html
<input type="text" class="c-input" placeholder="input">
<input type="text" class="c-input" placeholder="disabled" disabled>
```

输入框需引入"c-input"类名。

若需控制输入框宽度，请结合栅格"c-row c-span*"使用，例如：

``` html
<div class="c-row">
    <div class="c-span6"><input class="c-input" placeholder="(6n)"></div>
    <div class="c-span6"><input class="c-input" placeholder="(6n)disabled状态" disabled></div>
</div>
```


### 下拉框

``` html
<div class="c-dropdown">
    <label>单位类型：</label>
    <select>
        <option value="volvo">米</option>
        <option value="saab">分米</option>
        <option value="opel" selected="selected">厘米</option>
    </select>
</div>

<div class="c-dropdown c-dropdown-disable">
    <select disabled>
        <option value="boy" selected="selected">男</option>
        <option value="girl">女</option>
    </select>
</div>
```

使用下拉框需按照以上html结构，父容器定义"c-dropdown"类名，子元素包含label(可选)、select标签。

可以在父容器中添加"c-dropdown-disable"，在select标签中定义disabled属性，禁用下拉框。

点击下拉框组件将调起系统默认select。

若需控制输入框宽度，同样需要结合栅格"c-row c-span*"使用。



## 示例代码

#### 输入框

``` html
<div class="c-container">
    <div class="c-row">
        <div class="c-span4"><input type="text" class="c-input" placeholder="(4n)"></div>
        <div class="c-span8"><input type="text" class="c-input" placeholder="(8n)disabled状态" disabled=""></div>
    </div>
    <div class="c-row c-gap-top">
        <div class="c-span6"><input class="c-input" placeholder="(6n)"></div>
        <div class="c-span6"><input class="c-input" placeholder="(6n)disabled状态" disabled=""></div>
    </div>
    <div class="c-row c-gap-top">
        <div class="c-span8"><input class="c-input" placeholder="(8n)"></div>
        <div class="c-span4"><a class="c-btn" href="#">确定</a></div>
    </div>
</div>
```

#### 下拉框

``` html
<div class="c-container">
    <div class="c-row">
        <div class="c-span6">
            <div class="c-dropdown">
                <select>
                    <option value="volvo">米</option>
                    <option value="saab">分米</option>
                    <option value="opel" selected="selected">厘米</option>
                    <option value="audi">毫米</option>
                </select>
            </div>
        </div>
        <div class="c-span6">
            <div class="c-dropdown c-dropdown-disable">
                <select disabled="">
                    <option value="boy" selected="selected">男</option>
                    <option value="girl">女</option>
                </select>
            </div>
        </div>
    </div>
    <div class="c-row c-gap-top">
        <div class="c-span8">
            <div class="c-dropdown">
                <label>单位类型：</label>
                <select>
                    <option value="volvo">米</option>
                    <option value="saab">分米</option>
                    <option value="opel" selected="selected">厘米</option>
                    <option value="audi">毫米</option>
                </select>
            </div>
        </div>
        <div class="c-span4">
            <div class="c-dropdown c-dropdown-disable">
                <label>性别：</label>
                <select disabled="">
                    <option value="boy" selected="selected">男</option>
                    <option value="girl">女</option>
                </select>
            </div>
        </div>
    </div>
</div>
```