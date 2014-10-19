/**
 * Created by Davinci28 on 2014-10-19.
 */
'use strict';

var config = require('../config/gulp.config');
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var $$ = $.loadUtils(['colors', 'env', 'log', 'pipeline']);
var _ = require('lodash');

var wiredep = require('wiredep').stream;
var saveLicense = require('uglify-save-license');

gulp.task('inject', function () {
  return gulp.src(config.paths.src.html)
    .pipe(wiredep({
      directory: BOWER_DIR
    }))
//    .pipe($.preprocess({
//      context: {
//        CORDOVA_PATH: conf.env.cordovaPath,
//        NG_CORDOVA: !_.include(conf.env.tasks, 'build'),
//        MOCKS: conf.env.mocks,
//      }
//    }))
    .pipe(gulp.dest(TMP_DIR))
    .pipe($.size({ title: 'inject' }))
});

