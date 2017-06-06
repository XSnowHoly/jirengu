require.config({
    baseUrl: 'js',

    paths: {
        jquery: 'lib/jquery',
        carousel: 'com/carousel',
        TabTopMv: 'com/tab-top-mv'
    }


});
// require(['jquery'], function(x){ console.log(x)})

requirejs(['app/index']);
