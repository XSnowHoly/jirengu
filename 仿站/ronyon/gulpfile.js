var gulp = require('gulp');
var del = require('del');
var imgmin = require('gulp-imagemin');
var minify = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');


gulp.task('css', function() {
    gulp.src(['./css/bootstrap.css', './css/responsive-nav.css', './css/swiper-3.4.2.min.css', './css/style.css', './css/productservice.css', './css/solution.css', './css/about.css'])
        .pipe(concat('merge.css'))
        .pipe(minify())
        .pipe(gulp.dest('dist/css/'));
})


gulp.task('img', function() {
    gulp.src('./images/*')
        .pipe(imgmin())
        .pipe(gulp.dest('dist/images'))
})

gulp.task('clean', function() {
    del([
            'dist'
        ])
})



gulp.task('default', ['css', 'img']);