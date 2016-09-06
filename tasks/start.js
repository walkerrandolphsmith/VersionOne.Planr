var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task('start', ['build'], shell.task([
    'node -r dotenv/config dist/server/server.js'
]));