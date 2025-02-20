/**
 * @type import('dumi)
 */
import { defineConfig } from 'dumi';

export default defineConfig({
  themeConfig: {
    name: 'wang-react-hooks',
  },
  resolve: {
    // 约定式路由的根目录配置
    atomDirs: [
      { type: 'component', dir: 'packages/hooks/src' },
    ]
  }
});
