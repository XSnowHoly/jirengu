define(['jquery', 'carousel', 'gotoTop', 'waterFall', 'loadBtn'], function($, Carousel, GoToTop, WaterFall, LoadBtn){
    Carousel.init($('.carousel'));
    GoToTop.init();
    WaterFall.init();
    LoadBtn.init($('.waterfull'));
})