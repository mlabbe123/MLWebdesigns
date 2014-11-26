    // include gulp
var gulp = require('gulp'),
 
    // include plug-ins
    jshint = require('gulp-jshint'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    jade = require('gulp-jade'),

    // paths for src files
    paths = {
        jade: 'templates/**/*.jade',
        sass: 'sass/**/*.scss',
        js: 'js/**/*.js'
    };
 
// jade dev task
gulp.task('jadedev', function() {
  gulp.src(paths.jade)
    .pipe(jade({
        pretty: true
    }))
    .pipe(gulp.dest('../builds/development'));
});

// jade prod task
gulp.task('jadeprod', function() {
  gulp.src(paths.jade)
    .pipe(jade())
    .pipe(gulp.dest('../builds/production'));
});

// JS hint task
gulp.task('jshint', function() {
  gulp.src(paths.js)
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// JS dev task
gulp.task('jsdev', function() {
  gulp.src(paths.js)
    .pipe(gulp.dest('../builds/development/js/'));
});

// JS prod task
gulp.task('jsprod', function() {
  gulp.src(paths.js)
    .pipe(uglify())
    .pipe(gulp.dest('../builds/production/js/'));
});

// Sass dev task
gulp.task('sassdev', function () {
    var config = {};

    config.sourceComments = 'map';

    return gulp.src(paths.sass)
        .pipe(sass(config))
        .pipe(gulp.dest('../builds/development/css'));   
});

// Sass prod dev
gulp.task('sassprod', function () {
    var config = {};

    config.outputStyle = 'compressed';

    return gulp.src(paths.sass)
        .pipe(sass(config))
        .pipe(gulp.dest('../builds/production/css'));   
});

// Rerun the task when a file changes
gulp.task('watch', function() {
    gulp.watch(paths.jade, ['jade']);
    gulp.watch(paths.sass, ['sassdev']);
    gulp.watch(paths.js, ['jsdev']);
});

// start task
gulp.task('start', ['watch' ,'jadedev', 'sassdev', 'jsdev']);

// To prod task
gulp.task('toprod', ['jadeprod', 'sassprod', 'jsprod']);