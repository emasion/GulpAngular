/**
 * Created by Davinci28 on 2014-10-18.
 */
'use strict';

var config = require('../config/gulp.config');
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var $$ = $.loadUtils(['colors', 'env', 'log', 'pipeline']);
var _ = require('lodash');

var bower = require('bower');

gulp.task('install', function() {
  return bower.commands.install()
    .on('log', function(data) {
      $$.log('bower', $$.colors.cyan(data.id), data.message);
    });
});
