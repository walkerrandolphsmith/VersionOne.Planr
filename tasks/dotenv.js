var gulp = require('gulp');
var dotenv = require('gulp-dotenv');
var rename = require('gulp-rename');

gulp.task('dotenv', function () {
    return gulp.src('.env')
        .pipe(dotenv())
        .pipe(rename('.env.json'))
        .pipe(gulp.dest('./'));
});