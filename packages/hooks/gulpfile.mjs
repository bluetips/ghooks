import commonConfig from '../../gulpfile.mjs';
import gulp from 'gulp';
import fs from 'fs';
import fse from 'fs-extra'; // 文件系统扩展包
import fg from 'fast-glob'; // 快速文件路径检索
import gm from 'gray-matter'; // markdown解析器

export default gulp.series(commonConfig);
