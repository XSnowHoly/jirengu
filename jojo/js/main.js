require.config({
    baseUrl: 'js',

    paths: {
        jquery: 'lib/jquery',
        carousel: 'com/carousel',
        gotoTop: 'com/gotoTop'
    }


});
// require(['jquery'], function(x){ console.log(x)})

requirejs(['app/index']);
