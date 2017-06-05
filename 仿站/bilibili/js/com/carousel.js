

define(['jquery'], function( $ ) {
    var Carousel = (function(){
                function _Carousel($ct) {
                    this.$ct = $ct;
                    this.init();
                    this.bindEvent();
                    this.auto();
                    this.titleSwitch();
                }

                _Carousel.prototype.init = function() {
                    var $carouselBox = this.$carouselBox = this.$ct,
                        $slidesUl = this.$slidesUl = this.$ct.find('.c-img'),               
                        $slidesLi = this.$slidesLi = this.$ct.find('.c-img > li'),
                        $slidesImg = this.$slidesImg = this.$ct.find('.c-img img'),
                        $bannerTitle = this.$bannerTitle = this.$ct.find('.banner-title > a'),
                        $shullingBtn = this.$shullingBtn = this.$ct.find('.banner-btn > li');

                    var $firstLi = $slidesLi.first(),
                        $lastLi = $slidesLi.last(),
                        $slidesNum = this.$slidesNum = $slidesLi.length,
                        $slidesWidth = this.$slidesWidth = $firstLi.width();
                        this.$index = 0;

                        $slidesUl.append($firstLi.clone());      // 添加克隆元素
                        $slidesUl.prepend($lastLi.clone());      // 添加克隆元素
                        $slidesUl.css({                        
                                        width: $slidesUl.children().length * $slidesWidth + 'px',
                                        left: -$slidesWidth
                                     });
                    this.lock = true;                               
                };

                _Carousel.prototype.bindEvent = function() {
                        var that = this;
                        this.$carouselBox.on('mouseenter', function() {
                            clearInterval(that.check);
                        });    // 鼠标移动到图片上轮播停止
                        this.$carouselBox.on('mouseleave', function() {
                            that.auto();
                        });        // 鼠标移开后开始轮播

                        this.$shullingBtn.on('click', function (){
                            this.$BtnIndex = $(this).index();
                            if(that.$index === this.$BtnIndex) return;
                            (that.$index > this.$BtnIndex) ? that.prev(that.$index-this.$BtnIndex) : that.next(this.$BtnIndex-that.$index);
                        });
                };

                _Carousel.prototype.prev = function(n) {
                    var that = this;
                    if(!this.lock) return;
                    this.lock = false;
                    this.$slidesUl.animate({ 'left': '+=' + this.$slidesWidth*n + 'px' }, function() {
                        that.$index -= n;
                        if(that.$index < 0) {
                        that.$ct.find('.c-img').css({ 'left': -(that.$slidesWidth*that.$slidesNum) });
                        that.$index = that.$slidesNum -1;
                        
                    }
                    that.lock = true;
                    that.gotoBtn();
                    that.titleSwitch();
                    });
                };

                _Carousel.prototype.next = function(n) {
                    var that = this;
                    if(!this.lock) return;
                    this.lock = false;
                    this.$slidesUl.animate({ 'left': '-=' + this.$slidesWidth*n + 'px' }, function() {
                        that.$index += n;
                        if(that.$index === that.$slidesNum) {
                        that.$ct.find('.c-img').css({ 'left': -that.$slidesWidth });
                        that.$index = 0;
                        
                    }
                    that.lock = true;
                    that.gotoBtn();
                    that.titleSwitch();
                    });                 
                };

                _Carousel.prototype.gotoBtn = function() {
                    this.$shullingBtn.removeClass('active')
                    .eq(this.$index)
                    .addClass('active');
                };

                _Carousel.prototype.auto = function() {
                    var that = this;
                    this.check = setInterval(function() {
                        that.next(1);
                    }, 3000);
                };

                // _Carousel.prototype.stopPlay = function() {
                //     var that = this;
                    
                // };

                _Carousel.prototype.titleSwitch = function() {
                    var title = this.$slidesImg.eq(this.$index).attr("data-title");
                    this.$bannerTitle.text(title);
                };
                
                return {
                    init: function($ct) {
                        $ct.each(function(index, node) {
                            new _Carousel($(node));
                        });
                    }
                }

            })();
    return Carousel;
});

        // Carousel.init($('.carousel'));