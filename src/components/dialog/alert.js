define(function () {

    var DialogAlert = function(opt) {
        if (!opt || (!opt.title && !opt.text)) {
            return;
        };
        var me = this;
        // 设置默认值
        me.options = $.extend({
            title: '',              // 标题
            text: '',               // 文本,支持html
            acceptText: '确定',     // 确定按钮文字
            onAccept: function(){}  // 确定按钮点击回调方法
        }, opt);

        // 调用dialog组件实现alert
        var Dialog = require('./dialog');
        new Dialog({
            title: me.options.title,
            text: me.options.text,
            buttons: [
                {
                    text: me.options.acceptText,
                    onClick: me.options.onAccept
                }
            ]
        });
    };

    return DialogAlert;
});