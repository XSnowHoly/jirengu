define(['jquery'], function($) {

    var gotoTop = (function() {

        function _gotoTop() {
            this.init();
            this.bindEvent();
            this.isShow();
        }

        _gotoTop.prototype.init = function() {
            this.$windowHeight = $(window).height();
        };

        // _gotoTop.prototype.bindEvent = function() {
        //     var that = this;
        //     $(window).on('scroll', function (){
        //         console.log(this.scrollTop);
        //         that.isShow();
        //     });
        // }
        
          _gotoTop.prototype.bindEvent = function() {
            var that = this;             
            $(window).on('scroll', function (){
                that.$scrollTop = windowScrollTop = $(window).scrollTop();
                that.isShow();
            });
        }


        _gotoTop.prototype.isShow = function() {
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

        _gotoTop.prototype.createNode = function() {
             this.$target = $('<div class="top"></div>');
             $('body').append(this.$target)
             console.log($(this.$target));
             $(this.$target).on('click', function() {
                $('body').animate({scrollTop:0}, 'slow')
             });
        };


        return {
            init: function() {
                new _gotoTop();
            }
        }




    })();



    return gotoTop;
});