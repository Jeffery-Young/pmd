# 无限滚动
> by yangfan


## 使用方式

js组件，require方式引入。

``` javascript
require(['pmd/infinitescroll/infiniteScroll'], function (InfiniteScroll) {
     var myInfiniteScroll = new InfiniteScroll({

     });
});
```

### 参数说明

**$result 必选**：结果父容器dom,结果内容均插入该dom下；

**待补充



## 代码示例

``` html
<div class="wa-infinitescroll">
	<div class="wa-infinitescroll-nav">导航<span class="pause">[暂停]</span><span class="start">[恢复]</span></div>
    <div class="wa-infinitescroll-scroll">
        <div class="wa-infinitescroll-result"><!-- 结果内容 --></div>
        <div class="wa-infinitescroll-loading"><!-- loading内容 --></div>
    </div>
</div>
```

``` javascript
<script type="text/javascript">
    require(['pmd/infinitescroll/infiniteScroll'], function (InfiniteScroll) {
        var myInfiniteScroll = new InfiniteScroll({
            // *必须:结果父容器dom,结果内容均插入该dom下
            $result: $('.wa-infinitescroll-result'),
            // 非必须:视窗,默认为window
            $wrapper: $(window),
            // 非必须:滚动容器,默认为body
            $scroller: $('body'),
            // *必须:loading提示区dom
            $loading: $('.wa-infinitescroll-loading'),
            // 非必须:默认加载状态html,默认为"加载中"
            loadingHtml: '<center>***加载中***</center>',
            // 非必须:加载失败html,默认为"加载失败,点击重试"
            loadFailHtml: '<center>***加载失败,点击重新加载***</center>',
            // 非必须:加载完毕html,默认为"加载完毕"
            loadOverHtml: '<center>***没有更多数据了***</center>',

            // 非必须:滚动元素每一页的className,默认为"c-infinitescroll-page"
            scrollPageClass: 'wa-news-infinite-page',
            // 非必须:提前x像素触发滚动到底部,默认10
            bufferHeightPx: 10,
            // 非必须:每页包含几条结果,默认10
            pageResultNum: 6,
            // 非必须:滚动时动态保留的页数,默认2
            // wise性能较差,无法同时渲染较多dom,滚动到可视区外的内容需要咔嚓掉
            // 当该值为0时,不做清理操作
            limitShowPn: 2,
            // 非必须:提前请求页数,默认1
            // 当未加载的数据不足x页时,提前执行回调加载数据
            preLoadPn: 1,

            // 非必须:供初始化显示的第1大波列表结果html,数组结构,每一项代表每条结果的html
            // 为了保证首屏效果,一般情况下请尽量同步提供该数据,若需异步请求数据请success之后再调用组件
            // 若该数据不存在,会直接采用pushResult方法加载第一页数据
            firstResult: createTestData(0, 12),
            // *必须:推送新结果回调方法
            // rn:需要加载的新数据序号(从0开始); status:缓存中还未加载的页数
            // 若为异步加载数据,需使用deferred对象
            // 返回结果html数组结构,每一个数组项均表示一条结果的html,若无更多数据,请返回'NULL',之后无限下拉终止
            pushResult: function(rn, status) {
                // 异步获取数据示例
                var defer = $.Deferred();
                // 模拟1s耗时
                setTimeout(function(){
                    if (rn > 999) {
                        defer.resolve('NULL');
                    } else {
                    	// 模拟请求成功or失败
                        if (Math.round(Math.random())) {
                            defer.resolve(createTestData(rn, Math.min(rn+6, 999)));
                        } else {
                            defer.reject();
                        };
                    };
                }, 1000);
                return defer.promise();
            },
            /****************************************
            pushResult: function(rn, status) {
                // 同步获取数据示例
                if (rn > 999) {
                    return 'NULL';
                } else {
                    return createTestData(rn, Math.min(rn+50, 999));
                };
            },
            ****************************************/

            // 非必须:滚动到顶部时执行的回调方法
            onScrollTop: function() {
                console.log('onScrollTop:滚到顶了');
            },
            // 非必须:滚动到底部时执行的回调方法
            onScrollBottom: function() {
                console.log('onScrollBottom:滚到底了');
            },
            // 非必须:可视区页码变换时执行的回调方法;np-现在的页码,lp-之前的页码
            onChangeShowPN: function(np, lp) {
                console.log('onChangeShowPN:页码从'+lp+'变到'+np);
            },
            // 非必须:每次加载新一页内容后执行的回调方法
            onLoadNewPage: function(pn) {
                console.log('onLoadNewPage:成功加载第'+pn+'页内容');
            }
        });

        $('.pause').on('click', function() {
            myInfiniteScroll.pause();
            // 业务代码写在pause之后
            $('.wa-infinitescroll-scroll').hide();
        });

        $('.start').on('click', function() {
            $('.wa-infinitescroll-scroll').show();
            // 业务代码写在start之前
            myInfiniteScroll.start();
        })

        // fake数据
        function createTestData(start, end) {
            var htmlArr = [];
            for (var i = start; i < end; i++) {
                htmlArr.push('<li><img src="1x1.jpg" width="70px" height="70px"/>序号:' + i + '</li>');
            };
            return htmlArr;
        }
    });
</script>
```