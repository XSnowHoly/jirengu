var $ = require("jquery");
var GoToTop = require('./gotoTop');
var Carousel = require('./carousel');
var WaterFall = require('./waterFall');
var LoadBtn = require('./loadBtn');

Carousel.init($('.carousel'));
GoToTop.init();
WaterFall.init();
LoadBtn.init($('.waterfull'));