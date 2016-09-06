var gulp = require('gulp');
var shell = require('gulp-shell');
var env = require('gulp-env');

gulp.task('test', ['clean'], function() {
    const envVariables = env({
        vars: {
            NODE_ENV: 'test'
        }
    });
    return gulp.src('package.json', {read: false})
        .pipe(envVariables)
        .pipe(shell([
            'mocha --compilers js:babel-core/register --ui bdd --recursive src/**/*.spec.js'
        ]));
});