# Nuxt3 Starter

一个功能丰富的 Nuxt 3 项目模板，集成了现代前端开发所需的各类工具和最佳实践。

## 技术栈

- **框架**: [Nuxt 3](https://nuxt.com/) - Vue 3 全栈框架
- **UI 组件**: [@nuxt/ui](https://ui.nuxt.com/) - 基于 Tailwind CSS 的组件库
- **CSS 框架**: [UnoCSS](https://unocss.org/) - 即时原子化 CSS 引擎
- **状态管理**: [Pinia](https://pinia.vuejs.org/) - Vue 官方状态管理库
- **工具库**: [VueUse](https://vueuse.org/) - Vue 组合式函数集合
- **国际化**: [@nuxtjs/i18n](https://i18n.nuxtjs.org/) - 多语言支持
- **PWA**: [@vite-pwa/nuxt](https://vite-pwa.netlify.app/) - 渐进式 Web 应用
- **类型检查**: TypeScript + vue-tsc

## 特性

- ✅ Nuxt 4 兼容模式
- ✅ UnoCSS 原子化 CSS + 多预设支持
- ✅ Naive UI 组件集成
- ✅ Pinia 状态管理 + 持久化
- ✅ VueUse 组合式工具库
- ✅ 多语言支持 (中文/英文)
- ✅ PWA 支持
- ✅ 深色模式切换
- ✅ 内容管理 (Nuxt Content)
- ✅ 自动导入 + 图标系统
- ✅ ESLint + Prettier 代码规范
- ✅ Git hooks (commit lint)
- ✅ 测试支持 (Vitest)
- ✅ 版本标记

## 快速开始

### 环境要求

- Node.js >= 18
- pnpm (推荐)

### 安装

```bash
# 克隆项目
git clone https://github.com/oiij/nuxt3-starter.git

# 安装依赖
pnpm install
```

### 开发

```bash
# 启动开发服务器
pnpm dev

# 带 PWA 支持启动
pnpm dev:pwa
```

开发服务器默认运行在 `http://localhost:5679`

### 构建部署

```bash
# 构建生产版本
pnpm build

# 预览生产构建
pnpm preview

# 启动生产服务器
pnpm start
```

## 项目结构

```
nuxt3-starter/
├── app/
│   ├── assets/          # 静态资源
│   ├── components/      # Vue 组件
│   ├── composables/     # 组合式函数
│   ├── layouts/         # 页面布局
│   ├── locales/         # 国际化文件
│   ├── middleware/       # 路由中间件
│   ├── pages/           # 页面组件
│   ├── plugins/         # 插件
│   ├── stores/          # Pinia 状态
│   ├── utils/           # 工具函数
│   └── app.vue          # 根组件
├── config/              # 配置文件
├── i18n/                # 国际化配置
├── public/              # 公共静态文件
├── server/              # 服务端代码
├── nuxt.config.ts       # Nuxt 配置
├── uno.config.ts        # UnoCSS 配置
└── package.json
```

## 可用脚本

| 命令              | 说明                    |
| ----------------- | ----------------------- |
| `pnpm dev`        | 启动开发服务器          |
| `pnpm dev:pwa`    | 启动带 PWA 的开发服务器 |
| `pnpm build`      | 构建生产版本            |
| `pnpm generate`   | 生成静态站点            |
| `pnpm preview`    | 预览生产构建            |
| `pnpm lint`       | 代码检查                |
| `pnpm lint:fix`   | 自动修复代码问题        |
| `pnpm type:check` | TypeScript 类型检查     |
| `pnpm test`       | 运行测试                |
| `pnpm cz`         | 交互式提交              |
| `pnpm commit`     | 提交代码                |
| `pnpm release`    | 发布版本                |

## 配置说明

### UnoCSS

项目使用 UnoCSS 作为原子化 CSS 引擎，配置文件位于 `uno.config.ts`，支持多种预设：

- Windi CSS 预设
- 图标预设
- 动画预设
- 主题预设

### 国际化

默认语言为简体中文，支持语言：

- `zh-CN` - 简体中文
- `en-US` - English

### PWA

PWA 配置位于 `config/` 目录，支持离线访问和安装到桌面。

## 许可证

[MIT License](LICENSE)

## 作者

**oiij** - [GitHub](https://github.com/oiij)
