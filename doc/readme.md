# 欢迎使用 PS Material Design UI 平台


## 参与开发

源码托管：[http://gitlab.baidu.com/psfe/ps-material-design](http://gitlab.baidu.com/psfe/ps-material-design)
    
开发环境与wise结果页相同，依赖fis3。

环境部署方式移步[linux开发环境部署](http://sfe.baidu.com/#/工具服务/linux开发环境部署)查看。


## 开发规范

### 源文件目录结构

``` shell
src
├── components # 组件目录
│     ├── button # 单独组件
│     └── tabs
│           ├── demo.html # 组件示例html
│           ├── readme.md # 组件使用文档
│           ├── tabs.css  # 组件css源文件
│           └── tabs.js   # 组件js源文件
├── css  # 全局css源文件
├── dep  # 第三方库依赖
├── font # iconfont字体文件
└── js   # 全局js源文件
```

### 组件开发规范

所有组件均在src/components/xxx目录下开发，一个组件对应一个独立的文件夹。

组件文件中必须包含demo.html及readme.md，分别对应组件示例及组件使用文档。

组件js源文件采用amd方式开发。


### 新增组件

若新增组件或组件文件夹结构变化，需对应修改src/components/menu.json文件更新组件导航。

``` javascript
{
    "menu": [
        {
            "name": "卡片",
            "hash": "card"
        },
        ...
        {
            "name": "流式栅格",
            "hash": "grid"
        }
    ]
}
```
其中name表示组件名称，hash表示组件目录名。menu数组顺序对应导航数序，可根据实际情况调整。


## 组件发布

### 本地调试

``` shell
make dev
```
开启fis watch功能，直接本地修改即时预览。

### CodeReview

``` shell
python upload.py
```
可以使用公司统一upload.py脚本在cooder平台发起CodeReview。

注意：upload.py只能在git add后，git commit前发起。

upload使用方法请使用"python upload.py --h"查看。

### 发布打包

``` shell
make
```
执行fis编译产生build/output两个目录，分别用于平台展示及产出打包。

目前产出的打包文件只在结果页使用，打包产出物均为源代码，可根据实际使用环境执行编译。

``` shell
git push
```
执行push后，平台机器会自动执行make，更新平台文件及产出新的打包文件。
