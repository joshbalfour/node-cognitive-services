var gulp = require('gulp');
var mocha = require('gulp-mocha');
var istanbul = require('gulp-istanbul');

gulp.task('pre-test', function () {
    return gulp.src(['lib/*.js', 'api/**/*.js', '!api/index.js'])
      // Covering files
      .pipe(istanbul())
      // Force `require` to return covered files
      .pipe(istanbul.hookRequire());
  });
  
  gulp.task('test', ['pre-test'], function () {
    return gulp.src(['test/*.js'])
      .pipe(mocha({
          timeout: 10000
      }))
      // Creating the reports after tests ran
      .pipe(istanbul.writeReports({
          reporters: ['html', 'text-summary']
      }))
      // Enforce a coverage of at least 90%
      .pipe(istanbul.enforceThresholds({ thresholds: { global: 80 } }));
  });