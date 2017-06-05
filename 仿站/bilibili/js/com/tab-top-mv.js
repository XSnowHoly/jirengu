

define(['jquery'], function( $ ) {

var TopMv = (function() {
    function _TopMv($target) {
        this.$ct = $target;
        this.init();
        this.bind();
        this.btnText();
    }

    _TopMv.prototype.init = function() {
        this.$index = 0;
        this.$ImgUl = this.$ct.find(".top-mv");
        this.$ImgLi = this.$ct.find(".top-mv > li");
        this.$CountUl = this.$ct.find(".top-mv").length-1;
        this.$Btn = this.$ct.find(".no-select");
        this.$BtnPrev = this.$ct.find(".page-prev");
        this.$BtnNext = this.$ct.find(".page-next");
    }

    _TopMv.prototype.bind = function() {
        var that = this;
        this.$BtnPrev.on('click', function(e) {
            e.preventDefault();
            that.prev();
        })

        this.$BtnNext.on('click', function(e) {
            e.preventDefault();
            that.next();
        })

        this.$ImgLi.on('mouseenter', function() {
            $(this).find('.info').addClass('active');
        })
        this.$ImgLi.on('mouseleave', function() {
            $(this).find('.info').removeClass('active');
        })

        this.$ct.on('mouseenter', function() {
            that.$Btn.fadeIn();
        })

        this.$ct.on('mouseleave', function() {
            that.$Btn.fadeOut('slow');
        })
    }

    _TopMv.prototype.prev = function() {
        this.$index -= 1;
        if(this.$index < 0) {
            this.$index = this.$CountUl;
        }
        this.goto();
        this.btnText();
    }

    _TopMv.prototype.next = function() {
        this.$index += 1;
        if(this.$index > this.$CountUl) {
            this.$index = 0;
        }
        this.goto();
        this.btnText();
    }

    _TopMv.prototype.goto = function() {
        this.$ImgUl.removeClass('active')
                   .eq(this.$index)
                   .addClass('active');
    }

    _TopMv.prototype.btnText = function() {
        var index = this.$index,
            prevIndex = index - 1;

        var nextIndex = index + 1;  
        if(prevIndex < 0) {
            prevIndex = this.$CountUl;
        }
        if(nextIndex > this.$CountUl) {
            nextIndex = 0;
        } 
        var prevText = this.$ImgUl.eq(prevIndex).attr('data-btn'),
            nextText = this.$ImgUl.eq(nextIndex).attr('data-btn');
        this.$BtnPrev.text(prevText);
        this.$BtnNext.text(nextText);
    }



    return {
        init: function($target) {
            new _TopMv($target);
        }
    }

})();

    return TopMv;


});




// TopMv.init($('.hot-mv'));