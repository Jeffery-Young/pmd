# 对话框
> by yangfan


## 使用方式

js组件，require方式引入。

``` javascript
// alert对话框
require(['pmd/dialog/alert'], function (DialogAlert) {
    DialogAlert({
        title: 'Hello Alert',
        onAccept: function(){
            console.log('Alert Accept');
        }
    });
});

// confirm对话框
require(['pmd/dialog/confirm'], function (DialogConfirm) {
    DialogConfirm({
        title: 'Hello Confirm',
        onAccept: function() {
            console.log('Confirm Accept');
        },
        onCancel: function() {
            console.log('Confirm Cancel');
        }
    });
});

// 自定义dialog
require(['pmd/dialog/dialog'], function (Dialog) {
    new Dialog({
        title: 'Hello Dialog',
        text: '<p>这是一个自定义对话框</p>',
        buttons: [
            {
                text: '自定义按钮',       // 按钮文字
                close: true,              // 点击后是否关闭对话框,默认true
                onClick: function() {
                    console.log('do sth...');
                }
            },
            {
                text: '自定义按钮',
                onClick: function() {
                    console.log('do sth...');
                }
            }
        ]
    });
});
```

其中alert、confirm均基于dialog实现，提供较为便捷的接口调用。复杂需求可使用自定义dialog满足。


## 参数说明

#### alert对话框

**title (与text两者之间必须存在一个)**：对话框标题；

**text (与title两者之间必须存在一个)**：对话框提示内容，支持html；

**acceptText (可选)**：确定按钮文字，默认为“确定”；

**onAccept (可选)**：function，确定按钮点击后执行的方法；


#### confirm对话框

**title (与text两者之间必须存在一个)**：对话框标题；

**text (与title两者之间必须存在一个)**：对话框提示内容，支持html；

**acceptText (可选)**：确定按钮文字，默认为“确定”；

**onAccept (可选)**：function，确定按钮点击后执行的方法；

**cancelText (可选)**：取消按钮文字，默认为“取消”；

**onCancel (可选)**：function，取消按钮点击后执行的方法；


#### 自定义dialog

**customClassName (可选)**：string，自定义css类名；

**title (与text两者之间必须存在一个)**：对话框标题；

**text (与title两者之间必须存在一个)**：对话框提示内容，支持html；

**verticalButtons (可选)**：boolean，按钮排列方式，默认为false即水平排列；

**buttons (必须)**：数组结构，有几项即代表有几个按钮；

**buttons[].text (必须)**：按钮显示文字；

**buttons[].close (可选)**：boolean，按钮点击后是否关闭对话框，默认为true；

**buttons[].onClick (可选)**：function，按钮点击后执行的用户自定义方法；



## 代码示例

### Alert对话框

``` javascript
<script type="text/javascript">
    require(['pmd/dialog/alert'], function (DialogAlert) {
        $('.wa-dialog-alert').on('click', function() {
            DialogAlert({
                title: 'Hello Alert',
                text: '这是一个自定义alert对话框，你需要这个组件么？',
                acceptText: '需要(只能需要)',
                onAccept: function(){
                    console.log('Alert 需要');
                }
            });
        });
    });
</script>
```

### Confirm对话框

``` javascript
<script type="text/javascript">
    require(['pmd/dialog/confirm'], function (DialogConfirm) {
        $('.wa-dialog-confirm').on('click', function() {
            DialogConfirm({
                title: 'Hello Confirm',
                text: '这是一个自定义confirm对话框，你觉得这个组件有用么？',
                acceptText: '有用',
                onAccept: function() {
                    console.log('I am so happy');
                },
                cancelText: '没用',
                onCancel: function() {
                    console.log('... so sad ...');
                }
            });
        });
    });
</script>
```

### 自定义dialog

``` javascript
<script type="text/javascript">
    require(['pmd/dialog/dialog'], function (Dialog) {
        $('.wa-dialog-custom').on('click', function() {
            new Dialog({
                customClassName: 'wa-dialog-custom-layout',
                title: 'Hello Dialog',
                text: '<p>这是一个自定义对话框</p><p>您可以任意定制对话框的标题(title)、说明文字(text)以及多个水平排列的按钮</p><p>每一个按钮的位子(text)以及点击之后需要执行的自定义事件也均可以自定义</p>',
                buttons: [
                    {
                        text: '确定',       // 按钮文字
                        close: true,        // 点击后是否关闭,默认true
                        onClick: function() {
                            require(['pmd/dialog/alert'], function (DialogAlert) {
                                DialogAlert({
                                    title: 'Hello Alert',
                                    acceptText: '确认(OK)',
                                    onAccept: function(){
                                        console.log('Alert 确认');
                                    }
                                });
                            });
                        }
                    },
                    {
                        text: '取消',
                        onClick: function() {
                            console.log('取消');
                        }
                    },
                    {
                        text: '我要表态',
                        onClick: function() {
                            console.log('说点什么呢');
                        }
                    }
                ]
            });
        });
    });
</script>
```