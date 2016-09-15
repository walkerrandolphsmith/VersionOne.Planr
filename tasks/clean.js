var gulp = require('gulp');
var rm = require( 'gulp-rm' );

gulp.task('clean', function() {
    gulp.src( 'dist/**/*', { read: false })
        .pipe(rm());
});