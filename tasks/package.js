var gulp = require('gulp');
var env = require('gulp-env');

gulp.task('packagejson', function() {
    gulp.src('package.json')
        .pipe(gulp.dest('./dist'));
});

gulp.task('env', function() {
    gulp.src('.env')
        .pipe(gulp.dest('./dist'));
});

gulp.task('node_modules', function() {
    gulp.src('./node_modules/**/*')
        .pipe(gulp.dest('./dist/node_modules'));
});

gulp.task('package', ['packagejson', 'env', 'node_modules'], function() {

});
