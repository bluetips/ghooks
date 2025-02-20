import gulp from 'gulp';
import babel from 'gulp-babel';
import ts from 'gulp-typescript';
import { deleteSync } from 'del';

gulp.task('clean', async () => {
  deleteSync('lib/**');
  deleteSync('es/**');
  deleteSync('dist/**');
});

gulp.task('es', () => {
  const tsProject = ts.createProject('tsconfig.pro.json', {
    module: 'ESNext',
  });
  return tsProject.src().pipe(tsProject()).pipe(babel()).pipe(gulp.dest('es/'));
});

gulp.task('cjs', () => {
  return gulp
    .src(['./es/**/*.js'])
    .pipe(
      babel({
        configFile: '../../.babelrc',
      }),
    )
    .pipe(gulp.dest('lib/'));
});

export default gulp.series('clean', 'es', 'cjs');
