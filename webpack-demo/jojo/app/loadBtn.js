
define(['jquery', 'waterFall'], function($, WaterFall) {


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
});