# wang-react-hooks

基于 react 封装的自定义 hooks

## 项目初始化

1. 生成 pacakge.json 文件

```bash
pnpm init
```

2. 接入 linter，使用的是 encode-fe-lint，印客学院提供的 lint 工具

```bash
pnpm i -g encode-fe-lint
# 生成linter文件
encode-fe-lint init
```

3. 生成 typescript 配置文件

```bash
npm i -g typescript

npx tsc --init
```

根据需要自定义配置

4. 根据 menorepo 的架构规则，创建文件

- 1. 新建`pnpm-workspace.yaml`文件，定义工作目录 参考https://pnpm.nodejs.cn/pnpm-workspace_yaml
- 2. 新建`packages`文件，作为项目开发根目录
- 3. 在 packages 目录，新建`hooks`项目

5. 新建.gitignore 文件，定义 git 忽略规则
6. git 仓库初始化，提交代码

```bash
git init
git add .
git commit -m "init"
git push
```
