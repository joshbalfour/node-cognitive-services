var gulp = require('gulp');
var mocha = require('gulp-mocha');
var cover = require('gulp-coverage');

gulp.task('test', () => {
    return gulp.src('./test/**/*.js')
        .pipe(cover.instrument({
            pattern: ['./index.js', './api/**/*.js', './lib/**/*.js'],
        }))
        .pipe(mocha({
            timeout: 15000
        }))
        .pipe(cover.gather())
        .pipe(cover.format([
            { reporter: 'html', outFile: 'coverage.html' },
            { reporter: 'json', outFile: 'coverage.json' }
        ]))
        .pipe(gulp.dest('reports'));
});