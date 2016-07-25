define(function () {
    // 加载animate公共css
    var $animateStyle = $('<style data-for="pmd/animate/animate"></style>');
    $animateStyle.text(__inline("animate.css"));
    $('head').append($animateStyle);
});