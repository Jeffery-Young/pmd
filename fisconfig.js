// fis3 release --dest=./build --root=./src/ --file=./fisconfig.js -w

var path = require('path');
fis.require.paths.unshift(path.join(__dirname, 'node_modules'));

fis.set('project.fileType.text', 'md');


fis.match('/css/grid.less', {
    parser: fis.plugin('less'),
    rExt: '.css'
});

fis.match('/components/(**).js', {
    moduleId: 'pmd/$1'
});

fis.hook('amd', {
});

fis.match('/components/**/demo.html', {
    // 处理demo文件，自动添加头部、尾部js
    optimizer: function(content, file) {
        var header_info = fis.project.lookup('/base/demo_header.html', file);
        var header_file = header_info.file;
        fis.compile(header_file);
        var footer_info = fis.project.lookup('/base/demo_footer.html', file);
        var footer_file = footer_info.file;
        fis.compile(footer_file);
        return header_file.getContent() + content + footer_file.getContent();
    }
});

fis.match('/components/menu.json', {
    // 处理menu.json文件，生成html导航菜单
    optimizer: function(content, file) {
        var menu = JSON.parse(content).menu;
        var menuHtml = '';
        for (var i = 0; i < menu.length; i++) {
            menuHtml += '<li data-type="' + menu[i].hash + '"><a href="#' + menu[i].hash + '">' + menu[i].name + '</a></li>';
        };
        return menuHtml;
    },
    rExt: '.html'
});

fis.match('/**.{jpg,gif,png,js,css}', {
    url: '../..$0'
});

fis.match('**.{eot,svg,ttf,woff}', {
    url: '..$0'
});
