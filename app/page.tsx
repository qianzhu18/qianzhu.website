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

export default function Home() {
  const [layoutConfig, setLayoutConfig] = useState<LayoutConfig>({
    showCLI: true,
    cliPosition: 'bottom',
    leftPanelWidth: 320,
    showSidebar: true,
    contentLayout: 'centered'
  });

  const [activeSection, setActiveSection] = useState<'home' | 'about' | 'skills' | 'projects' | 'contact' | 'cli'>('home');
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

  const sections = {
    home: {
      title: "千逐",
      subtitle: "Qianzhu",
      description: "千千君子，温润如玉"
    },
    about: {
      title: "关于我",
      subtitle: "About",
      description: "第一性原理思考者"
    },
    skills: {
      title: "技术能力", 
      subtitle: "Skills",
      description: "全栈开发者"
    },
    projects: {
      title: "系统构建",
      subtitle: "Projects", 
      description: "创造者实践"
    },
    contact: {
      title: "联系我",
      subtitle: "Contact",
      description: "寻找同路人"
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
            {/* Hero Section - 玉石主题 */}
            <div className="hero-section mb-16">
              <div className="relative z-10">
                <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold mb-4 md:mb-6 chinese-font" style={{ color: 'var(--foreground)' }}>
                  千逐
                </h1>
                <p className="text-xl md:text-2xl lg:text-3xl mb-3 md:mb-4 chinese-font" style={{ color: 'var(--primary)' }}>
                  千千君子，温润如玉
                </p>
                <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8" style={{ color: 'var(--subtle)' }}>
                  计算机科学 | 系统构建者 | AI与认知探索者
                </p>
                
                <div className="mb-12 max-w-3xl mx-auto">
                  <p className="text-base md:text-lg" style={{ color: 'var(--foreground)' }}>
                    以第一性原理思考，用奥卡姆剃刀简化，构建反脆弱系统
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
                { section: 'about', title: '关于我', desc: '了解我的背景和理念', icon: '👤' },
                { section: 'skills', title: '技术能力', desc: '查看我的技术栈', icon: '💻' },
                { section: 'projects', title: '项目经历', desc: '探索我的构建实践', icon: '🚀' }
              ].map((item) => (
                <div 
                  key={item.section}
                  className="modern-card cursor-pointer floating-card"
                  onClick={() => setActiveSection(item.section as 'home' | 'about' | 'skills' | 'projects' | 'contact' | 'cli')}
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
            <div className="text-center mb-16">
              <div className="hero-section inline-block">
                <h2 className="text-4xl font-bold mb-4 chinese-font" style={{ color: 'var(--foreground)' }}>
                  关于我
                </h2>
                <p className="text-xl" style={{ color: 'var(--primary)' }}>
                  第一性原理思考者
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="modern-card">
                  <h3 className="text-2xl font-semibold mb-6" style={{ color: 'var(--primary)' }}>
                    思维理念
                  </h3>
                  <div className="space-y-4">
                    {[
                      { title: "第一性原理", desc: "追本溯源，从本质出发", color: "var(--primary)" },
                      { title: "奥卡姆剃刀", desc: "如无必要，勿增实体", color: "var(--accent)" },
                      { title: "反脆弱性", desc: "在不确定性中成长", color: "var(--accent)" },
                      { title: "长期主义", desc: "时间的复利效应", color: "var(--primary)" }
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
                  <h3 className="text-2xl font-semibold mb-6 style={{ color: 'var(--primary)' }}">
                    专业背景
                  </h3>
                  <div className="space-y-4">
                    {[
                      "湖南省大学生创新创业园应用技术部",
                      "湖南AGI & Datawhale校园大使",
                      "跨年级认知社群创始人",
                      "跨校AI生态构建者"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-[var(--muted)] transition-colors">
                        <span className="mt-1 w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: 'var(--accent)' }}></span>
                        <p className="text-base" style={{ color: 'var(--subtle)' }}>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="modern-card">
                  <h3 className="text-2xl font-semibold mb-6 style={{ color: 'var(--primary)' }}">
                    核心能力
                  </h3>
                  <div className="space-y-4">
                    {[
                      { icon: "🍎", title: "Apple生态系统", desc: "深度用户以及工作流设计者" },
                      { icon: "🧠", title: "Obsidian知识管理", desc: "构建个人知识体系" },
                      { icon: "👥", title: "社群运营", desc: "构建学习生态系统" },
                      { icon: "⚡", title: "技术栈整合", desc: "全栈开发与优化" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-[var(--muted)] transition-colors">
                        <div className="text-2xl">{item.icon}</div>
                        <div>
                          <p className="font-medium mb-1" style={{ color: 'var(--foreground)' }}>{item.title}</p>
                          <p className="text-sm" style={{ color: 'var(--subtle)' }}>{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="modern-card">
                  <h3 className="text-2xl font-semibold mb-6 style={{ color: 'var(--primary)' }}">
                    探索方向
                  </h3>
                  <div className="space-y-4">
                    {[
                      { title: "AI与认知科学", desc: "交叉研究与应用", tag: "AI" },
                      { title: "复杂系统", desc: "涌现现象研究", tag: "系统" },
                      { title: "知识管理", desc: "系统设计与优化", tag: "PKM" },
                      { title: "生产力工具", desc: "开发与实践", tag: "工具" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-[var(--muted)] transition-colors">
                        <span className="mt-1 w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: 'var(--primary)' }}></span>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <p className="font-medium" style={{ color: 'var(--foreground)' }}>{item.title}</p>
                            <span className="badge-modern badge-secondary text-xs">{item.tag}</span>
                          </div>
                          <p className="text-sm" style={{ color: 'var(--subtle)' }}>{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'skills':
        return (
          <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 chinese-font" style={{ color: 'var(--foreground)' }}>
                技术能力
              </h2>
              <p className="text-xl" style={{ color: 'var(--primary)' }}>
                全栈开发者
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "前端技术",
                  icon: "🎨",
                  skills: ["Next.js 14", "React & TypeScript", "Tailwind CSS", "响应式设计"]
                },
                {
                  title: "后端技术", 
                  icon: "⚙️",
                  skills: ["Node.js & Express", "数据库设计", "API开发", "容器化部署"]
                },
                {
                  title: "工具生态",
                  icon: "🛠️",
                  skills: ["Apple生态系统", "Obsidian知识管理", "自动化工作流", "AI编程助手"]
                }
              ].map((category, index) => (
                <div key={index} className="modern-card">
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-3">{category.icon}</div>
                    <h3 className="text-lg font-semibold" style={{ color: 'var(--foreground)' }}>
                      {category.title}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--primary)' }}></span>
                        <span className="text-sm" style={{ color: 'var(--subtle)' }}>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        );

      case 'projects':
        return (
          <div className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-16">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 chinese-font" style={{ color: 'var(--foreground)' }}>
                系统构建
              </h2>
              <p className="text-xl" style={{ color: 'var(--primary)' }}>
                创造者实践
              </p>
            </div>
            
            <div className="space-y-8">
              {[
                {
                  title: "跨年级认知社群",
                  description: "构建了一个跨年级的学习社群，促进不同年级学生之间的知识交流与互助。",
                  tags: ["社群运营", "知识分享"],
                  status: "进行中"
                },
                {
                  title: "跨校AI生态", 
                  description: "构建了200+成员的AI学习社群，连接不同学校的AI爱好者，共同学习和成长。",
                  tags: ["AI生态", "社区建设"],
                  status: "已完成"
                },
                {
                  title: "个人知识管理系统",
                  description: "基于Obsidian构建的个人知识管理系统，实现知识的链接化管理和思想孵化。",
                  tags: ["知识管理", "PKM"],
                  status: "持续优化"
                }
              ].map((project, index) => (
                <div key={index} className="modern-card">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold" style={{ color: 'var(--foreground)' }}>
                      {project.title}
                    </h3>
                    <span className="px-2 py-1 rounded text-xs" style={{ 
                      backgroundColor: project.status === "已完成" ? 'var(--accent)' : 'var(--muted)',
                      color: project.status === "已完成" ? 'var(--background)' : 'var(--foreground)'
                    }}>
                      {project.status}
                    </span>
                  </div>
                  <p className="mb-4" style={{ color: 'var(--subtle)' }}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-3 py-1 rounded-full text-xs" style={{ 
                        backgroundColor: 'var(--muted)',
                        color: 'var(--foreground)'
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'contact':
        return (
          <div className="max-w-2xl mx-auto px-4 md:px-8 py-12 md:py-16">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 chinese-font" style={{ color: 'var(--foreground)' }}>
                联系我
              </h2>
              <p className="text-xl" style={{ color: 'var(--primary)' }}>
                寻找同路人
              </p>
            </div>
            
            <div className="space-y-8">
              {[
                { icon: "📧", label: "邮箱", value: "qianzhuxue@gmail.com" },
                { icon: "💬", label: "微信", value: "ZJH2729478858" },
                { icon: "🐦", label: "Twitter", value: "@Qianzhujh" }
              ].map((contact, index) => (
                <div key={index} className="modern-card flex items-center space-x-4">
                  <div className="text-2xl">{contact.icon}</div>
                  <div>
                    <p className="text-sm font-medium" style={{ color: 'var(--subtle)' }}>
                      {contact.label}
                    </p>
                    <p className="font-mono text-sm" style={{ color: 'var(--foreground)' }}>
                      {contact.value}
                    </p>
                  </div>
                </div>
              ))}
              
              {/* 二维码联系方式 */}
              <div className="modern-card">
                <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--foreground)' }}>
                  微信二维码
                </h3>
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-48 h-48 bg-white rounded-lg p-2 border-2" style={{ borderColor: 'var(--border)' }}>
                    <Image 
                      src="https://youke1.picui.cn/s1/2025/09/08/68bea85ed0b44.jpg" 
                      alt="微信二维码" 
                      width={192}
                      height={192}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-sm text-center" style={{ color: 'var(--subtle)' }}>
                    扫码添加微信好友
                  </p>
                </div>
              </div>
              
              <div className="modern-card">
                <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--foreground)' }}>
                  合作意向
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--subtle)' }}>
                  我正在寻找志同道合的伙伴，一起探索AI与认知科学的边界，
                  构建优雅的技术系统，创造有价值的产品。
                  如果你有相似的理念，欢迎联系我！
                </p>
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
              {Object.entries(sections).map(([key, section]) => (
                <button
                  key={key}
                  onClick={() => {
                    setActiveSection(key as 'home' | 'about' | 'skills' | 'projects' | 'contact' | 'cli');
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
                  const newSection = e.target.value as 'home' | 'about' | 'skills' | 'projects' | 'contact' | 'cli';
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
                {Object.entries(sections).map(([key, section]) => (
                  <button
                    key={key}
                    onClick={() => {
                      setActiveSection(key as 'home' | 'about' | 'skills' | 'projects' | 'contact' | 'cli');
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