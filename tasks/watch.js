'use strict';

var config = require('../config/gulp.config');
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var $$ = $.loadUtils(['colors', 'env', 'log', 'pipeline']);
var _ = require('lodash');

gulp.task('watch', function () {
  gulp.watch(config.paths.src.scripts, ['lint', 'browserify']);
  gulp.watch([config.paths.src.styles, config.paths.src.css], ['styles']);
  gulp.watch(config.paths.src.templates, ['templates']);
  gulp.watch(config.paths.src.html, ['inject']);
  gulp.watch('bower.json', ['inject']);
});
