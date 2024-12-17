const gulp = require('gulp');
const svgstore = require('gulp-svgstore');
const rename = require('gulp-rename');

gulp.task('sprite', function () {
  return gulp.src('src/@assets/app-amx/images/flags/*.svg')
    .pipe(svgstore({ inlineSvg: true }))
    .pipe(rename('sprite.svg'))
    .pipe(gulp.dest('src/@assets/app-amx/images/flags/'));
});
