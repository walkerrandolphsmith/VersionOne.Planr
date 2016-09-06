var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task('dev', ['clean'], shell.task([
    'nodemon -r dotenv/config src/server/index.js'
]));