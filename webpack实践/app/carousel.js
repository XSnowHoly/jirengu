
var $ = require('jquery');
    var Carousel = (function(){
                function _Carousel($ct) {
                    this.$ct = $ct;
                    this.init();
                    this.bindEvent();
                    this.auto();
                }

                _Carousel.prototype.init = function() {
                    var $carouselBox = this.$carouselBox = this.$ct,
                        $slidesUl = this.$slidesUl = this.$ct.find('.slides-img'),               
                        $slidesLi = this.$slidesLi = this.$ct.find('.slides-img  li'),
                        $slidesImg = this.$slidesImg = this.$ct.find('.slides-img img'),
                        $shullingBtn = this.$shullingBtn = this.$ct.find('.shulling-btn > li'),
                        $BtnPrev = this.$BtnPrev = this.$ct.find('.btn.prev'),
                        $BtnNext = this.$BtnNext = this.$ct.find('.btn.next');

                    var $firstLi = $slidesLi.first(),
                        $lastLi = $slidesLi.last(),
                        $slidesNum = this.$slidesNum = $slidesLi.length,
                        $slidesWidth = this.$slidesWidth = $firstLi.width();
                        this.$index = 0;
                         $slidesLi.css({
                                        width: $carouselBox.width()
                        });                       
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
                            // console.log(that.check);
                            that.stop();
                        });    // 鼠标移动到图片上轮播停止
                        this.$carouselBox.on('mouseleave', function() {
                            that.auto();
                        });        // 鼠标移开后开始轮播

                        this.$shullingBtn.on('click', function (){
                            this.$BtnIndex = $(this).index();
                            if(that.$index === this.$BtnIndex) return;
                            (that.$index > this.$BtnIndex) ? that.prev(that.$index-this.$BtnIndex) : that.next(this.$BtnIndex-that.$index);
                        });

                        this.$BtnPrev.on('click', function() {
                            e.preventDefault();
                            that.prev(1);
                            that.gotoBtn();
                        });

                        this.$BtnNext.on('click', function() {
                            e.preventDefault();
                            that.next(1);
                            that.gotoBtn();
                        });
                };

                _Carousel.prototype.prev = function(n) {
                    var that = this;
                    if(!this.lock) return;
                    this.lock = false;
                    this.$slidesUl.animate({ 'left': '+=' + this.$slidesWidth*n + 'px' }, function() {
                        that.$index -= n;
                        if(that.$index < 0) {
                        that.$ct.find('.slides-img').css({ 'left': -(that.$slidesWidth*that.$slidesNum) });
                        that.$index = that.$slidesNum -1;
                        
                    }
                    that.lock = true;
                    that.gotoBtn();
                    });
                };

                _Carousel.prototype.next = function(n) {
                    var that = this;
                    if(!this.lock) return;
                    this.lock = false;
                    this.$slidesUl.animate({ 'left': '-=' + this.$slidesWidth*n + 'px' }, function() {
                        that.$index += n;
                        if(that.$index === that.$slidesNum) {
                        that.$ct.find('.slides-img').css({ 'left': -that.$slidesWidth });
                        that.$index = 0;
                        
                    }
                    that.lock = true;
                    that.gotoBtn();
                    });                 
                };

                _Carousel.prototype.gotoBtn = function() {
                    this.$shullingBtn.removeClass('active')
                    .eq(this.$index)
                    .addClass('active');
                };

                _Carousel.prototype.stop = function() {
                    var that = this;
                    clearInterval(that.check);
                }

                _Carousel.prototype.auto = function() {
                    var that = this;
                    this.stop();
                    this.check = setInterval(function() {
                        that.next(1);
                    }, 3500);
                };


                
                return {
                    init: function($ct) {
                        $ct.each(function(index, node) {
                            new _Carousel($(node));
                        });
                    }
                }

            })();
  module.exports = Carousel;

        // Carousel.init($('.carousel'));