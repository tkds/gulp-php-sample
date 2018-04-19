var gulp = require("gulp");
var connect = require('gulp-connect-php');
var browserSync = require("browser-sync");
var plumber = require('gulp-plumber');
var notify  = require('gulp-notify');

gulp.task('connect-sync', function() {
  connect.server({
    port:8001,
  }, function (){
    browserSync({
      proxy: 'localhost:8001'
    });
  });
});

gulp.task('reload', function(){
  browserSync.reload();
});

gulp.task("default",['connect-sync'], function() {
  gulp.watch("**/*.php",["reload"]);
  gulp.watch("**/*.css",["reload"]);
});
