var gulp = require('gulp');
var shell = require('gulp-shell');
var env = require('gulp-env');

gulp.task('dev', ['dotenv', 'clean'], function() {
    const envVariables = env({
        file: '.env.json'
    });
    return gulp.src('package.json', {read: false})
        .pipe(envVariables)
        .pipe(shell([
            'nodemon src/server/index.js'
        ]));
});