var gulp = require('gulp');
var mocha = require('gulp-mocha');
var istanbul = require('gulp-istanbul');

gulp.task('pre-test', function () {
    return gulp.src(['src/**/*.js'])
      // Covering files
      .pipe(istanbul())
      // Force `require` to return covered files
      .pipe(istanbul.hookRequire());
  });
  
  gulp.task('test', ['pre-test'], function () {
    return gulp.src(['test/**/*.js'])
      .pipe(mocha({
          timeout: 60000 // 1 minute
      }))
      // Creating the reports after tests ran
      .pipe(istanbul.writeReports({
          reporters: ['html', 'text-summary']
      }))
      // Enforce a coverage of at least 70%
      .pipe(istanbul.enforceThresholds({ thresholds: { global: 70 } }));
  });