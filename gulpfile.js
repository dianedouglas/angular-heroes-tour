var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var utilities = require('gulp-util');
var buildProduction = utilities.env.production;
var del = require('del');
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
var shell = require('gulp-shell');
var tslint = require("gulp-tslint");

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

gulp.task('clean', function(){
  return del(['build', 'app/*.js', 'app/*.js.map']);
});

gulp.task('ts', ['clean'], shell.task([
  'tsc'
]));

gulp.task('build', ['ts'], function(){
  // we can use the buildProduction environment variable here later.
  gulp.start('jsBower');
  gulp.start('cssBower');
});
 
gulp.task("tslint", () =>
    gulp.src("source.ts")
        .pipe(tslint())
        .pipe(tslint.report("verbose"))
);

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
