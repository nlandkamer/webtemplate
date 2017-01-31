var gulp = require('gulp'),
    sass = require('gulp-sass'),
    bs = require('browser-sync').create();

gulp.task('sass', function(){
    gulp.src('./scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'));
});

gulp.task('watch', ['sass'], function(){
    gulp.watch('./scss/**/*.scss', ['sass']);
});

gulp.task('moveBower', function(){
    gulp.src('./bower_components/**/*.*')
    .pipe(gulp.dest('./lib/'));
});

gulp.task('initialize', ['moveBower', 'sass']);

gulp.task('default', ['watch']);