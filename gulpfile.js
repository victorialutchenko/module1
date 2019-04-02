const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('css', function() {
	return gulp.src('./scss/normalize.css')
	.pipe(gulp.dest('./css'))
});

gulp.task('scss', function() {
	return gulp.src('./scss/style.scss')
	.pipe(sass())
	.pipe(gulp.dest('./css'))
});

gulp.task('default', gulp.series('css', 'scss'));