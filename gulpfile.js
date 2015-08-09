var gulp = require('gulp');
var rename = require('gulp-rename');
var header = require('gulp-header');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var react = require('gulp-react');
var minicss = require('gulp-minify-css');
var babel = require('gulp-babel');
var browserify = require('browserify');
var vinyl = require('vinyl-source-stream');
var reactify = require('reactify');
var babelify = require('babelify');
var less = require('gulp-less');
var connect = require('gulp-connect');
var buffer = require('vinyl-buffer');

var date = new Date();
var time = date.getFullYear() + '/' + (parseInt(date.getMonth()) + 1) + '/' + date.getDate();

var copyright = ['/**',
  ' * ' + time,
  ' * link      : https://github.com/limi58',
  ' * copyright : limi58 , http://www.imbgf.com',
  ' */',
  ''].join('\n');

gulp.task('connect', function () {
  connect.server({
    root: './',
    livereload: true
  });
});

gulp.task('default',['buildjs','buildcss','connect','watch']);

gulp.task('watch', function(){
   gulp.watch('./src/js/**/*.*', ['buildjs']);
   gulp.watch('./src/less/**/*.*', ['buildcss']);
});

gulp.task('buildjs',function(){
  browserify('./src/js/main.jsx')
  .transform(reactify)
  .transform(babelify)
  .bundle()
  .pipe(vinyl('main.min.js'))
  .pipe(buffer())
  .pipe(uglify())
  .pipe(gulp.dest('./dist/js'))
  .pipe(connect.reload());
});

gulp.task('buildcss',function(){
  return gulp.src('./src/less/main.less')
  .pipe(less())
  .pipe(minicss())
  .pipe(rename('main.min.css'))
  .pipe(gulp.dest('./dist/css/'))
  .pipe(connect.reload());
});