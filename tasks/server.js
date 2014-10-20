'use strict';

var config = require('../config/gulp.config');
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var $$ = $.loadUtils(['colors', 'env', 'log', 'pipeline']);
var _ = require('lodash');

var browserSync = require('browser-sync');
var httpProxy = require('http-proxy');

/* This configuration allow you to configure browser sync to proxy your backend */
var proxyTarget = 'http://server/context/'; // The location of your backend
var proxyApiPrefix = 'api'; // The element in the URL which differentiate between API request and static file request

var proxy = httpProxy.createProxyServer({
  target: proxyTarget
});

function proxyMiddleware(req, res, next) {
  if (req.url.indexOf(proxyApiPrefix) !== -1) {
    proxy.web(req, res);
  } else {
    next();
  }
}

function browserSyncInit(baseDir, files, browser) {
  browser = browser === undefined ? 'default' : browser;

  browserSync.instance = browserSync.init(files, {
    startPath: '/index.html',
    notify: false,
    injectFileTypes: ["css", "png", "jpg", "jpeg", "svg", "gif", "webp"],
    server: {
      baseDir: baseDir,
      middleware: proxyMiddleware
    },
    browser: browser,
    port: config.port
  });
}

gulp.task('serve', ['watch'], function () {
	browserSyncInit([TMP_DIR, SRC_DIR], [
		config.paths.tmp.html,
    config.paths.tmp.scripts,
    config.paths.tmp.styles,
    config.paths.src.vendor
	], 'google chrome')
});
