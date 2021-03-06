const gulp = require('gulp');
const fs = require('fs');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const uglify = require('gulp-uglify-es').default;
const rename = require('gulp-rename');
const headerComment = require('gulp-header-comment');
const createIndex = require('./utils/createIndex.js');

function distfiles() {
	let header = `
		bci.js v<%= pkg.version %>
		https://github.com/pwstegman/bcijs

		License: <%= pkg.license %>
		Generated <%= moment.utc().format() %>
	`;
	
	return browserify({
		debug: false,
		entries: './browser.js',
		standalone: 'bci'
	})
		.transform('babelify', {
			presets : ['@babel/preset-env'],
			global: true, // Allows files required from node_modules to be transformed as well
			ignore: [/\/node_modules\/(?!app\/)/]
		})
		.bundle()
		.on('error', (...args) => console.log(args))
		.pipe(source('bci.js'))
		.pipe(buffer())
		.pipe(headerComment(header))
		.pipe(gulp.dest('dist'))
		.pipe(rename({ extname: '.min.js' }))
		.pipe(uglify())
		.pipe(headerComment(header))
		.pipe(gulp.dest('dist'));
};

gulp.task('distfiles', distfiles);
