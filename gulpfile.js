var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    bs = require('browser-sync').create();

gulp.task('sass', function(){
    gulp.src('./sass/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'))
    .pipe(bs.reload({stream: true}));
});

gulp.task('scripts', function() {  
    return gulp.src(['./js/**/*.js', '!./js/scripts.js'])
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('./js/'));
});

gulp.task('build', ['sass', 'scripts'], function(){
    return gulp.src(['./*.html', './css/**/*', './js/scripts.js', './lib/**/*', './htmlTemplates/**/*'],
    {base: './'})
    .pipe(gulp.dest('./dist/'));
});

gulp.task('moveHtml', function(){
    return gulp.src(['./*.html'], {base: './'})
        .pipe(gulp.dest('./dist/'));
});
gulp.task('moveCss', function(){
    return gulp.src(['./css/**/*.*'], {base: './'})
        .pipe(gulp.dest('./dist/'));
});
gulp.task('moveJs', function(){
    return gulp.src(['./js/scripts.js'], {base: './'})
        .pipe(gulp.dest('./dist/'));
});
gulp.task('moveTemplates', function(){
    return gulp.src(['./htmlTemplates/**/*.*'], {base: './'})
        .pipe(gulp.dest('./dist/'));
});
gulp.task('moveLib', function(){
    return gulp.src(['./lib/**/*.*'], {base: './'})
        .pipe(gulp.dest('./dist/'));
});

gulp.task('browser-sync', ['sass'], function() {
    bs.init({
        server: {
            baseDir: "./dist"
        }
    });
});

gulp.task('moveBower', function(){
    gulp.src('./bower_components/**/*.*')
    .pipe(gulp.dest('./lib/'));
});

gulp.task('watch', ['browser-sync'], function(){
    gulp.watch('./sass/**/*.scss', ['sass']);
    gulp.watch(['./js/**/*.js', '!./js/scripts.js'], ['scripts']);
    gulp.watch('./*.html', ['moveHtml']);
    gulp.watch('./htmlTemplates/**/*.*.html', ['moveTemplates']);
    gulp.watch('./css/**/*.*', ['moveCss']);
    gulp.watch('./js/scripts.js', ['moveJs']);
    gulp.watch('./lib/**/*.*', ['moveLib']);
    gulp.watch('./dist/**/*.*').on('change', bs.reload);
});

gulp.task('initialize', ['moveBower', 'sass', 'scripts', 'build']);

gulp.task('default', ['watch']);