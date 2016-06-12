var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('browser-sync', function() {
    var files = ['./**/*.html', './**/.*.css', './**/*.js'];
    browserSync.init({
        files: files,
        server: {
            baseDir: './'
        }
    });
})