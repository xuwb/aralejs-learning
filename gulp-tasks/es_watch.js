var gulp = require('gulp'),
    babel = require('gulp-babel');

gulp.task('es6-watch', function() {
    // babel & jsx
    gulp.watch(['src/**/*.es6']).on('change', (event) => {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...[babel]');
        babelTask(event);
    });
});
var babelTask = (e) => {
    var matchRex = /(src.*)\/.*\.(\w+)/;
    var match = e.path.replace(/\\/g, '/').match( matchRex ),
        file, filePath, extendName;

    if(match.length == 0) {
        console.log('path error');
        return;
    }

    file = match[0];
    filePath = match[1];
    extendName = match[2];

    if(extendName == 'es6')
    {
        gulp.src( file )
        .pipe( babel( { presets: ['es2015'] } ).on('error', (e) => {
            console.error('error', e.message);
        }) )
        .pipe(gulp.dest( filePath ));
    }
};