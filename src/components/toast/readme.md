# toast提示框
> by dongshihao


## 使用方式

js组件，require方式引入。

``` javascript

require(['pmd/toast/toast'], function (Toast) {
	var toast = new Toast({
        msg: '加载成功!',              			// 展示文案，支持html和Zepto对象
        duration: 2000,          				// toast展现的时长，缺省值为2000；只有autoClose为true时生效。
        customClassName: 'c-toast-custom',		// 自定义样式名
        autoClose: false,						// 是否自动关闭，缺省值为true
        onOpen: function () {					// toast展现回调
            console.log('toast打开');  			
        },
        onClose: function () {					// toast消失回调
            console.log('toast关闭');
        }
    });
    toast.close();                       //当autoClose参数设置为false时，可以手动关闭toast。
});


```
## 参数说明

**msg (必须)**：String/html/Zepto对象，toast显示的文案；

**duration (可选)**：num toast显示的时长；当且仅当autoClose为true时生效；

**customClassName (可选)**：String 自定义CSS类名；

**autoClose (可选)**：boolean 是否自动关闭，缺省值为true；

**onOpen(可选)**：function toast展现后的回调；

**onClose(可选)**：function toast消失后的回调；

## 方法说明

Toast对象提供两个公有方法`open`和`close`

**open**：打开`toast`；在`Toast`对象被`new`时会自动调用，一般无须手动调用。

**close**：关闭`toast`；在`autoClose: true`时，会延迟后自动关闭，一般无须手动调用；在`autoClose: false`时,可手动关闭`toast`。

## 代码示例

### 一个简单的toast实例
``` javascript
<script type="text/javascript">
	require(['pmd/toast/toast'], function (Toast) {
	    $('.wa-toast-single').on('click', function() {
	        new Toast({msg: '加载成功!'});
	    });
	});
</script>
```

### 异步加载指示器
``` javascript
<script type="text/javascript">
	$('.wa-toast-async').on('click', function (e) {
        require(['pmd/toast/toast'], function (Toast) {
            var toast_a =  new Toast({
                msg: $('<div>正在加载中...</div>'), // 展示文案，支持html和Zepto对象
                autoClose: false,
                onOpen: function () {
                    console.log('toast打开');
                },
                onClose: function () {
                    console.log('toast关闭');
                }
            });
            $.ajax({
                type: 'GET',
                url: '/',
                data: { name: 'XXX' },
                dataType: 'json',
                success: function(data){
                    toast_a.close();      //手动关闭toast
                },
                error: function(xhr, type){
                    toast_a.close();        //手动关闭toast
                    new Toast({msg: '请求出错'});
                }
            });
        });
    });
</script>
```

### 手动开启/关闭toast实例
``` javascript
<script type="text/javascript">
    require(['pmd/toast/toast'], function (Toast) {  
        var toast;
        $('.wa-toast-open').on('click', function() {
            toast = new Toast({
                msg: $('<div>开始上传...</div>'),      
                autoClose: false
            });
        });
        $('.wa-toast-close').on('click', function() {
            toast.close();
        });
    });
</script>
```