define(['jquery', 'carousel', 'gotoTop'], function($, Carousel, GoToTop){
    Carousel.init($('.carousel'));
    GoToTop.init();
})