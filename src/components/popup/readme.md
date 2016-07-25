# popup上滑弹框
> by dongshihao


## 使用方式

js组件，require方式引入。

``` javascript
require(['pmd/popup/popup'], function (Popup) {
	new Popup({
        title: '弹框的头部title',
        content: '弹框的内容content',    //html代码或者Zepto对象
        fullView: false,				//弹框是否全屏，缺省为false
        customClassName: 'wa-popup-custom-modal', //自定义类名
        onOpen: function(){
        	console.log('//TODO...');    //弹框完成展现的回调
        },
        onClose: function(){
        	console.log('//TODO...');		//弹框消失的回调
        }
	});
});
```
## 参数说明

**title (可选)**：html或Zepto对象，弹框标题；

**content (必须)**：html或Zepto对象，弹框内容；

**fullView (可选)**：boolean，是否全屏，缺省为false。若内容高度>=屏幕高度自动全屏；

**customClassName (可选)**：String 自定义CSS类名；

**onOpen(可选)**：弹框完成后的回调；

**onClose(可选)**：弹框消失后的回调；

## 代码示例

``` javascript
<script type="text/javascript">
    require(['pmd/popup/popup'], function(Popup){
		    $('.wa-popup-half').on('click', function (e) {
		    	var html = '<div>没有任何意义，只是为了撑开popup的高度</div>' +
    				'<div>没有任何意义，只是为了撑开popup的高度</div>' +
    				'<div>没有任何意义，只是为了撑开popup的高度</div>' +
    				'<div>没有任何意义，只是为了撑开popup的高度</div>' +
    				'<div>没有任何意义，只是为了撑开popup的高度</div>' +
    				'<div>没有任何意义，只是为了撑开popup的高度</div>' +
    				'<div>没有任何意义，只是为了撑开popup的高度</div>' +
    				'<div>没有任何意义，只是为了撑开popup的高度</div>';
		        new Popup({
		    		title: 'title长了也没关系，会自动省略',
	                content: html,
	                fullView: false,
	                customClassName: 'wa-popup-custom-modal',
	                onOpen: function(){
	                	console.log('open');
	                },
	                onClose: function(){
	                	console.log('close');
	                }
		        });
		    });
		});
</script>
```

---

## 筛选层

> xieyaowu

基于`popup`扩展了上滑筛选层，有单选、多选。

### 使用方式

```js
require([
    'pmd/popup/filter'
], function (Filter) {
    var options = {};
    new Filter(options);
});
```

### 配置参数

```js
/**
 /**
 * @param {Object}              options 配置对象
 * @param {boolean}             [options.multiple=false] 是否多选
 * @param {Array}               options.data 数据列表，页面最多显示4条，超出则列表区域为上下滑动
 * @param {string}              options.data[].text 菜单中显示文本
 * @param {string|number}       options.data[].value 菜单选中的值
 * @param {boolean|undefined}   options.data[].selected 是否选中
 * @param {string}              [options.title=请选择] 浮层显示标题
 * @param {Function}            options.onSelect 选择完成后回调， 参数data={old: 上次的索引, oldValue: 上次的值, index: 新索引, value: 新值, event: 
 * @param {Function}            options.onCancel 点击遮罩关闭时回调，主要用来触发tc交互日志
 * @param {Function}            options.onClickAll 点击全选时回调，主要用来触发tc交互日志
 * @param {Function}            options.onClickDone 点击完成时回调，主要用来触发tc交互日志
 * @param {Function}            options.onClickItem 点击列表每个项时回调，主要用来触发tc交互日志
 */
 */
```

#### options.onSelect

```js
onSelect: function (data) {
    // data.event => 事件类型（有change、none选项）
    // data.index => 选中的索引，如果为多选则为数组
    // data.old => 上次选中的索引，如果为多选则为数组
    // data.value => 选中的值，取自options.data[].value，如果为多选则为数组
    // data.oldValue => 上次选中的值，取自options.data[].value，如果为多选则为数组
}
```

#### 日志勾子

由于在阿拉丁里需要发送tc交互日志，组件提供日志数据对象和事件触发回调，使用者只需要在实例化时把日志数据对象调用下阿拉丁的`sendLog`方法即可，分别是：

```
options.onClickAll  -  点击全选按钮回调，参数为：{type: popup, action: 1}
options.onClickDone -  点击完成按钮回调，参数为：{type: popup, action: 2}
options.onClickItem -  点击单个菜单回调，参数为：{type: popup, action: 3}
options.onCancel    -  点击遮罩关闭回调，参数为：{type: popup, action: 4}
```

### 代码示例

```js
// 在阿拉丁里使用
A.init(function () {
    var self = this;

    require([
        'pmd/popup/filter'
    ], function (Filter) {

        // 单选
        new Filter({
            title: '选择排序',
            data: [
                {
                    text: '按时间升序',
                    value: 1,
                    selected: true
                },
                {
                    text: '按时间降序',
                    value: 2
                }
            ],
            onSelect: function (data) {
                if (data.event === 'none') {
                    alert('没有修改！');
                }
                else {
                    alert('索引从【' + data.old + '】修改为【' + data.index + '】，value从【' + data.oldValue + '】修改为【' + data.value + '】');
                }
            },
            onCancel: function (data) {
                // 触发下日志
                self.sendLog(data);
            },
            onClickAll: function (data) {
                // 触发下日志
                self.sendLog(data);
            },
            onClickDone: function (data) {
                // 触发下日志
                self.sendLog(data);
            },
            onClickItem: function (data) {
                // 触发下日志
                self.sendLog(data);
            }
        });


        // 多选
        new Filter({
            multiple: true,
            title: '选择车型',
            data: [
                {
                    text: '动车',
                    value: 'D',
                    selected: true
                },
                {
                    text: '高铁',
                    value: 'G'
                },
                {
                    text: '特快',
                    value: 'T'
                },
                {
                    text: '空调普快',
                    value: 'K'
                },
                {
                    text: '其他',
                    value: '0'
                },
                {
                    text: '地铁',
                    value: 'S'
                }
            ],
            onSelect: function (data) {
                if (data.event === 'none') {
                    alert('没有修改！');
                }
                else {
                    alert('索引从【' + data.old.join(',') + '】修改为【' + data.index.join(',') + '】，value从【' + data.oldValue.join(',') + '】修改为【' + data.value.join(',') + '】');
                }
            },
            onCancel: function (data) {
                // 触发下日志
                self.sendLog(data);
            },
            onClickAll: function (data) {
                // 触发下日志
                self.sendLog(data);
            },
            onClickDone: function (data) {
                // 触发下日志
                self.sendLog(data);
            },
            onClickItem: function (data) {
                // 触发下日志
                self.sendLog(data);
            }
        });
    });
});
```