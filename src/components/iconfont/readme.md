# 纯色图标（iconfont）
> by yangfan


## 使用方法

``` html
<i class="c-icon">icon代码</i>
<i class="c-icon">&#xe731</i>
```

全局样式组件，可直接使用。

iconfont使用与正常文字无异，大小、颜色都可以采用文字方法自行控制，也可组合使用卡片公共样式，例如：

``` html
<i class="c-icon c-color-link">&#xe731</i>
```

**注意**：若需要使用为元素(:before:after)插入icon，文字代码请使用\exxx，例如：

``` css
.el:before {
    content: '\e731'
}
```

目前已有的icon可直接参考右侧示例。


## 示例代码

``` html
<table class="c-table wa-cicon-demo">
    <tr class="c-table-hihead"><th><div>示例</div></th><th><div>含义</div></th><th><div>icon代码</div></th></tr>
    <tr><td><i class="c-icon">&#xe780</i></td><td>百度LOGO</td><td>&#xe780</td></tr>
    <tr><td><i class="c-icon">&#xe731</i></td><td>播放</td><td>&#xe731</td></tr>
    <tr><td><i class="c-icon">&#xe607</i></td><td>暂停</td><td>&#xe607</td></tr>
    <tr><td><i class="c-icon">&#xe732</i></td><td>音乐播放</td><td>&#xe732</td></tr>
    <tr><td><i class="c-icon">&#xe76f</i></td><td>音乐播放线形</td><td>&#xe76f</td></tr>
    <tr><td><i class="c-icon">&#xe735</i></td><td>视频播放</td><td>&#xe735</td></tr>
    <tr><td><i class="c-icon">&#xe654</i></td><td>视频播放(细)</td><td>&#xe654</td></tr>
    <tr><td><i class="c-icon">&#xe73b</i></td><td>音乐暂停</td><td>&#xe73b</td></tr>
    <tr><td><i class="c-icon">&#xe739</i></td><td>音乐下载</td><td>&#xe739</td></tr>
    <tr><td><i class="c-icon">&#xe73a</i></td><td>下载</td><td>&#xe73a</td></tr>

    <tr><td><i class="c-icon">&#xe600</i></td><td>到这去</td><td>&#xe600</td></tr>
    <tr><td><i class="c-icon">&#xe605</i></td><td>向右箭头</td><td>&#xe605</td></tr>
    <tr><td><i class="c-icon">&#xe734</i></td><td>向右</td><td>&#xe734</td></tr>
    <tr><td><i class="c-icon">&#xe736</i></td><td>向上</td><td>&#xe736</td></tr>
    <tr><td><i class="c-icon">&#xe73c</i></td><td>向下</td><td>&#xe73c</td></tr>
    <tr><td><i class="c-icon">&#xe783</i></td><td>向左</td><td>&#xe783</td></tr>
    <tr><td><i class="c-icon">&#xe619</i></td><td>向下圈</td><td>&#xe619</td></tr>
    <tr><td><i class="c-icon">&#xe782</i></td><td>双左剪头</td><td>&#xe782</td></tr>
    <tr><td><i class="c-icon">&#xe609</i></td><td>回第一页</td><td>&#xe609</td></tr>
    <tr><td><i class="c-icon">&#xe763</i></td><td>上升</td><td>&#xe763</td></tr>
    <tr><td><i class="c-icon">&#xe76a</i></td><td>下降</td><td>&#xe76a</td></tr>
    <tr><td><i class="c-icon">&#xe762</i></td><td>持平</td><td>&#xe762</td></tr>
    <tr><td><i class="c-icon">&#xe613</i></td><td>加(细)</td><td>&#xe613</td></tr>
    <tr><td><i class="c-icon">&#xe611</i></td><td>乘(细)</td><td>&#xe611</td></tr>
    <tr><td><i class="c-icon">&#xe604</i></td><td>star</td><td>&#xe604</td></tr>
    <tr><td><i class="c-icon">&#xe60c</i></td><td>微博star</td><td>&#xe60c</td></tr>

    <tr><td><i class="c-icon">&#xe61e</i></td><td>提示</td><td>&#xe61e</td></tr>
    <tr><td><i class="c-icon">&#xe638</i></td><td>提示(细)</td><td>&#xe638</td></tr>
    <tr><td><i class="c-icon">&#xe602</i></td><td>全屏</td><td>&#xe602</td></tr>
    <tr><td><i class="c-icon">&#xe62c</i></td><td>打开</td><td>&#xe62c</td></tr>
    <tr><td><i class="c-icon">&#xe618</i></td><td>设置</td><td>&#xe618</td></tr>
    <tr><td><i class="c-icon">&#xe61b</i></td><td>用户</td><td>&#xe61b</td></tr>
    <tr><td><i class="c-icon">&#xe639</i></td><td>用户(细)</td><td>&#xe639</td></tr>
    <tr><td><i class="c-icon">&#xe61c</i></td><td>赞</td><td>&#xe61c</td></tr>
    <tr><td><i class="c-icon">&#xe636</i></td><td>粉丝关注</td><td>&#xe636</td></tr>
    <tr><td><i class="c-icon">&#xe788</i></td><td>刷新</td><td>&#xe788</td></tr>
    <tr><td><i class="c-icon">&#xe61d</i></td><td>换</td><td>&#xe61d</td></tr>
    <tr><td><i class="c-icon">&#xe617</i></td><td>垃圾箱</td><td>&#xe617</td></tr>
    <tr><td><i class="c-icon">&#xe614</i></td><td>mail</td><td>&#xe614</td></tr>
    <tr><td><i class="c-icon">&#xe62a</i></td><td>信息</td><td>&#xe62a</td></tr>
    <tr><td><i class="c-icon">&#xe601</i></td><td>关闭</td><td>&#xe601</td></tr>
    <tr><td><i class="c-icon">&#xe612</i></td><td>关闭线型(细)</td><td>&#xe612</td></tr>
    <tr><td><i class="c-icon">&#xe61a</i></td><td>关闭线型</td><td>&#xe61a</td></tr>
    <tr><td><i class="c-icon">&#xe772</i></td><td>转换</td><td>&#xe772</td></tr>
    <tr><td><i class="c-icon">&#xe77e</i></td><td>回顶部</td><td>&#xe77e</td></tr>
    <tr><td><i class="c-icon">&#xe608</i></td><td>勾</td><td>&#xe608</td></tr>
    <tr><td><i class="c-icon">&#xe786</i></td><td>输入</td><td>&#xe786</td></tr>
    <tr><td><i class="c-icon">&#xe63b</i></td><td>浏览</td><td>&#xe63b</td></tr>
    <tr><td><i class="c-icon">&#xe751</i></td><td>提交</td><td>&#xe751</td></tr>
    <tr><td><i class="c-icon">&#xe60a</i></td><td>添加</td><td>&#xe60a</td></tr>
    <tr><td><i class="c-icon">&#xe603</i></td><td>公交</td><td>&#xe603</td></tr>
    <tr><td><i class="c-icon">&#xe733</i></td><td>电话</td><td>&#xe733</td></tr>
    <tr><td><i class="c-icon">&#xe784</i></td><td>超级电话</td><td>&#xe784</td></tr>
    <tr><td><i class="c-icon">&#xe606</i></td><td>iphone</td><td>&#xe606</td></tr>
    <tr><td><i class="c-icon">&#xe737</i></td><td>搜索</td><td>&#xe737</td></tr>
    <tr><td><i class="c-icon">&#xe61f</i></td><td>时钟</td><td>&#xe61f</td></tr>
    <tr><td><i class="c-icon">&#xe60b</i></td><td>网页链接</td><td>&#xe60b</td></tr>
    <tr><td><i class="c-icon">&#xe738</i></td><td>位置</td><td>&#xe738</td></tr>
    <tr><td><i class="c-icon">&#xe637</i></td><td>行程</td><td>&#xe637</td></tr>
    <tr><td><i class="c-icon">&#xe787</i></td><td>定位</td><td>&#xe787</td></tr>
    <tr><td><i class="c-icon">&#xe622</i></td><td>直播</td><td>&#xe622</td></tr>
    <tr><td><i class="c-icon">&#xe752</i></td><td>图片</td><td>&#xe752</td></tr>
    <tr><td><i class="c-icon">&#xe60d</i></td><td>拍照</td><td>&#xe60d</td></tr>
    <tr><td><i class="c-icon">&#xe60e</i></td><td>语音</td><td>&#xe60e</td></tr>
    <tr><td><i class="c-icon">&#xe610</i></td><td>直达号</td><td>&#xe610</td></tr>
    <tr><td><i class="c-icon">&#xe60f</i></td><td>历史记录</td><td>&#xe60f</td></tr>
    <tr><td><i class="c-icon">&#xe753</i></td><td>V标</td><td>&#xe753</td></tr>
    <tr><td><i class="c-icon">&#xe76b</i></td><td>挂号</td><td>&#xe76b</td></tr>
    <tr><td><i class="c-icon">&#xe621</i></td><td>附近</td><td>&#xe621</td></tr>
    <tr><td><i class="c-icon">&#xe620</i></td><td>咨询</td><td>&#xe620</td></tr>
    <tr><td><i class="c-icon">&#xe623</i></td><td>购物车</td><td>&#xe623</td></tr>
    <tr><td><i class="c-icon">&#xe615</i></td><td>表情1</td><td>&#xe615</td></tr>
    <tr><td><i class="c-icon">&#xe616</i></td><td>表情2</td><td>&#xe616</td></tr>
    <tr><td><i class="c-icon">&#xe628</i></td><td>住宿</td><td>&#xe628</td></tr>
    <tr><td><i class="c-icon">&#xe627</i></td><td>饮食</td><td>&#xe627</td></tr>
    <tr><td><i class="c-icon">&#xe626</i></td><td>景点</td><td>&#xe626</td></tr>
    <tr><td><i class="c-icon">&#xe625</i></td><td>价格</td><td>&#xe625</td></tr>
    <tr><td><i class="c-icon">&#xe624</i></td><td>攻略</td><td>&#xe624</td></tr>
    <tr><td><i class="c-icon">&#xe62d</i></td><td>点评</td><td>&#xe62d</td></tr>
    <tr><td><i class="c-icon">&#xe62b</i></td><td>正片</td><td>&#xe62b</td></tr>
    <tr><td><i class="c-icon">&#xe629</i></td><td>花絮</td><td>&#xe629</td></tr>
    <tr><td><i class="c-icon">&#xe634</i></td><td>日历</td><td>&#xe634</td></tr>

    <tr><td><i class="c-icon">&#xe632</i></td><td>播放(细)</td><td>&#xe632</td></tr>
    <tr><td><i class="c-icon">&#xe631</i></td><td>暂停(细)</td><td>&#xe631</td></tr>
    <tr><td><i class="c-icon">&#xe630</i></td><td>音符(细)</td><td>&#xe630</td></tr>
    <tr><td><i class="c-icon">&#xe62e</i></td><td>上一首(细)</td><td>&#xe62e</td></tr>
    <tr><td><i class="c-icon">&#xe62f</i></td><td>下一首(细)</td><td>&#xe62f</td></tr>

    <tr><td><i class="c-icon">&#xe633</i></td><td>相关推荐</td><td>&#xe633</td></tr>
    <tr><td><i class="c-icon">&#xe635</i></td><td>预订(细)</td><td>&#xe635</td></tr>
    <tr><td><i class="c-icon">&#xe63a</i></td><td>优惠券</td><td>&#xe63a</td></tr>
    <tr><td><i class="c-icon">&#xe63d</i></td><td>扫码</td><td>&#xe63d</td></tr>
    <tr><td><i class="c-icon">&#xe63c</i></td><td>更多</td><td>&#xe63c</td></tr>

    <tr><td><i class="c-icon">&#xe642</i></td><td>adobe</td><td>&#xe642</td></tr>
    <tr><td><i class="c-icon">&#xe641</i></td><td>word</td><td>&#xe641</td></tr>
    <tr><td><i class="c-icon">&#xe640</i></td><td>txt</td><td>&#xe640</td></tr>
    <tr><td><i class="c-icon">&#xe63e</i></td><td>excel</td><td>&#xe63e</td></tr>
    <tr><td><i class="c-icon">&#xe63f</i></td><td>ppt</td><td>&#xe63f</td></tr>

     <tr><td><i class="c-icon">&#xe643</i></td><td>more</td><td>&#xe643</td></tr>
    <tr><td><i class="c-icon">&#xe644</i></td><td>订座</td><td>&#xe644</td></tr>
    <tr><td><i class="c-icon">&#xe645</i></td><td>排号</td><td>&#xe645</td></tr>
    <tr><td><i class="c-icon">&#xe646</i></td><td>外卖</td><td>&#xe646</td></tr>
    <tr><td><i class="c-icon">&#xe647</i></td><td>加号</td><td>&#xe647</td></tr>

    <tr><td><i class="c-icon">&#xe648</i></td><td>订阅</td><td>&#xe648</td></tr>
    <tr><td><i class="c-icon">&#xe649</i></td><td>踩_点击</td><td>&#xe649</td></tr>
    <tr><td><i class="c-icon">&#xe64a</i></td><td>刷卡</td><td>&#xe64a</td></tr>
    <tr><td><i class="c-icon">&#xe64b</i></td><td>停车</td><td>&#xe64b</td></tr>
    <tr><td><i class="c-icon">&#xe64c</i></td><td>wifi</td><td>&#xe64c</td></tr>
    <tr><td><i class="c-icon">&#xe64d</i></td><td>导航</td><td>&#xe64d</td></tr>
    <tr><td><i class="c-icon">&#xe64f</i></td><td>地铁</td><td>&#xe64f</td></tr>
    <tr><td><i class="c-icon">&#xe64e</i></td><td>出租车</td><td>&#xe64e</td></tr>
    <tr><td><i class="c-icon">&#xe651</i></td><td>分享</td><td>&#xe651</td></tr>
    <tr><td><i class="c-icon">&#xe652</i></td><td>分享-2</td><td>&#xe652</td></tr>
    <tr><td><i class="c-icon">&#xe650</i></td><td>保存</td><td>&#xe650</td></tr>
    <tr><td><i class="c-icon">&#xe653</i></td><td>簇更多</td><td>&#xe653</td></tr>
    <tr><td><i class="c-icon">&#xe656</i></td><td>收藏</td><td>&#xe656</td></tr>
    <tr><td><i class="c-icon">&#xe655</i></td><td>已收藏</td><td>&#xe655</td></tr>
    <tr><td><i class="c-icon">&#xe657</i></td><td>排序</td><td>&#xe657</td></tr>
    <tr><td><i class="c-icon">&#xe659</i></td><td>ring</td><td>&#xe659</td></tr>
    <tr><td><i class="c-icon">&#xe658</i></td><td>camera</td><td>&#xe658</td></tr>
    <tr><td><i class="c-icon">&#xe65a</i></td><td>积分</td><td>&#xe65a</td></tr>
</table>
```