# h5 video播放器
> by songgenlei


## 使用方式

js组件，require方式引入。

``` javascript
require(['pmd/player/videoPlayer'], function (videoPlayer) {
    var bdPlayer = new videoPlayer;
});
```

### 说明

目前只支持mp4格式；

ios下播放时，为浏览器自有播放器或默认系统全屏播放

## 参数说明

**height (可选)**：number，video元素的高度；

**ios（可选）**：针对ios设备的设置；

**ios.playMode (可选)**：ios下播放设定，可选值：hide （对插入的video进行隐藏），默认值：false；

**android（可选）**：针对非ios设备的设置；

**android.playMode (可选)**：android下播放设定，可选值：fullscreen (全屏播放)，默认值：false；

## 方法说明

**play**：视频播放；首次播放时调用，会插入视频节点并进行播放；

**remove**：移除当前video标签；

## 代码示例

``` html
<div class="wa-bdplayer">
    <img src="http://p1.bdstatic.com/7217528220198269875.jpg">
    <div class="wa-play-icon"></div>
    <div class="wa-video-box"></div>
</div>
```
### 默认样式

``` javascript
<script type="text/javascript">
require(['pmd/player/videoPlayer'], function (videoPlayer) {
    var bdPlayer = new videoPlayer({
        height: 210
    });
    $('.wa-play-icon').click(function() {
        bdPlayer.play({
            // 播放器容器，必选
            container: '.wa-video-box',
            // 视频资源地址，必选
            src: 'http://v1.bdstatic.com/7217528220198269875/mp4/7217528220198269875.mp4'
        });
        $(this).hide();
    });
    bdPlayer.on('pause', function() {
        $('.wa-play-icon').show();
    });
    bdPlayer.on('play', function() {
        $('.wa-play-icon').hide();
    });
    bdPlayer.on('onefifth', function() {
        console.log('播放至少1/5');
    });
    bdPlayer.on('fourfifths', function() {
        console.log('播放至少4/5');
    });
    bdPlayer.on('playend', function() {
        console.log('播放结束');
    });

    // 移除视频：bdPlayer.remove();
    // 视频长度：bdPlayer.getVideoTime();
});
</script>
```


### 组件扩展样式
``` javascript

<script type="text/javascript">
require(['pmd/player/videoPlayer'], function (videoPlayer) {
    var bdPlayer = new videoPlayer({
        ios: {
            playMode: 'hide',
        },
        android: {
            playMode: 'fullscreen'
        }
    });
    $('.wa-play-icon').click(function() {
        bdPlayer.play({
            // 播放器容器，必选
            container: '.wa-video-box',
            // 视频资源地址，必选
            src: 'http://v1.bdstatic.com/7217528220198269875/mp4/7217528220198269875.mp4'
        });
        $(this).hide();
    });
    bdPlayer.on('pause', function() {
        $('.wa-play-icon').show();
    });
    bdPlayer.on('play', function() {
        $('.wa-play-icon').hide();
    });
    bdPlayer.on('onefifth', function() {
        console.log('播放至少1/5');
    });
    bdPlayer.on('fourfifths', function() {
        console.log('播放至少4/5');
    });
    bdPlayer.on('playend', function() {
        console.log('播放结束');
    });

    // 移除视频：bdPlayer.remove();
    // 视频长度：bdPlayer.getVideoTime();
});
</script>

```