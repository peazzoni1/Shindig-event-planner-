var gulp = require('gulp');

var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var clean = require('gulp-clean');
var runSequence = require('run-sequence');
var minifyCSS = require('gulp-minify');
var server = require('gulp-server-livereload');

// tasks

gulp.task('clean', function() {
    gulp.src('./dist/*')
      .pipe(clean({force: true}));
});

gulp.task('minify-css', function() {
  var opts = {comments:true,spare:true};
  gulp.src(['./App/**/*.css', '!./bower_components/**'])
    .pipe(minifyCSS(opts))
    .pipe(gulp.dest('./dist/'))
});

gulp.task('minify-js', function() {
  gulp.src(['./App/**/*.js', '!./bower_components/**'])
    .pipe(uglify({

    }))
    .pipe(gulp.dest('./dist/'))
});

gulp.task('copy-bower-components', function () {
  gulp.src('./bower_components/**')
    .pipe(gulp.dest('dist/bower_components'));
});

gulp.task('copy-html-files', function () {
  gulp.src('./App/**/*.html')
    .pipe(gulp.dest('dist/'));
});

gulp.task('server', function() {
  gulp.src('.')
    .pipe(server({
      port: 8080,
      defaultFile: 'index.html',
      open: true
    }));
});

// default task
gulp.task('default',
  ['server']
);
gulp.task('build', function() {
  runSequence(
    ['clean'],
    ['minify-css', 'minify-js', 'copy-html-files', 'copy-bower-components', 'connectDist']
  );
});
