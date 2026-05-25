@AGENTS.md

# Chinatownized 项目规范

## 技术栈

- Next.js 16.2.6 (App Router, Turbopack 默认启用)
- React 19.2.4
- Tailwind CSS 4.3.0 (通过 @tailwindcss/postcss)
- TypeScript 5.x

## 关键约束

### Tailwind CSS v4 source 配置（必须遵守）

Tailwind CSS v4 使用 `@import "tailwindcss"` 时**必须**指定 `source()` 限制扫描范围。

```css
/* ✅ 正确 — 限制扫描到 src/ 目录 */
@import "tailwindcss" source("../");

/* ❌ 错误 — 不指定 source 会扫描整个项目根目录（含 .next/ 和 node_modules/） */
@import "tailwindcss";
```

**原因**：不指定 source 时，Tailwind v4 的 oxide 扫描器默认扫描 `cwd` 下所有文件。
在 dev 模式下，Turbopack 持续向 `.next/dev/cache/` 写入文件，Tailwind 检测到变化后
重新扫描，触发 HMR，Turbopack 再次写入 → 形成无限循环，内存急剧增长直到系统崩溃。

### Turbopack 配置

- Next.js 16 默认使用 Turbopack，无需额外配置
- **不要**手动设置 `turbopack.root`，除非项目使用了 monorepo 或 npm link
- Next.js 会通过 lockfile 自动检测项目根目录

### next.config.ts 最小化原则

只配置项目实际需要的选项，不要添加等同于默认值的冗余配置。

## 开发命令

```bash
npm run dev          # 开发服务器 (0.0.0.0:3600)
npm run build        # 生产构建
npm run start        # 启动生产服务器
npm run lint         # ESLint 检查
```

## 项目结构

```
src/
├── app/             # Next.js App Router 页面
│   ├── globals.css  # 全局样式 + Tailwind 入口
│   ├── layout.tsx   # 根布局
│   ├── page.tsx     # 首页
│   ├── guides/      # 文章页面 (动态路由)
│   └── tools/       # 工具页面
├── components/      # React 组件
├── data/            # 静态数据
├── lib/             # 工具函数
└── types/           # TypeScript 类型定义
```

## 已知陷阱

1. **Tailwind v4 不再使用 tailwind.config.js** — 所有配置通过 CSS 的 `@theme` 完成
2. **PostCSS 插件是 `@tailwindcss/postcss`** — 不是旧版的 `tailwindcss`
3. **修改 globals.css 后务必验证 dev 模式内存是否正常**
4. **删除 .next/ 目录可以解决大多数缓存相关的异常行为**
