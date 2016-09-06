var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task('clean', shell.task([
    'rm -rf dist/',
    'rm -rf public/'
]));