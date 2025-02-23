/**
 * @type import('dumi)
 */
import { defineConfig } from 'dumi';
import path from 'path';

export default defineConfig({
  hash: true,
  favicons: ['/short-logo.png'],
  themeConfig: {
    name: '',
    logo: '/short-logo.png',
    showLineNum: true,
  },
  alias: {
    encodeHooks: process.cwd() + '/packages/hooks/src/index.ts',
  },
  resolve: {
    // 约定式路由的根目录配置
    atomDirs: [{ type: 'component', dir: 'packages/hooks/src' }],
  },
});
