var $ = require('jquery');


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



    module.exports = gotoTop;