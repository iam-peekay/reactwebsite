var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
simplevars = require('postcss-simple-vars'),
nestedcss = require('postcss-nested'),
cssImport = require('postcss-import'),
mixins = require('postcss-mixins'),
hexrgba = require('postcss-hexrgba');

gulp.task('styles', function() {
	return gulp.src('./src/assets/styles/styles.css')
		.pipe(postcss([cssImport, mixins, simplevars, nestedcss, hexrgba, autoprefixer]))
		.on('error', function(errorInfo) {
			console.log(errorInfo.toString());
			this.emit('end');
		})
		.pipe(gulp.dest('./src/temp/styles'));
});
