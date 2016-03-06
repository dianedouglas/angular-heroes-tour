var gulp = require('gulp');
var browserSync = require('browser-sync').create();

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
