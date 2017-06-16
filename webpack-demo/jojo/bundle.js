/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [!(function webpackMissingModule() { var e = new Error("Cannot find module \"jquery\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_RESULT__ = function( $ ) {
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

                        this.$BtnPrev.on('click', function() {
                            that.prev(1);
                            that.gotoBtn();
                        });

                        this.$BtnNext.on('click', function() {
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

                _Carousel.prototype.auto = function() {
                    var that = this;
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
    return Carousel;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

        // Carousel.init($('.carousel'));

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [!(function webpackMissingModule() { var e = new Error("Cannot find module \"jquery\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_RESULT__ = function($) {

    var gotoTop = (function() {

        function _gotoTop() {
            this.init();
            this.bindEvent();
            this.isShow();
        }

        _gotoTop.prototype.init = function() {
            this.$windowHeight = $(window).height();
            this.$menuBtn = $('.nav_menu');
        };
        
          _gotoTop.prototype.bindEvent = function() {       
            var that = this;           
            $(window).on('scroll', function (){             // 窗口滑动到指定位置创建回到顶部按钮
                that.$scrollTop = windowScrollTop = $(window).scrollTop();
                that.isShow();
            });

            this.$menuBtn.on('click', function(e) {        // 菜单点击跳转到相应位置
                e.preventDefault();
                var nodeId = '#' + $(e.target).attr('data-src'),
                    nodeOffset = $(nodeId).offset().top;
                $('body,html').animate({scrollTop: nodeOffset}, 'slow');
            });
        }


        _gotoTop.prototype.isShow = function() {            // 判断窗口滑动距离
            if (!this.$target) {
                if(this.$scrollTop > this.$windowHeight) {
                    this.createNode();
                } else {
                    return;
                }
            } else {
                if(this.$scrollTop < this.$windowHeight) {
                    this.$target.fadeOut('slow');
                } else {
                    this.$target.fadeIn('slow');
                }
            }
        };

        _gotoTop.prototype.createNode = function() {        // 创建回到顶部元素
             this.$target = $('<div class="top"></div>');
             $('body').append(this.$target);
             $(this.$target).on('click', function() {
                $('body,html').animate({scrollTop:0}, 'slow');
             });
        };


        return {
            init: function() {
                new _gotoTop();
            }
        }




    })();



    return gotoTop;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [!(function webpackMissingModule() { var e = new Error("Cannot find module \"jquery\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()), !(function webpackMissingModule() { var e = new Error("Cannot find module \"waterFall\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_RESULT__ = function($, WaterFall) {


    var LoadBtn = (function() {


        function _LoadBtn($ct) {
            this.$ct = $ct;
            this.$lastLi = $ct.find('.imgUl li').last();
            this.init();
            this.bindEvent();
        }

        _LoadBtn.prototype.init = function() {
            this.$loadBtn = $('.loadBtn');
            this.$products = [    
            {        
            img_src: 'https://b-ssl.duitang.com/uploads/item/201605/27/20160527181034_yux5e.thumb.700_0.jpeg',
            a_src: 'https://b-ssl.duitang.com/uploads/item/201605/27/20160527181034_yux5e.thumb.700_0.jpeg', 
            },
            {        
            img_src: 'https://b-ssl.duitang.com/uploads/item/201602/11/20160211223114_Ps3SF.thumb.700_0.jpeg',
            a_src: 'https://b-ssl.duitang.com/uploads/item/201602/11/20160211223114_Ps3SF.thumb.700_0.jpeg', 
            },
            {        
            img_src: 'https://b-ssl.duitang.com/uploads/item/201602/12/20160212145636_HwU5c.thumb.700_0.jpeg',
            a_src: 'https://b-ssl.duitang.com/uploads/item/201602/12/20160212145636_HwU5c.thumb.700_0.jpeg', 
            },
            {        
            img_src: 'https://b-ssl.duitang.com/uploads/item/201602/12/20160212145731_AF8Pn.thumb.700_0.jpeg',
            a_src: 'https://b-ssl.duitang.com/uploads/item/201602/12/20160212145731_AF8Pn.thumb.700_0.jpeg', 
            }
            ];
        }

        _LoadBtn.prototype.bindEvent = function() {
            var that = this;
            this.$loadBtn.on('click', function() {
                that.createHtml(that.$products,4);
                that.$lastLi.after(that.$html);
                WaterFall.init();
            });
        }

        _LoadBtn.prototype.createHtml = function(pro,len) {
            this.$html = '';
            for(var i=0; i<len; i++) {
            this.$html += '<li>' + '<a href="'+ pro[i].a_src +'" target="_blank"><img src="' + pro[i].img_src + '" alt=""></a>' + '</li>';
            }           
        }

        return {
            init: function($ct) {
                new _LoadBtn($ct);
            }
        }

    })();


    return LoadBtn;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [!(function webpackMissingModule() { var e = new Error("Cannot find module \"jquery\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_RESULT__ = function($) {

 var WaterFall = (function(){
            function init(){
                for(var i=0; i< $('.imgUl img').length; i++) {
                    var img = new Image();
                    img.src = $('.imgUl img')[i].src;
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
                        maxIndex = imgArr.indexOf(maxValue),
                        minIndex = imgArr.indexOf(minValue);

                    var $this = $(this);

                    $this.css({
                        top: minValue,
                        left: $this.outerWidth(true) * minIndex
                         })

                    $('.waterfull .imgUl').css({
                        height: maxValue
                    })

                    imgArr[minIndex] += $(this).outerHeight(true);

                    });
            }

                return {
                    init: init
                }
        })()


    return WaterFall;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
        
       


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"jquery\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var GoToTop = __webpack_require__(1);
var Carousel = __webpack_require__(0);
var WaterFall = __webpack_require__(3);
var LoadBtn = __webpack_require__(2);

Carousel.init($('.carousel'));
GoToTop.init();
WaterFall.init();
LoadBtn.init($('.waterfull'));

/***/ })
/******/ ]);