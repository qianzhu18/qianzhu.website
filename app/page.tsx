'use client';

import CLI from '@/components/CLI';
import ThemeToggle from '@/components/ThemeToggle';

export default function Home() {
  return (
    <div className="min-h-screen p-6 lg:p-12">
      {/* 顶部导航 */}
      <header className="flex justify-between items-center mb-12 lg:mb-16">
        <div>
          <h1 className="text-3xl lg:text-4xl font-bold chinese-font" style={{ color: 'var(--foreground)' }}>
            千逐的个人空间
          </h1>
          <p className="text-base lg:text-lg mt-2" style={{ color: 'var(--subtle)' }}>
            千千君子，温润如玉
          </p>
        </div>
        <ThemeToggle />
      </header>

      {/* 主要内容 */}
      <main className="max-w-6xl mx-auto">
        {/* 欢迎区域 */}
        <div className="mb-12 lg:mb-16 text-center slide-up">
          <h2 className="text-2xl lg:text-3xl font-semibold mb-4 chinese-font" style={{ color: 'var(--accent)' }}>
            欢迎来到我的命令行世界
          </h2>
          <p className="text-base lg:text-lg" style={{ color: 'var(--subtle)' }}>
            融合中国古典美学与现代技术的交互式体验
          </p>
        </div>

        {/* CLI 终端 */}
        <div className="mb-12 lg:mb-16">
          <CLI />
        </div>

        {/* 使用提示 */}
        <div className="text-center text-base lg:text-lg" style={{ color: 'var(--subtle)' }}>
          <p className="mb-2">💡 提示：使用 ↑↓ 键浏览命令历史，Tab 键自动补全</p>
          <p>输入 <code className="px-2 py-1 rounded text-sm" style={{ backgroundColor: 'var(--terminal-bg)' }}>help</code> 查看所有可用命令</p>
        </div>
      </main>

      {/* 页脚 */}
      <footer className="mt-20 lg:mt-24 text-center text-base lg:text-lg" style={{ color: 'var(--subtle)' }}>
        <div className="mb-6">
          <p className="chinese-font text-lg lg:text-xl">&ldquo;君子藏器于身，待时而动&rdquo;</p>
          <p className="text-sm lg:text-base mt-1">— 《周易》</p>
        </div>
        <div className="flex justify-center space-x-8 text-sm lg:text-base">
          <span>© 2024 千逐</span>
          <span>Powered by Next.js</span>
          <span>deployed on Vercel</span>
        </div>
      </footer>
    </div>
  );
}
