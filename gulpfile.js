var gulp = require('gulp');
var concat = require('gulp-concat');
var scripts = [
  'src/core.js',
  'src/select.js',
  'src/selectMany.js',
  'src/take.js',
  'src/skip.js',
  'src/first.js',
  'src/last.js',
  'src/union.js',
  'src/intersect.js',
  'src/except.js',
  'src/distinct.js',
  'src/zip.js',
  'src/indexOf.js',
  'src/lastIndexOf.js',
  'src/remove.js',
  'src/removeAll.js',
  'src/orderBy.js',
  'src/orderByDescending.js',
  'src/innerJoin.js',
  'src/groupJoin.js',
  'src/groupBy.js',
  'src/toDictionary.js',
  'src/aggregate.js',
  'src/min.js',
  'src/max.js',
  'src/sum.js',
  'src/where.js',
  'src/any.js',
  'src/all.js',
  'src/takeWhile.js',
  'src/skipWhile.js',
  'src/contains.js',
  'src/forEach.js',
  'src/defaultIfEmpty.js',
  'src/range.js',
];

gulp.task('scripts', function() {
  return gulp.src(scripts)
  .pipe(concat('linq.js'))
  .pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
  gulp.watch(scripts, ['scripts']);
});

gulp.task('default', ['watch', 'scripts']);