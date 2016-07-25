fis.set('project.files', ['*.js', '*.css']);
fis.set('project.ignore', ['/dep/**']);


// 处理components组件目录
fis.match('/components/**.css', {
    optimizer: fis.plugin('clean-css')
});

fis.match('/components/(**)', {
	// 跳过标准话插件处理内置语法, __inline __uri等
	// standard : null,
    release: '/pmd/$1'
});

//fis.match('/components/(**).js', {
//    moduleId: '/pmd/$1'
//});

//fis.hook('amd', {
//});


// 处理全局css/js目录
fis.match('/css/grid.less', {
    parser: fis.plugin('less'),
    rExt: '.css'
});

fis.match('/css/pmd.css', {
    packTo: '/pmd.css'
});

fis.match('/js/pmd.js', {
    packTo: '/pmd.js'
});


// 处理全局font目录
fis.match('/font/**.zip', {
    release: false
});

fis.match('/font/**', {
	url: '.$0'
});
