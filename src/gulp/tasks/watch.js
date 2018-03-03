var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('watch', function() {

	watch('./app/assets/styles/**/*.css', function() {
		gulp.start('cssInject');
	});
});

gulp.task('cssInject', ['styles'], function() {
	return gulp.src('./app/temp/styles/styles.css');
});
