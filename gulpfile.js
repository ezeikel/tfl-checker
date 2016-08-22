var gulp        = require('gulp');

var sass        = require('gulp-ruby-sass');
var connect     = require('gulp-connect');
var browserify  = require('browserify');
var source      = require('vinyl-source-stream');
var browserSync = require('browser-sync').create();
var sourcemaps  = require('gulp-sourcemaps');

gulp.task('sass', function() {
	return sass('./assets/scss/main.scss', {sourcemap: true})
		.on('error', function(err) {
			console.error('Error!', err.message);
		})
		.pipe(sourcemaps.write('./', {
			includeContent: false,
			sourceRoot: './assets/scss'
		}))
		.pipe(browserSync.stream({match: '**/*.css'}))
		.pipe(gulp.dest('./assets/css'));
});

gulp.task('serve', ['sass', 'browserify'], function() {
  browserSync.init({
    server: './'
  });

	gulp.watch("./assets/scss/**/*.scss", ['sass']);
	gulp.watch(['./app/**/**/*.html','./*.html']).on('change', browserSync.reload);
});

gulp.task('js-watch', ['browserify'], function(){
	browserSync.reload();
});

gulp.task('browserify', function() {
	// Grabs the app.js file
    return browserify('./app/app.module.js')
    	// bundles it and creates a file called main.js
        .bundle()
        .pipe(source('app.main.js'))
        // saves it the public/js/ directory
        .pipe(gulp.dest('./app'));
});

gulp.task('watch', function() {
	gulp.watch(['./app/**/*.js','!./app/app.main.js'], ['js-watch']);
});

gulp.task('default', ['serve', 'watch']);
