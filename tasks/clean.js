var gulp = require('gulp');
var rm = require( 'gulp-rm' );

gulp.task('clean', function() {
    gulp.src( 'public/**/*', { read: false })
        .pipe(rm());
    gulp.src( 'dist/**/*', { read: false })
        .pipe(rm());
});