/**
 * h5 video播放器
 *
 * @file bdPlayer.js
 * @author songgenlei@baidu.com
 */
define(function() {

    // 加载videoplayer公共css
    $('<style data-for="pmd/player/videoPlayer"></style>').text(__inline('./videoPlayer.css')).appendTo('head');


    /**
     * 构造函数
     *
     * @param {Object}              opt 配置对象
     * @param {Object}              opt.ios   可选 单独配置ios下某个表现形式
     * @param {boolean}             opt.ios.playMode  可选 播放模式
     *** 播放模式字段值说明：
     *** hide 容器中对video的显示进行隐藏 （ios默认为全屏播放，针对ui设定 当前播放区域不显示video）
     *** false || undefined 不使用插件带有的播放容器样式
     * @param {Object}              opt.android   可选  单独配置android下某个表现形式
     * @param {boolean}             opt.android.playMode  可选 播放模式
     *** 播放模式字段值说明：
     *** fullsreen 全屏 (android模拟全屏播放)
     *** false || undefined 不使用插件带有的播放容器样式
     */
    function VideoPlayer(opt) {
        var opt = this.options = $.extend(true, {
            height: null,
            ios: {
                playMode: false
            },
            android: {
                playMode: false
            }
        }, opt);
        this.init(opt);
    }

    VideoPlayer.prototype = {
        constructor: VideoPlayer,
        init: function(opt) {
            var self = this;
            var ua = navigator.userAgent;
            self.video = '<video class="c-videoplayer" src="" type="video/mp4"'
                        + ' autoplay="autoplay" controls="" poster="" preload="none"></video>';
            self.$video = $(self.video);
            self.video = self.$video[0];
            // 播放器是否在工作，pause也算工作状态
            self.isWorking = false;
            
            if (opt.height) {
                self.video.height = opt.height;
            }

            self.bindEvents();
        },
        bindEvents: function() {
            var self = this;
            self.$video.on('loadeddata', function() {
                self.video.play();
            });
            self.$video.on('timeupdate', function() {
                for (var s in self.timeEvents) {
                    if (self.timeEvents.hasOwnProperty(s)) {
                        var th = self.timeEvents[s];
                        var currentTime = Math.ceil(self.video.currentTime);
                        var duration = self.getVideoTime();
                        if (th && duration && (currentTime / duration >= th)) {
                            self.trigger(s);
                            self.timeEvents[s] = 0;
                        }
                    }
                }
            });
        },
        // 关键播放时间点设置
        setTimeEvents: function() {
            this.timeEvents = {
                onefifth: 0.2,
                fourfifths: 0.8,
                onehalf: 0.5,
                playend: 1
            };
        },

        play: function(opt) {
            var self = this;

            // 插入视频节点
            self.appendVideo(opt);

            self.setTimeEvents();

            // 控制播放器播放
            self.playSingle();

            self.isWorking = true;
        },

        // 控制播放器播放
        playSingle: function () {
            var self = this;
            var uaReg = /(iphone.+mqqbrowser)|(android.*(baidubrowser)|(baiduboxapp))/i;
            if (navigator.userAgent.match(uaReg)) {
                setTimeout(function() {
                    self.video.play();
                }, 30);
            } else {
                self.video.play();
            }
        },

        // 设置视频相关信息
        setVideo: function (options) {
            var video = this.$video;

            if (options.height || options.height === 0) {
                this.video.height = options.height;
            } else {
                this.video.removeAttribute('height');
            }

            // 设置视频资源地址
            video.attr('src', options.src || '');

            // 设置视频封面
            video.attr('poster', options.poster || '');
        },

        // 插入视频节点，根据playmode参数进行不同的设置
        appendVideo: function (opt) {
            var self = this;
            var video = self.$video;

            // 设置参数
            var options = $.extend({}, self.options, opt);

            var container = $(options.container);

            // 设置视频相关信息
            self.setVideo(options);

            // 如果设置了playMode 且 ios 进行如下操作
            // ios不区分fullscreen || inline, 均为为默认系统全屏播放
            if ($.os && $.os.ios && options.ios && options.ios.playMode === 'hide') {
                var html = $('<div class="c-videoplayer-box-ios"></div>').append(video);
                container.length && container.append(html);
                return;
            }

            // 非ios下
            // 全屏播放
            if ((!$.os || !$.os.ios) && options.android
                // 容错 首次开发少写了一个c
                && (options.android.playMode === 'fullsreen' || options.android.playMode === 'fullscreen')) {
                self.fullsreenForAndriod(opt);
                return;
            }

            // 非ios下
            // 当前区域播放
            // 暂无当前播放规范 尚未开发
            // if (options.playMode === 'inline') {

            // }

            // 如果未设置playMode 则只会简单的插入video节点
            container.length && container.append(video);
        },

        fullsreenForAndriod: function (opt) {
            var self = this;
            var video = self.$video;

            // 设置参数
            var options = $.extend({}, self.options, opt);

            // QQ browser由于自有实现的播放器问题 特殊处理
            // 避免2次点击关闭按钮
            // if (navigator.userAgent.match(/(android.+mqqbrowser)/i)) {
            //     return;
            // }
            // 删除上面的处理 最新的6.8版本播放问题

            // 引用通用弹窗组件
            require(['../popup/popup'], function (Popup) {
                var popup = new Popup({
                    title: options.title || '',
                    content: '',
                    fullView: true,
                    customClassName: 'c-videoplayer-popup',
                    onOpen: function () {
                        popup.$popupContent.html(video);

                        // 关闭按钮距离上方的距离
                        var freesize = 0;
                        var remove = $('.c-videoplayer-popup .c-popup-remove');
                        if (remove.length) {
                            freesize = remove.height() + remove.offset().top;
                        }

                        // 屏幕旋转后，设置video的位置和尺寸
                        $(window).off('orientationchange.playvideosize resize.playvideosize')
                            .on('orientationchange.playvideosize resize.playvideosize', function () {
                                self.calculateVideo({
                                    freesize: freesize
                                });
                            });

                        // 设置video的位置和尺寸
                        self.calculateVideo({
                            freesize: freesize
                        });
                    },
                    onClose: function () {
                        // 初始化
                        $(window).off('orientationchange.playvideosize');
                        self.initStyle();
                    }
                });

                // 解决android手百关闭时页面抖动问题  待popup组件升级后更改 @士浩
                var remove = $('.c-videoplayer-popup .c-popup-remove');
                remove.length && remove.off('click.playvideo')
                    .on('click.playvideo', function () {
                        popup.$popupContent.length && popup.$popupContent.html('');
                    });
            });
        },

        initStyle: function () {
            var self = this;
            var video = self.$video;
            video.removeAttr('style');
        },

        // android全屏时计算video的高度和位置
        // @param {boolean}    params.freesize  可选 上下需要空闲出来的尺寸
        calculateVideo: function (params) {
            var self = this;
            var video = self.$video;
            var params = params || {};

            // 初始化样式避免被设定影响
            self.initStyle();

            setTimeout(function () {
                var winHeight = $(window).height();
                var winWidth = $(window).width();
                var freesize = params.freesize || 0;
                var h = video.height();

                if (winHeight <= winWidth) {
                    h = winHeight - freesize * 2;
                }
                video.css({
                    'height': h + 'px',
                    'margin-top': - h / 2 + 'px',
                    'visibility': 'visible'
                });

                // $('.c-popup-title').html(
                //     'vh:' + video.height() + 'vt:' + video.offset().top + 'f:' + freesize
                //     + 'wh:' + $(window).height() + 'ww:' + $(window).width());
            }, 10);
        },

        pause: function() {
            this.video.pause();
        },
        remove: function() {
            this.$video.remove();
            this.isWorking = false;
        },
        // 获取视频时长
        getVideoTime: function() {
            return Math.ceil(this.video.duration);
        },
        on: function(name, fn) {
            this.$video.on(name, fn);
        },
        trigger: function(name) {
            this.$video.trigger(name);
        }
    }
    return VideoPlayer;
});