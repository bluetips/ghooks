import commonConfig from '../../gulpfile.mjs';
import gulp from 'gulp';
import fs from 'fs';
import fse from 'fs-extra'; // 文件系统扩展包
import fg from 'fast-glob'; // 快速文件路径检索
import gm from 'gray-matter'; // markdown解析器

// 这个文件主要用于生成metadata.json文件,存储项目信息

async function genDesc(mdPath) {
  if (!fs.existsSync(mdPath)) return;
  const mdFile = fs.readFileSync(mdPath, 'utf-8');
  const { content } = gm(mdFile);
  let description =
    (content.replace(/\r\n/g, '\n').match(/# \w+[\s\n]+(.+?)(?:, |\. |\n|\.\n)/m) || [])[1] || '';

  description = description.trim();
  description = description.charAt(0).toLowerCase() + description.slice(1);
  return description;
}
async function getMetaData() {
  const metadata = {
    functions: [],
  };
  const hooks = fg
    .sync('src/use*', {
      onlyDirectories: true, // 只遍历一级目录
    })
    .map((hook) => hook.replace('src/', ''))
    .sort();

  await Promise.allSettled(
    hooks.map(async (hook) => {
      const description = await genDesc(`src/${hook}/index.md`);
      return {
        name: hook,
        description,
      };
    }),
  ).then((res) => {
    metadata.functions = res.map((item) => {
      if (item.status === 'fulfilled') {
        return item.value;
      }
      return null;
    });
  });
  return metadata;
}

gulp.task('metadata', async () => {
  const metadata = await getMetaData();
  await fse.writeJson('metadata.json', metadata, { spaces: 2 });
});
export default gulp.series(commonConfig, 'metadata');
