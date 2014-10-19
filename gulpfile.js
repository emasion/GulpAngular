'use strict';

var config = require('./config/gulp.config');
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var $$ = $.loadUtils(['colors', 'env', 'log', 'pipeline']);
var _ = require('lodash');

require('require-dir')('./tasks');
gulp.task('default', ['dev']);
