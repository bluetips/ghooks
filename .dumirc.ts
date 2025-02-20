/**
 * @type import('dumi)
 */
import { defineConfig } from 'dumi';
import menus from './config/menus';
import path from 'path';

export default defineConfig({
  themeConfig: {
    name: 'wang-react-hooks',
    log: 'https://avatars.githubusercontent.com/u/57889636?v=4',
    favicon: 'https://avatars.githubusercontent.com/u/57889636?v=4',
    // v1版本menus
    siderbar: {
      '/': [
        {
          title: '首页',
          path: 'index',
        },
      ],
      '/guide': [
        {
          title: '介绍',
          path: '/guide',
        },
      ],
      '/hooks': menus,
    },
    navbar: [
      {
        title: '指南',
        path: '/guide',
      },
      {
        title: 'Hooks',
        path: '/hooks',
      },
    ],
  },
  alias: {
    encodeHooks: path.resolve(__dirname, '../packages/hooks/src'),
  },
  resolve: {
    // 约定式路由的根目录配置
    atomDirs: [{ type: 'component', dir: 'packages/hooks/src' }],
  },
});
