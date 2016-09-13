var gulp = require('gulp');
var shell = require('gulp-shell');
var env = require('gulp-env');

/*gulp.task('build:client', ['dotenv'], function() {
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

gulp.task('build:server', ['dotenv'], function() {
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
});*/

gulp.task('build:client', shell.task([
    'webpack -p --config webpack.production.config.js'
]));

gulp.task('build:server', shell.task([
    'babel src/server -d dist/server',
    'babel src/shared -d dist/shared'
]));

gulp.task('build', ['clean', 'build:client', 'build:server'], function() {

});
