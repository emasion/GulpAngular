/**
 * Created by Davinci28 on 2014-10-19.
 */
'use strict';

var config = require('../config/gulp.config');
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var $$ = $.loadUtils(['colors', 'env', 'log', 'pipeline']);
var _ = require('lodash');

gulp.task('styles', ['css'], function () {
  return gulp.src(config.paths.src.styles)
    .pipe($.plumber())
    .pipe($.rubySass({
      loadPath: '.',
      style: 'expanded'
    }))
    .pipe($.autoprefixer({ browsers: AUTOPREFIXER_BROWSERS }))
    .pipe(gulp.dest(config.paths.dest.styles))
    .pipe($.size({ title: 'styles' }));
});

gulp.task('css', function () {
  return gulp.src(config.paths.src.css)
    .pipe($.plumber())
    .pipe($.autoprefixer({ browsers: AUTOPREFIXER_BROWSERS }))
    .pipe(gulp.dest(config.paths.dest.styles))
    .pipe($.size({ title: 'css' }));
});
