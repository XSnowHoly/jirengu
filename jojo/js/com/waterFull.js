
define(['jquery'], function($) {

 var WaterFall = (function(){
            var $imgUl = $('.waterfull .imgUl');
            function init(){    
                 console.log('666');
                for(var i=0; i< $('.waterfull .imgUl img').length; i++) {
                    var img = new Image();
                    img.src = $('.waterfull .imgUl img')[i].src;
                    img.onload = function (){
                        waterfull();
                    }
                }

               $(window).resize(waterfull);


            }

            function waterfull() {          
                var imgUlLength = parseInt($('.waterfull').width() / $('.imgUl img').first().outerWidth(true)),
                    imgArr = [],                                    // 初始化数组
                    $imgLi = $('.imgUl li');

                for(var i=0; i<imgUlLength; i++) {
                    imgArr[i] = 0;
                }

                $imgLi.each(function() {                            // 循环元素摆放位置
                    var maxValue = Math.max.apply(null, imgArr),
                        minValue = Math.min.apply(null, imgArr),
                        minIndex = imgArr.indexOf(minValue);

                    var $this = $(this);


                    $this.css({
                        top: minValue,
                        left: $this.outerWidth(true) * minIndex
                         })

                    imgArr[minIndex] += $(this).outerHeight(true);

                    });
            }

                return {
                    init: init
                }
        })();


    return WaterFall;
});
        
       
