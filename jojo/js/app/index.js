define(['jquery', 'carousel'], function($, Carousel){
    console.log($('.carousel > li:first'));
    Carousel.init($('.carousel'));
})