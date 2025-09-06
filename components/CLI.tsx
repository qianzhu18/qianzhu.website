'use client';

import { useState, useEffect, useRef, useMemo } from 'react';

interface CommandHistory {
  command: string;
  output: string;
  timestamp: Date;
}

interface CLIProps {
  className?: string;
}

export default function CLI({ className = '' }: CLIProps) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandHistory[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [showCursor, setShowCursor] = useState(true);
  
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  // 命令处理函数
  const commands = useMemo(() => ({
    help: (args: string[]) => {
      if (args.length === 0) {
        return `可用命令：
  help        - 显示此帮助信息
  clear       - 清空终端
  welcome     - 显示欢迎信息
  whoami      - 关于我
  about       - 个人简介
  contact     - 联系方式
  theme       - 切换主题 (light/dark)
  skills      - 技术能力
  projects    - 项目展示
  poem        - 诗词展示
  philosophy  - 思维理念
  knowledge   - 知识管理
  ai          - AI探索
  productivity - 生产力系统
  
使用 'help <命令名>' 查看具体命令的帮助信息。`;
      }
      const command = args[0];
      const helpText: Record<string, string> = {
        help: 'help - 显示帮助信息\n用法: help [命令名]',
        clear: 'clear - 清空终端\n用法: clear',
        welcome: 'welcome - 显示欢迎信息\n用法: welcome',
        whoami: 'whoami - 显示个人信息\n用法: whoami',
        about: 'about - 个人简介\n用法: about',
        contact: 'contact - 联系方式\n用法: contact',
        theme: 'theme - 切换主题\n用法: theme [light|dark]',
        skills: 'skills - 技术能力\n用法: skills',
        projects: 'projects - 项目展示\n用法: projects',
      };
      return helpText[command] || `未知命令: ${command}`;
    },

    clear: () => {
      setHistory([]);
      return '';
    },

    welcome: () => {
      const messages = [
        '千千君子，温润如玉',
        '',
        '欢迎来到千逐的个人网站！',
        '',
        '这是一个融合中国古典美学与现代技术的命令行界面。',
        '输入 help 查看所有可用命令，开始探索我的世界。',
        '',
        '"君子藏器于身，待时而动。" - 《周易》'
      ];
      return messages.join('\n');
    },

    whoami: () => {
      const messages = [
        '千逐 (Qianzhu)',
        '',
        '身份：计算机科学 | 系统构建者 | AI与认知探索者',
        '',
        '核心理念：',
        '• 第一性原理思考者',
        '• 奥卡姆剃刀实践者',
        '• 反脆弱性系统构建者',
        '• 长期主义价值创造者',
        '',
        '特色标签：',
        '#Apple生态系统 #Obsidian知识管理 #AI探索 #社群构建 #生产力系统'
      ];
      return messages.join('\n');
    },

    about: () => {
      const messages = [
        '关于千逐',
        '',
        '我是一名系统构建者，专注于通过技术创造优雅的解决方案。',
        '',
        '专业背景：',
        '• 计算机科学基础理论与实践',
        '• Apple生态系统深度用户',
        '• 知识管理与第二大脑构建',
        '• AI技术与认知科学探索',
        '• 社群运营与生态建设',
        '',
        '思维工具：',
        '• 第一性原理 - 追求本质，化繁为简',
        '• 奥卡姆剃刀 - 如无必要，勿增实体',
        '• 反脆弱性 - 在不确定性中成长',
        '• 长期主义 - 持复利效应创造价值',
        '',
        '联系方式：输入 contact 查看详细信息'
      ];
      return messages.join('\n');
    },

    contact: () => {
      const messages = [
        '联系方式',
        '',
        '📧 Email: qianzhuxue@gmail.com',
        '💬 WeChat: ZJH2729478858',
        '🐦 Twitter: @Qianzhujh',
        '',
        '合作意向：',
        '• 技术项目合作',
        '• AI应用开发',
        '• 知识管理系统构建',
        '• 社群运营咨询',
        '• 开源项目贡献',
        '',
        '欢迎同路人联系，一起创造价值！'
      ];
      return messages.join('\n');
    },

    theme: (args: string[]) => {
      const theme = args[0];
      if (!theme) {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        return `当前主题: ${currentTheme}\n用法: theme [light|dark]`;
      }
      
      if (theme === 'light' || theme === 'dark') {
        document.documentElement.setAttribute('data-theme', theme);
        return `主题已切换为: ${theme}`;
      }
      
      return '无效主题，请使用 light 或 dark';
    },

    skills: () => {
      const messages = [
        '技术能力',
        '',
        '前端开发：',
        '• React / Next.js / TypeScript',
        '• Tailwind CSS / 现代CSS',
        '• 响应式设计与用户体验',
        '',
        '后端技术：',
        '• Node.js / Express',
        '• 数据库设计与优化',
        '• API设计与集成',
        '',
        '开发工具：',
        '• Git / GitHub 工作流',
        '• Docker 容器化',
        '• 自动化部署',
        '• 性能优化',
        '',
        '专业领域：',
        '• Apple生态系统 (macOS / iOS)',
        '• Obsidian知识管理',
        '• AI编程与应用',
        '• 生产力系统设计',
        '',
        '软技能：',
        '• 系统思维',
        '• 项目管理',
        '• 团队协作',
        '• 知识分享'
      ];
      return messages.join('\n');
    },

    projects: () => {
      const messages = [
        '项目展示',
        '',
        '跨年级认知社群 (Cognitive Growth Guild)',
        '• 构建跨年级学习交流平台',
        '• 促进认知能力共同提升',
        '• 建立长期学习社群',
        '',
        '跨校AI生态建设',
        '• 200+成员AI社群构建',
        '• 校园AI技术推广',
        '• 人才培养生态',
        '',
        '个人知识管理系统',
        '• 基于Obsidian的第二大脑',
        '• 结构化知识链接',
        '• 思想孵化与输出',
        '',
        '技术博客与分享',
        '• 技术文章撰写',
        '• 开源项目贡献',
        '• 知识经验分享'
      ];
      return messages.join('\n');
    },

    poem: () => {
      const messages = [
        '千千君子，温润如玉',
        '',
        '《玉之心》',
        '',
        '千川汇海纳百川，',
        '逐梦求知路漫漫。',
        '君子怀德如润玉，',
        '温润内敛光华含。',
        '',
        '玉不琢不成器，',
        '人不学不知道。',
        '千锤百炼方成玉，',
        '厚积薄发自逍遥。',
        '',
        '---',
        '古典与现代的对话，',
        '技术与美学的融合，',
        '在代码中寻找诗意，',
        '在逻辑中体悟人生。'
      ];
      return messages.join('\n');
    },

    philosophy: () => {
      const messages = [
        '思维理念',
        '',
        '第一性原理 (First Principles)',
        '• 追求事物的本质和根本',
        '• 打破固有思维框架',
        '• 从基础出发重新构建',
        '• 化繁为简，直指核心',
        '',
        '奥卡姆剃刀 (Occam\'s Razor)',
        '• "如无必要，勿增实体"',
        '• 简约而不简单的哲学',
        '• 消除冗余，保留本质',
        '• 在复杂中寻找简洁之美',
        '',
        '反脆弱性 (Antifragility)',
        '• 在不确定性中成长',
        '• 从混乱中获益的能力',
        '• 建立适应性强的系统',
        '• 将压力转化为动力',
        '',
        '长期主义 (Long-term Thinking)',
        '• 复利效应的忠实信徒',
        '• 延迟满足，厚积薄发',
        '• 构建可持续的价值体系',
        '• 用时间换空间，用积累换突破'
      ];
      return messages.join('\n');
    },

    knowledge: () => {
      const messages = [
        '知识管理',
        '',
        'Obsidian 知识管理哲学',
        '• 第二大脑构建方法',
        '• 双向链接的力量',
        '• 知识图谱的构建',
        '• 思想孵化与输出',
        '',
        '结构化知识库设计',
        '• MOC (Map of Content) 方法',
        '• PARA 项目管理方法',
        '• 知识卡片系统',
        '• 定期回顾与更新',
        '',
        '学习体系构建',
        '• 主动学习与被动学习结合',
        '• 费曼学习法的应用',
        '• 知识内化与外化',
        '• 建立个人知识生态',
        '',
        '工具与工作流',
        '• 信息收集与处理',
        '• 知识整理与分类',
        '• 创造性输出机制',
        '• 持续改进循环'
      ];
      return messages.join('\n');
    },

    ai: () => {
      const messages = [
        'AI 探索',
        '',
        '涌现现象 (Emergence)',
        '• 简单规则产生复杂行为',
        '• 整体大于部分之和',
        '• 自下而上的智慧形成',
        '• 复杂系统的美妙之处',
        '',
        '整体论视角',
        '• 系统思维的重要性',
        '• 相互联接的网络结构',
        '• 动态平衡的艺术',
        '• 多维度分析问题',
        '',
        'AI与认知科学',
        '• 人类智能的奥秘',
        '• 机器学习的边界',
        '• 人机协作的未来',
        '• 意识与智能的探索',
        '',
        '实践与应用',
        '• AI工具的实际应用',
        '• 提升创造力的方法',
        '• 自动化与效率提升',
        '• 保持人类的核心价值'
      ];
      return messages.join('\n');
    },

    productivity: () => {
      const messages = [
        '生产力系统',
        '',
        '个人工作流设计',
        '• GTD 方法的实践',
        '• 时间块管理技术',
        '• 能量管理与任务匹配',
        '• 专注力保护机制',
        '',
        '自动化工具应用',
        '• Zapier / IFTTT 集成',
        '• 脚本化重复任务',
        '• 模板化工作流程',
        '• 智能提醒系统',
        '',
        '高效学习体系',
        '• 刻意练习的方法',
        '• 知识内化的技巧',
        '• 学习路径优化',
        '• 反馈循环建立',
        '',
        '无摩擦创造环境',
        '• 减少决策疲劳',
        '• 优化工作空间',
        '• 建立创作习惯',
        '• 保持心流状态'
      ];
      return messages.join('\n');
    },
  }), []);

  // 处理命令输入
  const handleCommand = (command: string) => {
    const trimmedCommand = command.trim();
    if (!trimmedCommand) return;

    // 添加到命令历史
    setCommandHistory(prev => [...prev, trimmedCommand]);
    setHistoryIndex(-1);

    // 解析命令和参数
    const [cmd, ...args] = trimmedCommand.split(' ');

    // 执行命令
    let output = '';
    if (cmd in commands) {
      output = commands[cmd as keyof typeof commands](args);
    } else {
      output = `命令未找到: ${cmd}\n输入 'help' 查看可用命令。`;
    }

    // 添加到历史记录
    setHistory(prev => [...prev, {
      command: trimmedCommand,
      output,
      timestamp: new Date()
    }]);

    setInput('');
  };

  // 处理键盘事件
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleCommand(input);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex < commandHistory.length - 1 ? historyIndex + 1 : historyIndex;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      // 简单的自动补全
      const availableCommands = Object.keys(commands);
      const matchingCommands = availableCommands.filter(cmd => cmd.startsWith(input));
      if (matchingCommands.length === 1) {
        setInput(matchingCommands[0]);
      }
    }
  };

  // 自动滚动到底部
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history, terminalRef]);

  // 聚焦输入框
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  // 光标闪烁效果
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(!showCursor);
    }, 500);
    return () => clearInterval(interval);
  }, [showCursor]);

  // 初始欢迎信息
  useEffect(() => {
    if (history.length === 0) {
      setTimeout(() => {
        const welcomeOutput = commands.welcome();
        setHistory([{
          command: '',
          output: welcomeOutput,
          timestamp: new Date()
        }]);
      }, 800);
    }
  }, [history, commands]);

  return (
    <div className={`terminal ${className}`} ref={terminalRef}>
      {/* 历史记录 */}
      <div className="mb-4">
        {history.map((item, index) => (
          <div key={index} className="mb-2 fade-in">
            {item.command && (
              <div className="flex items-center mb-1">
                <span className="prompt">$</span>
                <span className="mono-font">{item.command}</span>
              </div>
            )}
            <div className="output whitespace-pre-wrap">{item.output}</div>
          </div>
        ))}
      </div>

      {/* 当前输入行 */}
      <div className="flex items-center">
        <span className="prompt">$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="command-input flex-1"
          placeholder="输入命令..."
          autoFocus
        />
        {showCursor && <span className="cursor" />}
      </div>
    </div>
  );
}