var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create();
var lib = require('bower-files')({
  "overrides":{
    "bootstrap" : {
      "main": [
        "less/bootstrap.less",
        "dist/css/bootstrap.css",
        "dist/js/bootstrap.js"
      ]
    }
  }
});

gulp.task('jsBower', function () {
  return gulp.src(lib.ext('js').files)
    .pipe(concat('vendor.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./build/js'));
});

gulp.task('cssBower', function () {
  return gulp.src(lib.ext('css').files)
    .pipe(concat('vendor.css'))
    .pipe(gulp.dest('./build/css'));
});


gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: "./",
      index: "index.html"
    }
  });
  gulp.watch(['*.js', 'app/*.js'], ['jsBuild']);
  gulp.watch(['*.html'], ['htmlBuild']);
  gulp.watch(['*.css'], ['cssBuild']);
  gulp.watch(['bower.json'], ['bowerBuild']);
});

gulp.task('jsBuild', function(){
  browserSync.reload();
});

gulp.task('htmlBuild', function(){
  browserSync.reload();
});

gulp.task('cssBuild', function(){
  browserSync.reload();
});

gulp.task('bowerBuild', ['jsBower', 'cssBower'], function(){
  browserSync.reload();
});

//setup:
/*
- clone repo
- npm install
- npm install gulp -g
- npm install typescript -g
- apm install atom-typescript
- atom .
- gulp serve
*/
