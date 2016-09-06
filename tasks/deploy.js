var gulp = require('gulp');
var gutil = require('gulp-util');
var ftp = require('gulp-ftp');
var env = require('gulp-env');

gulp.task('deploy', [], () => {
    const envVariables = env({
        file: '.env.json'
    });

    const ftpCreds = {
        host: process.env.FTP_HOST,
        user: process.env.FTP_USER,
        pass: process.env.FTP_PASSWORD
    };

    console.log(JSON.stringify(ftpCreds, null, ' '));

    gulp.src(['./dist/**', './public/**'])
        .pipe(envVariables)
        .pipe(ftp(ftpCreds))
        .pipe(gutil.noop());
});