require.config({
    baseUrl: 'js',

    paths: {
        jquery: 'lib/jquery',
        carousel: 'com/carousel',
        gotoTop: 'com/gotoTop',
        waterFall: 'com/waterFall',
        loadBtn: 'com/loadBtn'
    }


});
// require(['jquery'], function(x){ console.log(x)})

requirejs(['app/index']);
