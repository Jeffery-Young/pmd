# 短链
> by yangfan


## 使用方法

全局样式组件，可直接使用。

短链可使用在任意宽度的父容器中，一个`c-slink`代表一行，内部a标签均分，超出部分...截断，需要几行即定义几个`c-slink`。

子元素也可以不为a标签，为任意子元素标签加上`c-slink-elem`样式名即可。

**注意**：一般一个`c-slink`容器内部元素不应多于6个


### 弱短链

``` html
<div class="c-slink">
    <a href="http://www.baidu.com" target="_blank">实时</a>
    <a href="http://www.baidu.com" target="_blank">机构研究报</a>
    <p class="c-slink-elem">个股智能点</p>
    <div class="c-slink-elem">股智能</div>
</div>
```


### 强短链

若需要使用强短链，则同时加入c-slink c-slink-strong即可，非特殊情况一般不允许使用。

``` html
<div class="c-slink c-slink-strong">
    <a href="http://www.baidu.com" target="_blank">实时</a>
    <a href="http://www.baidu.com" target="_blank">机构研究报</a>
    <span class="c-slink-elem">个股智能点</span>
    <p class="c-slink-elem">股智能</p>
</div>
```



## 示例代码

#### 弱短链

``` html
<div class="c-container">
    <div class="c-slink">
        <a href="http://www.baidu.com" target="_blank">实时</a>
        <a href="http://www.baidu.com" target="_blank">机构研究报</a>
        <p class="c-slink-elem">个股智能点</p>
        <div class="c-slink-elem">股智能</div>
    </div>
    <div class="c-slink">
        <a href="http://www.baidu.com" target="_blank">实时资金流向流向</a>
        <a href="http://www.baidu.com" target="_blank">深度数据解谜流向流向</a>
        <a href="http://www.baidu.com" target="_blank">实时资金流向流向</a>
    </div>
</div>
```

#### 强短链

``` html
<div class="c-container">
    <div class="c-slink c-slink-strong">
        <a href="http://www.baidu.com" target="_blank">实时</a>
        <a href="http://www.baidu.com" target="_blank">机构研究报</a>
        <span class="c-slink-elem">个股智能点</span>
        <p class="c-slink-elem">股智能</p>
    </div>
    <div class="c-slink c-slink-strong">
        <a href="http://www.baidu.com" target="_blank">实时资金流向流向</a>
        <a href="http://www.baidu.com" target="_blank">深度数据解谜流向流向</a>
        <a href="http://www.baidu.com" target="_blank">实时资金流向流向</a>
    </div>
</div>
```