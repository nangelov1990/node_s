const gulp = require('gulp')
const del = require('del')
const uglify = require('gulp-uglify')
const concat = require('gulp-concat')

gulp.task('scripts', function () => {
  del.sync(['build/alljs*'])

  return gulp.src([
    'content/site.js',
    'content/libs/jquery/dist/jquery.js'
  ])
    .pipe(uglify())
    .pipe(concat('sitejs.min.js'))
    .pipe(gulp.dest('build/sitejs.min.js'))
})

gulp.task('css', () => {
  // minify, concat CSS
})

gulp.task('test', () => {
  // run tests
})

gulp.task('deploy', () => {
  // deploy
})

gulp.task('default', ([
    'scripts',
    'css',
    'test',
    'deploy'
]) => {
  // run all tasks
})
