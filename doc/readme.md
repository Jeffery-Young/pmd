# 欢迎使用 PS Material Design UI 平台


## 参与开发

源码托管：[https://github.com/Jeffery-Young/pmd](https://github.com/Jeffery-Young/pmd)
    
环境依赖：

* npm install -g [fis3](http://fis.baidu.com/fis3/index.html)   // fis3需要全局安装
* npm install fis3-hook-amd
* npm install fis-parser-less
* npm install fis3-parser-stylus    // 目前仍然使用less预处理，计划迁移stylus


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


### 发布打包

``` shell
make
```
执行fis编译产生build、output两个目录，分别用于平台展示及产出打包。

打包产出物均为源代码，可根据实际使用环境执行编译。

``` shell
git push
```
执行push后，平台机器会自动执行make，更新平台文件及产出新的打包文件。
