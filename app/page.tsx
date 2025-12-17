'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import CLI from '@/components/CLI';
import ThemeToggle from '@/components/ThemeToggle';

interface LayoutConfig {
  showCLI: boolean;
  cliPosition: 'bottom' | 'right' | 'fullscreen';
  leftPanelWidth: number;
  showSidebar: boolean;
  contentLayout: 'centered' | 'wide' | 'split';
}

type SectionKey = 'home' | 'about' | 'ecosystem' | 'experience' | 'abilities' | 'contact' | 'cli';

export default function Home() {
  const [layoutConfig, setLayoutConfig] = useState<LayoutConfig>({
    showCLI: true,
    cliPosition: 'bottom',
    leftPanelWidth: 320,
    showSidebar: true,
    contentLayout: 'centered'
  });

  const [activeSection, setActiveSection] = useState<'home' | 'about' | 'ecosystem' | 'experience' | 'abilities' | 'contact' | 'cli'>('home');
  const [isCLIFullscreen, setIsCLIFullscreen] = useState(false);

  // 监听键盘快捷键
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Ctrl/Cmd + K: 聚焦CLI
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setActiveSection('cli');
        setIsCLIFullscreen(true);
      }
      // ESC: 退出全屏CLI
      if (e.key === 'Escape' && isCLIFullscreen) {
        setIsCLIFullscreen(false);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isCLIFullscreen]);

  const sections: Record<SectionKey, { title: string; subtitle: string; description: string }> = {
    home: {
      title: "千逐",
      subtitle: "Qian Zhu",
      description: "计算机科学 | 生态构建者 | Vibe Coding 实践者"
    },
    about: {
      title: "关于我",
      subtitle: "About",
      description: "从第一性原理到行动涌现"
    },
    ecosystem: {
      title: "生态构建",
      subtitle: "Ecosystem",
      description: "长理分浪 · 洋来社 · 跨校认知网络"
    },
    experience: {
      title: "专业履历",
      subtitle: "Experience",
      description: "观猹 & 湖南AGI · 湖南省大学生创新创业园"
    },
    abilities: {
      title: "能力基石", 
      subtitle: "Foundations",
      description: "Vibe Coding 与全栈实践"
    },
    contact: {
      title: "与我链接",
      subtitle: "Connect",
      description: "寻找点火者与同行人"
    },
    cli: {
      title: "命令行",
      subtitle: "Terminal", 
      description: "交互式CLI界面"
    }
  };

  const renderContent = () => {
    if (isCLIFullscreen) {
      return (
        <div className="h-screen flex items-center justify-center p-4" style={{ backgroundColor: 'var(--background)' }}>
          <div className="w-full max-w-4xl">
            <div className="mb-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold chinese-font" style={{ color: 'var(--foreground)' }}>
                命令行终端
              </h2>
              <button 
                onClick={() => setIsCLIFullscreen(false)}
                className="px-4 py-2 rounded-lg text-sm"
                style={{ 
                  backgroundColor: 'var(--muted)',
                  color: 'var(--foreground)'
                }}
              >
                退出全屏 (ESC)
              </button>
            </div>
            <CLI />
          </div>
        </div>
      );
    }

    switch (activeSection) {
      case 'home':
        return (
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
            {/* Hero Section */}
            <div className="hero-section mb-16">
              <div className="relative z-10">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 chinese-font" style={{ color: 'var(--foreground)' }}>
                  千逐 (Qian Zhu)
                </h1>
                <p className="text-xl md:text-2xl lg:text-3xl mb-3 md:mb-4 chinese-font" style={{ color: 'var(--primary)' }}>
                  计算机科学 | 生态构建者 | Vibe Coding 实践者
                </p>
                <div className="space-y-3 mb-6 md:mb-8">
                  <p className="text-base md:text-lg lg:text-xl" style={{ color: 'var(--subtle)' }}>
                    从第一性原理的认知大厦，到在行动中寻找“涌现”的智慧。
                  </p>
                  <p className="text-base md:text-lg lg:text-xl" style={{ color: 'var(--subtle)' }}>
                    探索如何打破“输入肥胖症”，把认知盈余转化为高信噪比的输出与真实的连接。
                  </p>
                  <p className="text-base md:text-lg lg:text-xl" style={{ color: 'var(--subtle)' }}>
                    构建一个反内耗、高行动力、具备情感纽带的成长正反馈生态。
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={() => setActiveSection('about')}
                    className="btn-modern btn-primary"
                  >
                    <span>了解更多</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </button>
                  <button 
                    onClick={() => {
                      setActiveSection('cli');
                      setIsCLIFullscreen(true);
                    }}
                    className="btn-modern btn-secondary"
                  >
                    <span>体验终端</span>
                    <kbd className="ml-2 px-2 py-1 rounded text-xs" style={{ backgroundColor: 'var(--jade-light)', color: 'var(--foreground)' }}>⌘K</kbd>
                  </button>
                </div>
              </div>
            </div>

            {/* 快速导航卡片 */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                { section: 'about', title: '关于我', desc: '从第一性原理到行动涌现', icon: '👤' },
                { section: 'ecosystem', title: '生态构建', desc: '长理分浪 · 洋来社 · 跨校认知网络', icon: '🌊' },
                { section: 'experience', title: '专业履历', desc: '观猹 & 湖南AGI · 创新创业园', icon: '📜' },
                { section: 'abilities', title: '能力基石', desc: 'Vibe Coding · 全栈实践', icon: '⚡' },
                { section: 'contact', title: '与我链接', desc: '寻找点火者与同行人', icon: '🤝' }
              ].map((item) => (
                <div 
                  key={item.section}
                  className="modern-card cursor-pointer floating-card"
                  onClick={() => setActiveSection(item.section as SectionKey)}
                >
                  <div className="text-3xl md:text-4xl mb-3 md:mb-4">{item.icon}</div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3" style={{ color: 'var(--foreground)' }}>
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base" style={{ color: 'var(--subtle)' }}>
                    {item.desc}
                  </p>
                  <div className="mt-4">
                    <span className="badge-modern badge-secondary">
                      查看详情
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'about':
        return (
          <div className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="hero-section inline-block">
                <h2 className="text-4xl font-bold mb-4 chinese-font" style={{ color: 'var(--foreground)' }}>
                  关于我
                </h2>
                <p className="text-xl" style={{ color: 'var(--primary)' }}>
                  计算机科学 | 生态构建者 | Vibe Coding 实践者
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="modern-card space-y-4">
                  <p className="text-lg font-medium" style={{ color: 'var(--foreground)' }}>
                    你好，我是千逐。
                  </p>
                  <p className="text-base leading-relaxed" style={{ color: 'var(--subtle)' }}>
                    一名计算机科学专业的系统构建者。过去，我热衷于用“第一性原理”构建静态的认知大厦；现在，我更致力于在具体的行动中寻找“涌现”的智慧。
                  </p>
                  <p className="text-base leading-relaxed" style={{ color: 'var(--subtle)' }}>
                    我依然信奉奥卡姆剃刀与反脆弱，但我不再满足于作为旁观者的“认知闭环”。从“长理分浪”的认知基石，到“洋来社”的极致行动实验，我正在探索如何打破“输入肥胖症”，将认知盈余转化为高信噪比的输出与真实的连接。
                  </p>
                  <p className="text-base leading-relaxed" style={{ color: 'var(--subtle)' }}>
                    我致力于构建的，是一个反内耗、高行动力、且具备深厚情感纽带的成长正反馈生态。
                  </p>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="modern-card">
                  <h3 className="text-2xl font-semibold mb-6" style={{ color: 'var(--primary)' }}>
                    核心取向
                  </h3>
                  <div className="space-y-4">
                    {[
                      { title: "第一性原理 + 奥卡姆剃刀", desc: "追本溯源，用本质简化系统", color: "var(--primary)" },
                      { title: "反脆弱", desc: "在不确定性中成长，而不是求稳", color: "var(--accent)" },
                      { title: "涌现智慧", desc: "在行动现场寻找答案，避免认知闭环", color: "var(--primary)" },
                      { title: "真实链接", desc: "将认知盈余转化为高信噪比的输出", color: "var(--accent)" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-[var(--muted)] transition-colors">
                        <span className="mt-1 w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: item.color }}></span>
                        <div>
                          <p className="font-medium mb-1" style={{ color: 'var(--foreground)' }}>{item.title}</p>
                          <p className="text-sm" style={{ color: 'var(--subtle)' }}>{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="modern-card">
                  <h3 className="text-2xl font-semibold mb-6" style={{ color: 'var(--primary)' }}>
                    行动实验
                  </h3>
                  <div className="space-y-3">
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--subtle)' }}>
                      长理分浪：认知基石与原点，关注爆发前的蓄力，先构建信任网络与认知高地。
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--subtle)' }}>
                      洋来社：基于“拱火”哲学的反内耗成长生态，追求低摩擦启动与显性输出。
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--subtle)' }}>
                      跨校认知网络：连接本校与外部高维认知资源，为伙伴引入外部活水。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'ecosystem':
        return (
          <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 chinese-font" style={{ color: 'var(--foreground)' }}>
                生态构建
              </h2>
              <p className="text-xl" style={{ color: 'var(--primary)' }}>
                长理分浪 · 洋来社 · 跨校认知网络
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="modern-card">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-semibold" style={{ color: 'var(--foreground)' }}>长理分浪 (ChangLi FenLang)</h3>
                  <span className="badge-modern badge-secondary">基石</span>
                </div>
                <p className="text-sm mb-4" style={{ color: 'var(--subtle)' }}>
                  定位: 脱胎于“浪前”组织，这是一个致力于让“后浪”在成浪之前就令人艳羡的认知成长社群。
                </p>
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-wide font-semibold" style={{ color: 'var(--subtle)' }}>构建逻辑</p>
                  <ul className="space-y-2">
                    {[
                      "成浪之前的蓄力，关注爆发前的积累与信任。",
                      "跨越专业与校区的物理隔阂，先构建价值观同频的认知高地。"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <span className="w-2 h-2 rounded-full mt-1.5" style={{ backgroundColor: 'var(--primary)' }}></span>
                        <span className="text-sm" style={{ color: 'var(--subtle)' }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="modern-card">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-semibold" style={{ color: 'var(--foreground)' }}>洋来社 (Yanglai She)</h3>
                  <span className="badge-modern badge-secondary">行动实验</span>
                </div>
                <p className="text-sm mb-4" style={{ color: 'var(--subtle)' }}>
                  定位: 一个基于“拱火”哲学的反内耗成长生态。
                </p>
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-wide font-semibold" style={{ color: 'var(--subtle)' }}>构建逻辑</p>
                  <ul className="space-y-2">
                    {[
                      "打破完美主义：低门槛的投名状机制，筛选柔韧心态与执行力的破局者。",
                      "正反馈飞轮：低摩擦启动 - 外部强力拱火 - 显性化输出的闭环。"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <span className="w-2 h-2 rounded-full mt-1.5" style={{ backgroundColor: 'var(--primary)' }}></span>
                        <span className="text-sm" style={{ color: 'var(--subtle)' }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="modern-card md:col-span-2">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-semibold" style={{ color: 'var(--foreground)' }}>跨校认知网络 (Cognitive Network)</h3>
                  <span className="badge-modern badge-secondary">连接枢纽</span>
                </div>
                <p className="text-sm mb-4" style={{ color: 'var(--subtle)' }}>
                  定位: 连接本校与外部高维认知资源的枢纽。
                </p>
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-wide font-semibold" style={{ color: 'var(--subtle)' }}>构建逻辑</p>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--subtle)' }}>
                    打破高校间的信息壁垒，为生态内的伙伴引入外部活水，保持系统的新鲜度与开放性。
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'experience':
        return (
          <div className="max-w-5xl mx-auto px-4 md:px-8 py-12 md:py-16">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 chinese-font" style={{ color: 'var(--foreground)' }}>
                专业履历
              </h2>
              <p className="text-xl" style={{ color: 'var(--primary)' }}>
                观猹 & 湖南AGI · 湖南省大学生创新创业园
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  title: "观猹 (GuanCha) & 湖南AGI",
                  role: "校园大使 & 核心节点",
                  desc: "作为前沿AI社区在校园的观测站与连接点，注重行业洞察的本地化落地。"
                },
                {
                  title: "湖南省大学生创新创业园",
                  role: "应用技术部 & 社群架构师",
                  desc: "主导初创社群从0到1的体系搭建，验证了AI工具在组织管理中的降本增效能力。"
                }
              ].map((item, index) => (
                <div key={index} className="modern-card">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <p className="text-lg font-semibold" style={{ color: 'var(--foreground)' }}>{item.title}</p>
                      <p className="text-sm" style={{ color: 'var(--primary)' }}>{item.role}</p>
                    </div>
                    <span className="badge-modern badge-secondary">行动落地</span>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--subtle)' }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'abilities':
        return (
          <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 chinese-font" style={{ color: 'var(--foreground)' }}>
                能力基石
              </h2>
              <p className="text-xl" style={{ color: 'var(--primary)' }}>
                Vibe Coding 与全栈实践
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="modern-card">
                <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--foreground)' }}>
                  技术哲学：Vibe Coding
                </h3>
                <div className="space-y-3">
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--subtle)' }}>
                    我不再将编程视为枯燥的语法堆砌，而是一种与 AI 共舞的心流体验。
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Vibe Coding 爱好者：践行“自然语言即代码”，用 AI 快速将灵感具象化为服务。",
                      "全栈开发上手实践者：借助 AI 的杠杆打破前后端边界，享受亲手构建完整产品的过程。"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <span className="w-2 h-2 rounded-full mt-1.5" style={{ backgroundColor: 'var(--primary)' }}></span>
                        <span className="text-sm" style={{ color: 'var(--subtle)' }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="modern-card">
                <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--foreground)' }}>
                  从“好玩”到“有用”
                </h3>
                <div className="space-y-3">
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--subtle)' }}>
                    技术不应止步于 Demo，而应服务于真实需求。
                  </p>
                  <ul className="space-y-2">
                    {[
                      "趣味实验：多个基于 AI 构建的、好玩有趣的 Vibe 案例（Vibe Cases）。",
                      "价值交付：让这些灵感“玩具”迭代为真正能解决问题、提升效率的有用服务。"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <span className="w-2 h-2 rounded-full mt-1.5" style={{ backgroundColor: 'var(--accent)' }}></span>
                        <span className="text-sm" style={{ color: 'var(--subtle)' }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="modern-card md:col-span-2">
                <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--foreground)' }}>
                  思维与生产力
                </h3>
                <ul className="space-y-3">
                  {[
                    { title: "正反馈飞轮", desc: "擅长设计机制，通过“外部拱火”与“显性输出”驱动迭代。" },
                    { title: "知识内化", desc: "以 Apple 生态 + Obsidian 为第二大脑，把知识变为可调用的资产。" }
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="w-2.5 h-2.5 rounded-full mt-1.5" style={{ backgroundColor: 'var(--primary)' }}></span>
                      <div>
                        <p className="font-medium" style={{ color: 'var(--foreground)' }}>{item.title}</p>
                        <p className="text-sm" style={{ color: 'var(--subtle)' }}>{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );

      case 'contact':
        return (
          <div className="max-w-2xl mx-auto px-4 md:px-8 py-12 md:py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 chinese-font" style={{ color: 'var(--foreground)' }}>
                与我链接
              </h2>
              <p className="text-xl" style={{ color: 'var(--primary)' }}>
                寻找点火者与同行人
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="modern-card space-y-3">
                <p className="text-base leading-relaxed" style={{ color: 'var(--subtle)' }}>
                  如果你厌倦做信息的容器，渴望成为观点的射手；如果你相信“拱火”的力量，愿意在真实的连接中对抗虚无，期待与你建立链接。
                </p>
                <p className="text-sm" style={{ color: 'var(--subtle)' }}>
                  无论你是 Vibe Coding 的同路人、全栈开发者，还是正在寻找破局点的行动派，欢迎来聊。
                </p>
              </div>

              {[
                { icon: "📧", label: "Email", value: "qianzhuxue@gmail.com" },
                { icon: "💬", label: "Wechat", value: "AIGCqianzhu（请备注来意）" },
                { icon: "🐦", label: "Twitter", value: "https://x.com/Qianzhujh" }
              ].map((contact, index) => (
                <div key={index} className="modern-card flex items-center space-x-4">
                  <div className="text-2xl">{contact.icon}</div>
                  <div>
                    <p className="text-sm font-medium" style={{ color: 'var(--subtle)' }}>
                      {contact.label}
                    </p>
                    <p className="font-mono text-sm break-all" style={{ color: 'var(--foreground)' }}>
                      {contact.value}
                    </p>
                  </div>
                </div>
              ))}
              
              <div className="modern-card">
                <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--foreground)' }}>
                  合作意向
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--subtle)' }}>
                  寻找志同道合的伙伴，一起探索 AI 与认知的边界，构建有温度、能落地的系统与产品。
                </p>
              </div>

              <div className="text-center text-sm" style={{ color: 'var(--subtle)' }}>
                不做冷漠的数据包，去成为点火的人。
              </div>
            </div>
          </div>
        );

      case 'cli':
        return (
          <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4 chinese-font" style={{ color: 'var(--foreground)' }}>
                命令行终端
              </h2>
              <p className="text-lg" style={{ color: 'var(--subtle)' }}>
                体验交互式的命令行界面
              </p>
            </div>
            <CLI />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* 顶部导航栏 */}
      <header className={`sticky top-0 z-50 backdrop-blur-lg bg-opacity-90 border-b transition-all duration-300 ${
        isCLIFullscreen ? 'hidden' : ''
      }`} 
              style={{ 
                backgroundColor: 'var(--background)',
                borderColor: 'var(--border)'
              }}>
        <div className="flex items-center justify-between px-6 h-16">
          <div className="flex items-center space-x-8">
            <button 
              onClick={() => setActiveSection('home')}
              className="hover:opacity-80 transition-opacity"
            >
              <h1 className="text-xl font-bold chinese-font" style={{ color: 'var(--foreground)' }}>
                千逐
              </h1>
              <p className="text-xs" style={{ color: 'var(--subtle)' }}>
                Qianzhu
              </p>
            </button>
            
            {/* 主导航 - 桌面端 */}
            <nav className="hidden lg:flex space-x-6">
              {(Object.entries(sections) as [SectionKey, { title: string; subtitle: string; description: string }][]).map(([key, section]) => (
                <button
                  key={key}
                  onClick={() => {
                    setActiveSection(key);
                    if (key === 'cli') setIsCLIFullscreen(true);
                  }}
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
            
            {/* 移动端导航菜单 */}
            <div className="lg:hidden">
              <select 
                value={activeSection}
                onChange={(e) => {
                  const newSection = e.target.value as SectionKey;
                  setActiveSection(newSection);
                  if (newSection === 'cli') setIsCLIFullscreen(true);
                }}
                className="px-3 py-2 rounded-lg text-sm"
                style={{ 
                  backgroundColor: 'var(--muted)',
                  color: 'var(--foreground)',
                  border: '1px solid var(--border)'
                }}
              >
                {Object.entries(sections).map(([key, section]) => (
                  <option key={key} value={key}>
                    {section.title}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* 移动端返回按钮 */}
            {activeSection !== 'home' && (
              <button 
                onClick={() => setActiveSection('home')}
                className="lg:hidden flex items-center space-x-1 px-3 py-2 rounded-lg text-sm"
                style={{ 
                  backgroundColor: 'var(--muted)',
                  color: 'var(--foreground)'
                }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
                <span>返回</span>
              </button>
            )}
            
            <ThemeToggle />
            
            {/* CLI快捷按钮 */}
            <button 
              onClick={() => {
                setActiveSection('cli');
                setIsCLIFullscreen(true);
              }}
              className="hidden sm:flex items-center space-x-2 px-3 py-2 rounded-lg text-sm"
              style={{ 
                backgroundColor: 'var(--muted)',
                color: 'var(--foreground)'
              }}
            >
              <span>终端</span>
              <kbd className="text-xs">⌘K</kbd>
            </button>
          </div>
        </div>
      </header>

      {/* 主要内容区域 */}
      <div className="flex-1 flex">
        {/* 左侧边栏 */}
        {layoutConfig.showSidebar && !isCLIFullscreen && (
          <aside className="hidden lg:block w-80 border-r" style={{ borderColor: 'var(--border)' }}>
            <div className="p-6">
              <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider" style={{ color: 'var(--subtle)' }}>
                导航
              </h3>
              <nav className="space-y-2">
                {(Object.entries(sections) as [SectionKey, { title: string; subtitle: string; description: string }][])
                  .map(([key, section]) => (
                  <button
                    key={key}
                    onClick={() => {
                      setActiveSection(key);
                      if (key === 'cli') setIsCLIFullscreen(true);
                    }}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                      activeSection === key 
                        ? 'bg-primary text-white'
                        : 'hover:bg-[var(--muted)]'
                    }`}
                    style={{ 
                      backgroundColor: activeSection === key ? 'var(--primary)' : 'transparent',
                      color: activeSection === key ? 'var(--background)' : 'var(--foreground)'
                    }}
                  >
                    <div className="font-medium">{section.title}</div>
                    <div className="text-xs opacity-75">{section.subtitle}</div>
                  </button>
                ))}
              </nav>
              
              <div className="mt-8 pt-6 border-t" style={{ borderColor: 'var(--border)' }}>
                <h3 className="text-sm font-semibold mb-4 uppercase tracking-wider" style={{ color: 'var(--subtle)' }}>
                  布局设置
                </h3>
                <div className="space-y-3">
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={layoutConfig.showSidebar}
                      onChange={(e) => setLayoutConfig(prev => ({ ...prev, showSidebar: e.target.checked }))}
                      className="rounded"
                    />
                    <span className="text-sm" style={{ color: 'var(--foreground)' }}>显示侧边栏</span>
                  </label>
                  
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={layoutConfig.showCLI}
                      onChange={(e) => setLayoutConfig(prev => ({ ...prev, showCLI: e.target.checked }))}
                      className="rounded"
                    />
                    <span className="text-sm" style={{ color: 'var(--foreground)' }}>显示CLI</span>
                  </label>
                </div>
              </div>
            </div>
          </aside>
        )}

        {/* 主内容区域 */}
        <main className="flex-1 min-h-0">
          {renderContent()}
        </main>
      </div>

      {/* 底部CLI区域 */}
      {layoutConfig.showCLI && !isCLIFullscreen && activeSection !== 'cli' && (
        <div className="border-t" style={{ borderColor: 'var(--border)' }}>
          <div className="max-w-4xl mx-auto p-6">
            <div className="mb-4 flex justify-between items-center">
              <h3 className="text-lg font-semibold" style={{ color: 'var(--foreground)' }}>
                命令行终端
              </h3>
              <div className="flex space-x-2">
                <button 
                  onClick={() => setIsCLIFullscreen(true)}
                  className="px-3 py-1 rounded text-sm border"
                  style={{ 
                    borderColor: 'var(--border)',
                    color: 'var(--foreground)'
                  }}
                >
                  全屏
                </button>
                <button 
                  onClick={() => setLayoutConfig(prev => ({ ...prev, showCLI: false }))}
                  className="px-3 py-1 rounded text-sm"
                  style={{ 
                    backgroundColor: 'var(--accent)',
                    color: 'var(--background)'
                  }}
                >
                  隐藏
                </button>
              </div>
            </div>
            <div className="h-48 md:h-64 lg:h-96 overflow-y-auto overflow-x-hidden">
              <CLI />
            </div>
          </div>
        </div>
      )}

      {/* 页脚 */}
      {!isCLIFullscreen && (
        <footer className="py-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 text-sm" style={{ color: 'var(--subtle)' }}>
              <span>Powered by Next.js</span>
              <Image 
                src="https://youke1.picui.cn/s1/2025/09/08/68beedd78ab1c.jpg" 
                alt="Vercel" 
                width={16}
                height={16}
                className="w-4 h-4"
              />
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}
