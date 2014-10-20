/**
 * Created by Davinci28 on 2014-10-19.
 */
'use strict';

var config = require('../config/gulp.config');
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var $$ = $.loadUtils(['colors', 'env', 'log', 'pipeline']);
var _ = require('lodash');


gulp.task('inject', function () {
  var wiredep = require('wiredep').stream;

  return gulp.src(config.paths.src.html)
    .pipe(wiredep({
      directory: BOWER_DIR
    }))
    .pipe(gulp.dest(TMP_DIR))
    .pipe($.size({ title: 'inject' }));
});

