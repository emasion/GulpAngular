/**
 * Created by Davinci28 on 2014-10-18.
 */
'use strict';

var config = require('../config/gulp.config');
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var $$ = $.loadUtils(['colors', 'env', 'log', 'pipeline']);
var _ = require('lodash');

var runSequence = require('run-sequence');

gulp.task('dev', ['install'], function(done) {
  runSequence(
    'clean',
    'lint',
    ['browserify', 'templates', 'styles'],
    'inject',
    done);
});
