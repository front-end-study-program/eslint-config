# eslint-config

用于练习 vue3+ts、react+ts 的eslint共享配置文件项目
参考 antfu 大佬的配置，理解 eslint 的配置项和规则

## pnpm workspace([工作空间](https://pnpm.io/zh/workspaces))

  通过 pnpm 工作空间的特性，我们可以在本地链接到对应的包来验证配置是否生效。发布之后 workspace 会自动转换成发布的版本包

  1. 配置 pnpm-workspace.yaml 或者 .npmrc 文件来指定工作空间的目录 <br />
  2. 在 package.json 文件中以 workspace:* 来引用对应的包 <br/>
  3. 通过 pnpm i -w 将包下载在根目录下。<br />
  4. 通过 pnpm i -r --filter <包名> 下载在对应的包目录下
