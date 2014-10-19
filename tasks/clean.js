/**
 * Created by Davinci28 on 2014-10-18.
 */
'use strict';

var config = require('../config/gulp.config');
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var $$ = $.loadUtils(['colors', 'env', 'log', 'pipeline']);
var _ = require('lodash');

gulp.task('clean', function () {
  return gulp.src([TMP_DIR, BUILD_DIR], { read: false })
    .pipe($.rimraf());
});
