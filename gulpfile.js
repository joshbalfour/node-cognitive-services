gulp = require('gulp');
mocha = require('gulp-mocha');

gulp.task('test', function () {
    return gulp.src('test/**/*.js')
            .pipe(mocha())
})