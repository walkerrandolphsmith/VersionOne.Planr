var gulp = require('gulp');
var shell = require('gulp-shell');
var env = require('gulp-env');

gulp.task('build:client', function() {
    const envVariables = env({
        file: '.env.json',
        vars: {
            NODE_ENV: 'production'
        }
    });
    return gulp.src('package.json', {read: false})
        .pipe(envVariables)
        .pipe(shell([
            'webpack -p --config webpack.production.config.js'
        ]));
});

gulp.task('build:server', function() {
    const envVariables = env({
        file: '.env.json',
        vars: {
            NODE_ENV: 'production'
        }
    });
    return gulp.src('package.json', {read: false})
        .pipe(envVariables)
        .pipe(shell([
            'webpack -p --config webpack.production.server.config.js'
        ]));
});

gulp.task('build', ['clean', 'build:client', 'build:server'], function() {

});
