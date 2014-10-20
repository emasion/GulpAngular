/**
 * Created by Davinci28 on 2014-10-20.
 */
'use strict';

var config = require('../config/gulp.config');
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var $$ = $.loadUtils(['colors', 'env', 'log', 'pipeline']);
var _ = require('lodash');

gulp.task('templates', function () {
  return gulp.src(config.paths.src.templates)
    .pipe($.minifyHtml({
      empty: true,
      spare: true,
      quotes: true
    }))
    .pipe($.angularTemplatecache({
      root: 'templates',
      module: 'templates',
      standalone: true
    }))
    // .pipe($.header('module.exports = '))
    .pipe(gulp.dest(config.paths.dest.scripts))
    .pipe($.size({ title: 'templates' }));
});
