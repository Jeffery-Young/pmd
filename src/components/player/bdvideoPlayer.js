/**
 * h5 video播放器 仅适用于结果页
 *
 * @file bdvideoPlayer.js
 * @author zhaolei09@baidu.com
 */
define(function() {
    var videoPlayer = require('./videoPlayer');
    // var WbLog = require('log/webb-ia');
    var WbLog = B.webb && B.webb.ia ? B.webb.ia : {send: new Function};
    // extend of videoPlayer
    var F = function(){};
    F.prototype = videoPlayer.prototype;

    function BDVideoPlayer(opt) {
        var opt = opt || {};
        this.__super = F.prototype;
        this.params = opt || {};
        this.init(opt);

        // send webb log 
        //this.wbLog = new WbLog();
        this.wbLog = WbLog;
        this.videoLogData = {
            type: 'wp_vd',
            action: 'start',
            ext: {
               pgrs: 0
            }
        };
        this.playstart = true;
        if (!opt.closeSendLog) {
            this.sendLog(opt);
        }
    }
    BDVideoPlayer.prototype = new F();
    BDVideoPlayer.prototype.constructor = BDVideoPlayer;

    BDVideoPlayer.prototype.play = function (opt) {
        var me = this;
        if (!opt.src) {
            return;
        }

        me.__super.play.call(this, opt);

        // send start log
        me.playstart = true;
    };

    BDVideoPlayer.prototype.sendLog = function () {
        var me = this;
        me.on('play', function() {
            // send start log
            if (me.playstart) {
                me.playstart = false;
                var data = $.extend({}, me.videoLogData, {
                    action: 'start',
                    ext: {
                        pgrs: 0
                    }
                });
                me.wbLog.send(data);
                // do it for UC browser, start play currentTime = duration 's bug
                setTimeout(function () {
                    // when continue play, bind events
                    me.setTimeEvents();
                }, 500);
            } else {
                var data = $.extend({}, me.videoLogData, {
                    action: 'cont',
                    ext: {
                        pgrs: me.computePlayPgrs()
                    }
                });
                me.wbLog.send(data);
            }
        });
        me.on('onehalf', function() {
            var data = $.extend({}, me.videoLogData, {
                action: 'pgrs',
                ext: {
                    pgrs: 0.5
                }
            });
            me.wbLog.send(data);
        });
        me.on('pause', function() {
            if (!me.video.ended) {
                var pgrs = me.computePlayPgrs();
                // do it for baidu browser
                if (parseInt(pgrs, 10) >= 1) {
                    return;
                }
                var data = $.extend({}, me.videoLogData, {
                    action: 'pause',
                    ext: {
                        pgrs: pgrs
                    }
                });
                me.wbLog.send(data);
            }
        });
        me.on('playend', function() {
            me.playstart = true;
            var data = $.extend({}, me.videoLogData, {
                action: 'end',
                ext: {
                    pgrs: 1
                }
            });
            me.wbLog.send(data);
        });
    };
    BDVideoPlayer.prototype.computePlayPgrs = function () {
        var me = this;
        var currentTime = Math.ceil(me.video.currentTime) || 0;
        var duration = me.getVideoTime() || 0;
        return (currentTime / duration).toFixed(1);
    };

    return BDVideoPlayer;
});