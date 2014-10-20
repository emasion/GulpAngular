/**
 * Created by Davinci28 on 2014-10-18.
 */
'use strict';

var conf = require('../config/gulp.config');
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var $$ = $.loadUtils(['colors', 'env', 'log', 'pipeline']);
var _ = require('lodash');

var bower = require('bower');

var env = {
	tasks: _.isEmpty($$.env._) ? ['default'] : $$.env._,
	// gulp --target staging (default development)
	target: $$.env['target'] || 'development',
	// gulp build --exc-sourcemaps (default include)
	sourcemaps: !$$.env['exc-sourcemaps'],
	// gulp --inc-mocks (default exclude)
	mocks: !!$$.env['inc-mocks'],
	// gulp build --release
	release: !!$$.env['release']
};

global.SRC_DIR = 'app';
global.ASSETS_DIR = 'app/assets';
global.BUILD_DIR = 'www';
global.TMP_DIR = '.tmp';
global.PREPROCESS_DIR = '.preprocess';
global.BOWER_DIR = bower.config.directory;

var host = {
	development: 'localhost:3000'
}

global.AUTOPREFIXER_BROWSERS = [
  'chrome >= 30',
  'safari >= 6',
  'ios >= 6',
  'android >= 4'
];

var config = {
	host: host[env.target],
	paths: {
		src: {
			entry: PREPROCESS_DIR + '/scripts/app.js',
			scripts: SRC_DIR + '/scripts/**/*.js',
			images: ASSETS_DIR + '/images/**/*.*',
			styles: ASSETS_DIR + '/styles/**/*.scss',
      css: ASSETS_DIR + '/styles/**/*.css',
			fonts: ASSETS_DIR + '/fonts/**/*.*',
      templates: SRC_DIR + '/templates/**/*.html',
      html: SRC_DIR + '/index.html'
		},
		dest: {
			scripts: TMP_DIR + '/scripts',
			styles: TMP_DIR + '/assets/styles',
			images: BUILD_DIR + '/assets/images',
			fonts: BUILD_DIR + '/assets/fonts'
		}
	},
	filenames: {
		scripts: 'main.js'
	}
};

module.exports = config;
