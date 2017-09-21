var $menus = $('.menus'),
    $addLi = $('.addLi');

var products = [    
{        
img: 'https://gd1.alicdn.com/imgextra/i1/410074630/TB2wfLGgS0jpuFjy0FlXXc0bpXa_!!410074630.jpg',
name: '小林家的龙女仆周边抱枕妹抖龙康娜抱枕',        
price: '￥ 31.00' 
},
{        
img: 'https://gd2.alicdn.com/imgextra/i2/66280588/TB20i10ihtmpuFjSZFqXXbHFpXa_!!66280588.jpg',        
name: '绝对萌域 小林家的龙女仆康娜动漫周边二次元宅男定制等身抱枕套',        
price: '￥ 118.00' 
},
{        
img: 'https://img.alicdn.com/bao/uploaded/i2/TB1N.XeQFXXXXatXFXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg',        
name: 'GSC 《Re：从零开始的异世界生活》 粘土人 雷姆 女仆装扮手办',        
price: '￥ 296.00' 
}];

$menus.on('click', 'li', function(event) {
    var $this = $(this),
        $index = $this.index(),
        $goodsList = $this.parents('.tab-box').find('.goods');
    $this.parent('.menus').find('li').removeClass('active');
    $this.addClass('active');
    $goodsList.removeClass('active');
    $goodsList.eq($index).addClass('active');
});

$addLi.on('click', function(event) {
    var html = createHtml(products,3);
    $(this).parent('.goods').children('li').last().after(html);
});

function createHtml(pro,len) {
    var html = '';
    for(var i=0; i<len; i++) {
        html += '<li>' + '<div class="cover">' + '<a href="#">立即抢购</a>' + '</div>'
        + '<img class="goods-img" src="' + pro[i].img + '" alt="" />' + '<h3><a href="#">' + pro[i].name + '</a></h3>' + '<p class="price">' + pro[i].price + '</p>' + '</li>';
    }
    return html;
}