import gulp from 'gulp';
import babel from 'gulp-babel';
import ts from 'gulp-typescript';
import { deleteSync } from 'del';

gulp.task('clean', async () => {
  deleteSync('lib/**');
  deleteSync('es/**');
  deleteSync('dist/**');
});

// 打esm包
gulp.task('es', () => {
  const tsProject = ts.createProject('tsconfig.pro.json', {
    module: 'ESNext',
  });
  return tsProject.src().pipe(tsProject()).pipe(babel()).pipe(gulp.dest('es/'));
});

// 根据esm包打commonjs包
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

// 生成d.ts文件
gulp.task('declaration', () => {
  const tsProject = ts.createProject('tsconfig.pro.json', {
    declaration: true,
    emitDeclarationOnly: true,
  });
  return tsProject.src().pipe(tsProject()).pipe(gulp.dest('es/')).pipe(gulp.dest('lib/'));
});

// 生成README文件
gulp.task('copyReadme', () => {
  return gulp.src('../../README.md').pipe(gulp.dest('../../packages/hooks'))
})

export default gulp.series('clean', 'es', 'cjs', 'declaration', 'copyReadme');
