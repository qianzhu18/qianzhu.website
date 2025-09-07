'use client';

import { useState, useEffect } from 'react';
import CLI from '@/components/CLI';
import ThemeToggle from '@/components/ThemeToggle';

export default function Home() {
  const [activeSection, setActiveSection] = useState<'home' | 'about' | 'skills' | 'projects' | 'contact'>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // 监听滚动事件
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = {
    home: {
      title: "千逐的个人空间",
      subtitle: "千千君子，温润如玉",
      description: "计算机科学 | 系统构建者 | AI与认知探索者"
    },
    about: {
      title: "关于我",
      subtitle: "第一性原理思考者",
      description: "致力于构建优雅的技术系统，探索AI与认知科学的边界"
    },
    skills: {
      title: "技术能力",
      subtitle: "全栈开发者",
      description: "Apple生态系统、容器技术、自动化、AI编程"
    },
    projects: {
      title: "系统构建",
      subtitle: "创造者实践",
      description: "认知社群、AI生态、个人项目"
    },
    contact: {
      title: "联系我",
      subtitle: "寻找同路人",
      description: "技术交流、项目合作、思想碰撞"
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* 顶部导航 */}
      <header className={`sticky top-0 z-50 backdrop-blur-lg bg-opacity-90 border-b transition-all duration-300 ${
        isScrolled ? 'shadow-md' : ''
      }`} 
              style={{ 
                backgroundColor: 'var(--background)',
                borderColor: 'var(--border)'
              }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <div>
                <h1 className="text-xl font-bold chinese-font" style={{ color: 'var(--foreground)' }}>
                  千逐
                </h1>
                <p className="text-xs" style={{ color: 'var(--subtle)' }}>
                  Qianzhu
                </p>
              </div>
              
              {/* 导航菜单 */}
              <nav className="hidden md:flex space-x-6">
                {Object.entries(sections).map(([key, section]) => (
                  <button
                    key={key}
                    onClick={() => setActiveSection(key as 'home' | 'about' | 'skills' | 'projects' | 'contact')}
                    className={`text-sm font-medium transition-all duration-200 relative ${
                      activeSection === key 
                        ? 'text-primary' 
                        : 'hover:text-primary'
                    }`}
                    style={{ 
                      color: activeSection === key ? 'var(--primary)' : 'var(--subtle)'
                    }}
                  >
                    {section.title}
                    {activeSection === key && (
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full transition-all duration-300" 
                            style={{ backgroundColor: 'var(--primary)' }}></span>
                    )}
                  </button>
                ))}
              </nav>
            </div>
            
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              
              {/* 移动端菜单按钮 */}
              <button 
                className="md:hidden p-2 rounded-lg" 
                style={{ backgroundColor: 'var(--muted)' }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* 移动端菜单 */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t" style={{ borderColor: 'var(--border)' }}>
            <div className="px-4 py-2 space-y-1">
              {Object.entries(sections).map(([key, section]) => (
                <button
                  key={key}
                  onClick={() => {
                    setActiveSection(key as 'home' | 'about' | 'skills' | 'projects' | 'contact');
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    activeSection === key 
                      ? 'text-primary' 
                      : 'hover:text-primary'
                  }`}
                  style={{ 
                    color: activeSection === key ? 'var(--primary)' : 'var(--subtle)'
                  }}
                >
                  {section.title}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* 主要内容 */}
      <main className="flex-1">
        {/* Hero 区域 */}
        {activeSection === 'home' && (
          <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* 背景装饰 */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-10 left-10 w-72 h-72 rounded-full" style={{ backgroundColor: 'var(--primary)' }}></div>
              <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full" style={{ backgroundColor: 'var(--accent)' }}></div>
            </div>
            
            <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
              <div className="mb-8">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 chinese-font" style={{ color: 'var(--foreground)' }}>
                  千逐
                </h1>
                <p className="text-2xl md:text-3xl mb-4 chinese-font" style={{ color: 'var(--primary)' }}>
                  千千君子，温润如玉
                </p>
                <p className="text-lg md:text-xl mb-8" style={{ color: 'var(--subtle)' }}>
                  计算机科学 | 系统构建者 | AI与认知探索者
                </p>
              </div>
              
              <div className="space-y-4 mb-12">
                <p className="text-base md:text-lg" style={{ color: 'var(--foreground)' }}>
                  以第一性原理思考，用奥卡姆剃刀简化，构建反脆弱系统
                </p>
                <p className="text-sm md:text-base" style={{ color: 'var(--subtle)' }}>
                  融合中国古典美学与现代技术，创造优雅的数字体验
                </p>
              </div>
              
              {/* 行动按钮 */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <button 
                  onClick={() => setActiveSection('about')}
                  className="modern-button modern-button-primary transform hover:scale-105"
                >
                  了解更多
                </button>
                <button 
                  onClick={() => {
                    const cli = document.querySelector('.cli-terminal');
                    cli?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="modern-button modern-button-secondary transform hover:scale-105"
                >
                  体验终端
                </button>
              </div>
            </div>
          </section>
        )}

        {/* 关于我 */}
        {activeSection === 'about' && (
          <section className="py-20">
            <div className="max-w-4xl mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4 chinese-font" style={{ color: 'var(--foreground)' }}>
                  关于我
                </h2>
                <p className="text-xl" style={{ color: 'var(--primary)' }}>
                  第一性原理思考者
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--foreground)' }}>
                      思维理念
                    </h3>
                    <ul className="space-y-2" style={{ color: 'var(--subtle)' }}>
                      <li>• 第一性原理：追本溯源，从本质出发</li>
                      <li>• 奥卡姆剃刀：如无必要，勿增实体</li>
                      <li>• 反脆弱性：在不确定性中成长</li>
                      <li>• 长期主义：时间的复利效应</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--foreground)' }}>
                      专业背景
                    </h3>
                    <ul className="space-y-2" style={{ color: 'var(--subtle)' }}>
                      <li>• 湖南省大学生创新创业园应用技术部</li>
                      <li>• 湖南AGI & Datawhale校园大使</li>
                      <li>• 跨年级认知社群创始人</li>
                      <li>• 跨校AI生态构建者</li>
                    </ul>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--foreground)' }}>
                      核心能力
                    </h3>
                    <ul className="space-y-2" style={{ color: 'var(--subtle)' }}>
                      <li>• Apple生态系统深度用户</li>
                      <li>• Obsidian知识管理哲学</li>
                      <li>• 社群运营体系构建</li>
                      <li>• 技术栈整合与优化</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--foreground)' }}>
                      探索方向
                    </h3>
                    <ul className="space-y-2" style={{ color: 'var(--subtle)' }}>
                      <li>• AI与认知科学交叉研究</li>
                      <li>• 复杂系统的涌现现象</li>
                      <li>• 知识管理系统设计</li>
                      <li>• 生产力工具开发</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 技能展示 */}
        {activeSection === 'skills' && (
          <section className="py-20">
            <div className="max-w-4xl mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4 chinese-font" style={{ color: 'var(--foreground)' }}>
                  技术能力
                </h2>
                <p className="text-xl" style={{ color: 'var(--primary)' }}>
                  全栈开发者
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="modern-card">
                  <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--foreground)' }}>
                    前端技术
                  </h3>
                  <ul className="space-y-2 text-sm" style={{ color: 'var(--subtle)' }}>
                    <li>• Next.js 14</li>
                    <li>• React & TypeScript</li>
                    <li>• Tailwind CSS</li>
                    <li>• 响应式设计</li>
                  </ul>
                </div>
                
                <div className="modern-card">
                  <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--foreground)' }}>
                    后端技术
                  </h3>
                  <ul className="space-y-2 text-sm" style={{ color: 'var(--subtle)' }}>
                    <li>• Node.js & Express</li>
                    <li>• 数据库设计</li>
                    <li>• API开发</li>
                    <li>• 容器化部署</li>
                  </ul>
                </div>
                
                <div className="modern-card">
                  <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--foreground)' }}>
                    工具生态
                  </h3>
                  <ul className="space-y-2 text-sm" style={{ color: 'var(--subtle)' }}>
                    <li>• Apple生态系统</li>
                    <li>• Obsidian知识管理</li>
                    <li>• 自动化工作流</li>
                    <li>• AI编程助手</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 项目展示 */}
        {activeSection === 'projects' && (
          <section className="py-20">
            <div className="max-w-4xl mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4 chinese-font" style={{ color: 'var(--foreground)' }}>
                  系统构建
                </h2>
                <p className="text-xl" style={{ color: 'var(--primary)' }}>
                  创造者实践
                </p>
              </div>
              
              <div className="space-y-8">
                <div className="modern-card">
                  <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--foreground)' }}>
                    跨年级认知社群
                  </h3>
                  <p className="mb-4" style={{ color: 'var(--subtle)' }}>
                    构建了一个跨年级的学习社群，促进不同年级学生之间的知识交流与互助。
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full text-xs" style={{ 
                      backgroundColor: 'var(--primary)',
                      color: 'var(--background)'
                    }}>
                      社群运营
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs" style={{ 
                      backgroundColor: 'var(--muted)',
                      color: 'var(--foreground)'
                    }}>
                      知识分享
                    </span>
                  </div>
                </div>
                
                <div className="modern-card">
                  <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--foreground)' }}>
                    跨校AI生态
                  </h3>
                  <p className="mb-4" style={{ color: 'var(--subtle)' }}>
                    构建了200+成员的AI学习社群，连接不同学校的AI爱好者，共同学习和成长。
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full text-xs" style={{ 
                      backgroundColor: 'var(--primary)',
                      color: 'var(--background)'
                    }}>
                      AI生态
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs" style={{ 
                      backgroundColor: 'var(--muted)',
                      color: 'var(--foreground)'
                    }}>
                      社区建设
                    </span>
                  </div>
                </div>
                
                <div className="modern-card">
                  <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--foreground)' }}>
                    个人知识管理系统
                  </h3>
                  <p className="mb-4" style={{ color: 'var(--subtle)' }}>
                    基于Obsidian构建的个人知识管理系统，实现知识的链接化管理和思想孵化。
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full text-xs" style={{ 
                      backgroundColor: 'var(--primary)',
                      color: 'var(--background)'
                    }}>
                      知识管理
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs" style={{ 
                      backgroundColor: 'var(--muted)',
                      color: 'var(--foreground)'
                    }}>
                      PKM
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 联系方式 */}
        {activeSection === 'contact' && (
          <section className="py-20">
            <div className="max-w-2xl mx-auto px-4 text-center">
              <div className="mb-16">
                <h2 className="text-4xl font-bold mb-4 chinese-font" style={{ color: 'var(--foreground)' }}>
                  联系我
                </h2>
                <p className="text-xl" style={{ color: 'var(--primary)' }}>
                  寻找同路人
                </p>
              </div>
              
              <div className="space-y-6 mb-12">
                <div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--foreground)' }}>
                    邮箱
                  </h3>
                  <p className="text-sm" style={{ color: 'var(--subtle)' }}>
                    qianzhuxue@gmail.com
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--foreground)' }}>
                    微信
                  </h3>
                  <p className="text-sm" style={{ color: 'var(--subtle)' }}>
                    ZJH2729478858
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--foreground)' }}>
                    Twitter
                  </h3>
                  <p className="text-sm" style={{ color: 'var(--subtle)' }}>
                    @Qianzhujh
                  </p>
                </div>
              </div>
              
              <div className="modern-card">
                <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--foreground)' }}>
                  合作意向
                </h3>
                <p className="text-sm" style={{ color: 'var(--subtle)' }}>
                  我正在寻找志同道合的伙伴，一起探索AI与认知科学的边界，
                  构建优雅的技术系统，创造有价值的产品。
                  如果你有相似的理念，欢迎联系我！
                </p>
              </div>
            </div>
          </section>
        )}

        {/* CLI 终端 - 在所有页面都显示 */}
        <section className="py-20" style={{ backgroundColor: 'var(--muted)' }}>
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 chinese-font" style={{ color: 'var(--foreground)' }}>
                命令行终端
              </h2>
              <p className="text-lg" style={{ color: 'var(--subtle)' }}>
                体验交互式的命令行界面
              </p>
            </div>
            
            <div className="cli-terminal">
              <CLI />
            </div>
            
            <div className="text-center mt-8 text-sm" style={{ color: 'var(--subtle)' }}>
              <p>💡 提示：使用 ↑↓ 键浏览命令历史，Tab 键自动补全</p>
              <p>输入 <code className="px-2 py-1 rounded text-xs" style={{ backgroundColor: 'var(--terminal-bg)' }}>help</code> 查看所有可用命令</p>
            </div>
          </div>
        </section>
      </main>

      {/* 页脚 */}
      <footer className="border-t py-12" style={{ borderColor: 'var(--border)' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="mb-8">
            <p className="chinese-font text-lg mb-2" style={{ color: 'var(--foreground)' }}>
              &ldquo;君子藏器于身，待时而动&rdquo;
            </p>
            <p className="text-sm" style={{ color: 'var(--subtle)' }}>
              — 《周易》
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm" style={{ color: 'var(--subtle)' }}>
            <span>© 2024 千逐</span>
            <span>Powered by Next.js</span>
            <span>Deployed on Vercel</span>
          </div>
        </div>
      </footer>
    </div>
  );
}