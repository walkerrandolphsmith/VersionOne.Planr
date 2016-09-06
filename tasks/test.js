var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task('test', shell.task([
    'cross-env NODE_ENV=test',
    'mocha --compilers js:babel-core/register --ui bdd --recursive src/**/*.spec.js'
]));