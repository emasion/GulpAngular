/**
 * Created by 쩐율 on 2014-10-17.
 */
'use strict';

var config = require('../config/gulp.config');
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var $$ = $.loadUtils(['colors', 'env', 'log', 'pipeline']);
var _ = require('lodash');

gulp.task('lint', function() {
	return gulp.src(config.paths.src.scripts)
		.pipe($.jshint())
		.pipe($.jshint.reporter('jshint-stylish'))
		.pipe($.jshint.reporter('fail'))
		.on('error', $$.beep)
		.pipe($.size({ title: 'lint' }))
});

gulp.task('preprocess:scripts', function () {
	return gulp.src(config.paths.src.scripts)
		//.pipe($.preprocess({ context: { HOST: config.host, RELEASE: config.env.release }}))
		.pipe($.preprocess())
		//.pipe($.ngAnnotate().on('error', $.debug))
		.pipe(gulp.dest(PREPROCESS_DIR + '/scripts'))
});

gulp.task('browserify', ['preprocess:scripts'], function () {
	return gulp.src(config.paths.src.entry)
		.pipe($.browserify({
			insertGlobals: true
		}))
		.on('error', $$.beep)
		.on('error', $$.log)
		.pipe($.rename(config.filenames.scripts))
		.pipe(gulp.dest(config.paths.dest.scripts))
	//.pipe($.size({ title: 'browserify' }));
});



