var gulp = require('gulp');
    sass = require('gulp-sass');
    concat = require('gulp-concat');
    connect = require('gulp-connect');

gulp.task('connect',function() {
  connect.server({
    root: './',
    livereload:true
  });
});
gulp.task('sass',function() {
  return gulp.src('sass/index.scss')
    .pipe(sass())
    .pipe(gulp.dest('css'));
});

gulp.task('concat',['sass'],function() {
  return gulp.src(['css/index.css','css/container.css','css/reset.css'])
    .pipe(concat('main.css'))
    .pipe(gulp.dest('dist/css'))
    .pipe(connect.reload());
});
gulp.task('html',function() {
  gulp.src('index.html')
      .pipe(connect.reload());
});
gulp.task('js',function() {
  gulp.src('js/carousel.js')
      .pipe(connect.reload());
});
gulp.task('watch', function () {
    gulp.watch('sass/index.scss', ['css']);
    gulp.watch('index.html',['html']);
    gulp.watch('js/carousel.js',['js']);
});
gulp.task('css',['sass','concat']);
gulp.task('server',['connect','watch']);
