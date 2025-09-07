# 千逐个人网站 (Qianzhu Personal Website)

一个融合中国古典美学与现代技术的个人网站，具有独特的双界面架构（传统UI + CLI终端界面）。

![Preview](https://img.shields.io/badge/Status-Active-brightgreen) ![Tech Stack](https://img.shields.io/badge/Tech-Next.js%20%7C%20React%20%7C%20TypeScript-blue) ![License](https://img.shields.io/badge/License-MIT-green)

## 🌟 特色功能

- **14个CLI命令**: 完整的命令行交互系统
- **玉石主题设计**: 中国古典美学配色方案
- **主题切换**: 支持明暗主题切换
- **响应式设计**: 完美适配移动端和桌面端
- **现代化UI**: 优雅的卡片式布局和动画效果
- **渐变背景**: 现代化的视觉效果
- **浮动动画**: 增强用户体验的微交互

## 🚀 快速开始

### 安装依赖
```bash
npm install
# 或
pnpm install
```

### 启动开发服务器
```bash
npm run dev
# 或
pnpm dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看网站。

### 构建生产版本
```bash
npm run build
npm start
```

### 运行测试
```bash
npm run lint
./test.sh
```

## 📁 项目结构

```
qianzhu_website/
├── app/                    # Next.js App Router
│   ├── page.tsx           # 主应用页面
│   ├── layout.tsx         # 根布局
│   ├── globals.css        # 全局样式
│   └── fonts/             # 本地字体文件
├── components/             # React组件
│   ├── CLI.tsx            # CLI终端组件
│   ├── ThemeToggle.tsx    # 主题切换组件
│   └── Typewriter.tsx     # 打字机效果组件
├── fonts/                 # 字体文件
│   ├── GeistVF.woff       # Geist Sans字体
│   └── GeistMonoVF.woff   # Geist Mono字体
├── next.config.mjs        # Next.js配置
├── tailwind.config.ts     # Tailwind CSS配置
├── tsconfig.json          # TypeScript配置
└── package.json           # 项目配置
```

## 💻 CLI命令

| 命令 | 描述 | 示例 |
|------|------|------|
| `help` | 显示所有可用命令 | `help` |
| `clear` | 清空终端 | `clear` |
| `welcome` | 显示欢迎信息 | `welcome` |
| `whoami` | 关于我 | `whoami` |
| `about` | 个人简介 | `about` |
| `contact` | 联系方式 | `contact` |
| `theme` | 切换主题 | `theme light` 或 `theme dark` |
| `skills` | 技术能力 | `skills` |
| `projects` | 项目展示 | `projects` |
| `poem` | 诗词展示 | `poem` |
| `philosophy` | 思维理念 | `philosophy` |
| `knowledge` | 知识管理 | `knowledge` |
| `ai` | AI探索 | `ai` |
| `productivity` | 生产力系统 | `productivity` |

### 快捷键
- `⌘K` / `Ctrl+K`: 打开全屏CLI
- `ESC`: 退出全屏CLI
- `↑↓`: 浏览命令历史
- `Tab`: 自动补全命令

## 🛠️ 技术栈

### 前端技术
- **框架**: Next.js 14.2.16 (App Router)
- **语言**: React 18 + TypeScript
- **样式**: Tailwind CSS 3.4.1
- **字体**: Geist Sans/Mono + Noto Serif SC

### 开发工具
- **构建工具**: Next.js内置构建系统
- **代码检查**: ESLint + Next.js配置
- **类型检查**: TypeScript严格模式
- **包管理**: npm/pnpm

### 部署平台
- **生产环境**: Vercel
- **版本控制**: Git + GitHub
- **CI/CD**: GitHub Actions

## 🎨 设计系统

### 色彩方案
- **浅色主题**: 纯净白背景，现代蓝紫色调
- **深色主题**: 深黑背景，柔和的色彩对比
- **渐变效果**: 现代化的渐变背景
- **玉石元素**: 中国古典美学的现代诠释

### 组件库
- **现代化卡片**: 悬浮效果和阴影
- **按钮系统**: 多种样式和状态
- **徽章组件**: 标签和状态显示
- **输入框**: 现代化的表单控件

## 🧠 设计理念

- **温润如玉**: 中国古典美学的现代诠释
- **第一性原理**: 从本质出发的思考方式
- **奥卡姆剃刀**: 简约而不简单的设计
- **反脆弱性**: 在变化中保持稳定
- **长期主义**: 时间的复利效应

## 📋 开发规范

### Git工作流
- 使用 Conventional Commits 规范
- 提交格式: `type(scope): description`
- 保持代码整洁和注释完整
- 每次修改都要创建Git提交

### 代码规范
- TypeScript严格模式
- ESLint规则检查
- 组件化思维
- 响应式设计优先

### 项目管理
- 功能分支开发
- Pull Request审查
- 版本标签管理
- 文档同步更新

## 🔧 部署指南

### Vercel部署
1. 将代码推送到GitHub
2. 在Vercel中导入项目
3. 配置环境变量（如果需要）
4. 自动部署完成

### 本地部署
```bash
npm run build
npm start
```

## 📊 项目统计

- **代码行数**: 2000+ 行
- **组件数量**: 10+ 个React组件
- **CLI命令**: 14个完整命令
- **页面数量**: 6个主要页面
- **响应式断点**: 3个适配尺寸

## 🤝 贡献指南

欢迎提交Issue和Pull Request！

1. Fork本仓库
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'feat: Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 📞 联系方式

- **邮箱**: qianzhuxue@gmail.com
- **微信**: ZJH2729478858
- **Twitter**: @Qianzhujh

## 🙏 致谢

- [Next.js](https://nextjs.org/) - React框架
- [Tailwind CSS](https://tailwindcss.com/) - CSS框架
- [Geist Font](https://vercel.com/font) - 字体设计
- [Vercel](https://vercel.com/) - 部署平台

---

**千千君子，温润如玉** - 融合传统与现代，创造优雅的数字体验
