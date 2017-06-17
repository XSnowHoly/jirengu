var $menus = $('.menus');
$menus.on('click', 'li', function(event) {
    var $this = $(this),
        $index = $this.index(),
        $goodsList = $this.parents('.tab-box').find('.goods');
    $this.parent('.menus').find('li').removeClass('active');
    $this.addClass('active');
    $goodsList.removeClass('active');
    $goodsList.eq($index).addClass('active');
});