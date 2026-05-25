# Chinatownized 架构设计文档

## 概述

Chinatownized 是一个面向外国旅行者的中国旅行指南网站，采用报纸/杂志风格设计。
使用 Next.js 16 App Router 构建，静态生成为主，少量客户端交互。

## 技术架构

### 构建工具链

```
Next.js 16 (Turbopack) → PostCSS (@tailwindcss/postcss) → Tailwind CSS v4 → Lightning CSS
```

- **Turbopack**：Next.js 16 默认 bundler，替代 webpack
- **@tailwindcss/postcss**：Tailwind v4 的 PostCSS 集成
- **Lightning CSS**：Tailwind v4 内部使用，处理 CSS 转换和压缩

### 渲染策略

| 页面 | 策略 | 说明 |
|------|------|------|
| `/` | Static (SSG) | 首页，构建时生成 |
| `/guides/[category]` | SSG + generateStaticParams | 分类页 |
| `/guides/[category]/[slug]` | SSG + generateStaticParams | 文章页 |
| `/tools/*` | Static | 工具页面 |
| `/tools/visa-calculator` | Static + Client Component | 含客户端交互 |

### 数据层

当前使用本地 TypeScript 文件作为数据源（`src/data/`），无数据库依赖。
未来可迁移至 CMS 或 MDX 文件。

---

## CSS 架构

### Tailwind CSS v4 配置

入口文件：`src/app/globals.css`

```css
@import "tailwindcss" source("../");

@theme inline {
  /* 自定义设计 token */
}
```

#### source() 指令说明

`source("../")` 相对于 `src/app/globals.css` 解析，指向 `src/` 目录。
这告诉 Tailwind 只扫描 `src/` 下的文件来提取 class 名称。

**为什么必须指定 source：**

Tailwind CSS v4 的自动内容检测机制（oxide scanner）在未指定 source 时，
会扫描项目根目录下的所有文件（等同于 `**/*`）。在开发模式下：

1. Turbopack 的文件系统缓存（默认开启）持续向 `.next/dev/cache/` 写入文件
2. Tailwind 的 PostCSS 插件通过文件监听检测到新文件
3. 触发 CSS 重新编译 → HMR 更新 → Turbopack 写入更多缓存
4. 形成正反馈循环，内存持续增长直到 OOM

指定 `source("../")` 后，扫描范围被限制在 `src/` 目录，
不会受到 `.next/`、`node_modules/` 等目录的干扰。

### 设计 Token

所有颜色、字体、间距等通过 `@theme inline` 定义：

- `--color-primary`: 中国红 (#C41E3A)
- `--color-newsprint`: 报纸底色
- `--color-parchment`: 卡片底色
- `--font-heading`: Playfair Display (衬线)
- `--font-body`: Inter (无衬线)
- `--font-mono`: DM Mono (等宽)

### 自定义 CSS 类

项目使用少量自定义 CSS 类配合 Tailwind 工具类：

- `.card-clip` — 带阴影和边框的卡片
- `.card-soft` — 柔和卡片
- `.ornament-divider` — 装饰性分隔线
- `.dateline` — 日期行样式
- `.article-body` — 文章正文排版
- `.tag-pill` — 标签胶囊
- `.classifieds-box` — 广告位容器

---

## 性能注意事项

### 开发模式

1. **必须指定 Tailwind source 范围** — 见上文
2. **不要手动配置 turbopack.root** — 除非使用 monorepo
3. **遇到异常内存占用时先删除 .next/ 目录**
4. **Turbopack 文件系统缓存默认开启** — 正常情况下加速热更新

### 生产构建

- 所有页面静态生成，无运行时数据获取
- Tailwind 自动 tree-shake 未使用的样式
- Lightning CSS 处理压缩和兼容性

---

## 事故记录

### 2026-05-25: dev 模式内存溢出导致系统宕机

**现象**：`npm run dev` 启动后内存急剧增长，系统卡死

**根因**：
1. `globals.css` 中 `@import "tailwindcss"` 未指定 `source()`
2. Tailwind v4 oxide scanner 扫描整个项目目录（含 `.next/dev/cache/`）
3. Turbopack 缓存写入 → Tailwind 重新扫描 → HMR → 更多缓存 → 无限循环

**修复**：
- `globals.css`: 添加 `source("../")` 限制扫描范围到 `src/`
- `next.config.ts`: 移除冗余的 `turbopack.root: __dirname`
- 删除 `.next/` 缓存目录

**预防措施**：
- CLAUDE.md 中记录此约束
- 任何修改 CSS 入口文件时必须保留 `source()` 指令
- CI/CD 中可添加检查确保 `source()` 存在
