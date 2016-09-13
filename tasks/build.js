var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task('build:client', shell.task([
    'webpack -p --config webpack.production.config.js'
]));

gulp.task('build:server', shell.task([
    'webpack -p --config webpack.production.server.config.js'
]));

gulp.task('build', ['clean', 'build:client', 'build:server'], function() {

});