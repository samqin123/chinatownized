@AGENTS.md

# Charming Destinations 项目规范

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

## 内容策略基线

- 第一个重点频道是 `Museums`
- 博物馆内容优先覆盖 `Shanghai` 和 `Beijing`
- `Citywalk` 是第二梯队重点频道，作为强补充内容线持续更新
- 其它频道继续保留，但不抢占博物馆主线
- 面向外籍读者时，优先写高意图内容：值得不值得去、停留多久、是否要预约、是否适合首次来华、能否串联路线
- 博物馆页面要兼顾导游 leads 和广告位收入设计，避免只做纯内容页

## 开发过程同步

- 每次开始修改前，先阅读 `docs/decision-log.md` 和 `docs/progress.md`
- 写文章前，先阅读 `docs/author-pool.md`，根据主题选择合适的虚拟作者
- 每次完成阶段性工作后，更新 `docs/decision-log.md`、`docs/progress.md`，必要时同步 `docs/handoff.md`
- 关键结论必须写入文档，不能只留在聊天里
- 如果策略、频道优先级或实现方案发生变化，优先更新文档再继续开发
- 交接给后续 Claude / Codex 时，以 `docs/handoff.md` 为当前状态摘要
- 每次重要 commit / push 后，追加 `docs/git-log.md`，记录日期、改动范围、修改原因、影响和对应 commit 信息
- `docs/git-log.md` 不是替代 commit message，而是补充可读的过程记录

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
