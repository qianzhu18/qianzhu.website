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
  skills      - 能力基石
  projects    - 生态构建
  
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
        skills: 'skills - 能力基石\n用法: skills',
        projects: 'projects - 生态构建\n用法: projects',
        poem: 'poem - 诗词展示\n用法: poem',
      };
      return helpText[command] || `未知命令: ${command}`;
    },

    clear: () => {
      setHistory([]);
      return '';
    },

    welcome: () => {
      const messages = [
        '千逐 (Qian Zhu)',
        '计算机科学 | 生态构建者 | Vibe Coding 实践者',
        '',
        '欢迎来到千逐的命令行空间。',
        '从第一性原理到行动涌现，寻找“拱火”与真实连接。',
        '',
        '输入 help 查看可用命令。'
      ];
      return messages.join('\n');
    },

    whoami: () => {
      const messages = [
        '千逐 (Qianzhu)',
        '',
        '身份：计算机科学 | 生态构建者 | Vibe Coding 实践者',
        '',
        '核心理念：',
        '• 第一性原理 + 奥卡姆剃刀：用本质简化系统',
        '• 反脆弱：在不确定性中成长',
        '• 涌现智慧：在行动现场寻找答案',
        '• 真实链接：让认知盈余变为高信噪比输出',
        '',
        '标签：#VibeCoding #全栈实践 #认知生态 #拱火'
      ];
      return messages.join('\n');
    },

    about: () => {
      const messages = [
        '关于千逐',
        '',
        '过去，我热衷于用“第一性原理”构建静态的认知大厦；',
        '现在，更专注在具体行动中寻找“涌现”的智慧。',
        '',
        '我信奉奥卡姆剃刀与反脆弱，但不再停留在认知闭环。',
        '从“长理分浪”的认知基石，到“洋来社”的行动实验，',
        '正在探索如何打破“输入肥胖症”，把认知盈余转化为真实连接与输出。',
        '',
        '目标：构建反内耗、高行动力、具情感纽带的成长正反馈生态。',
        '',
        '联系方式：输入 contact 查看详细信息。'
      ];
      return messages.join('\n');
    },

    contact: () => {
      const messages = [
        '联系方式',
        '',
        '📧 Email: qianzhuxue@gmail.com',
        '💬 Wechat: AIGCqianzhu（请备注来意）',
        '🐦 Twitter: https://x.com/Qianzhujh',
        '',
        '寻找“点火者”与“同行人”：',
        '• Vibe Coding / 全栈实践合作',
        '• AI 应用与认知生态探索',
        '• 真实链接与显性输出共创',
        '',
        '不做冷漠的数据包，去成为点火的人。'
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
        '能力基石',
        '',
        '技术哲学：Vibe Coding',
        '• 自然语言即代码，与 AI 共舞的心流体验',
        '• 借助 AI 杠杆打破前后端边界的全栈实践',
        '',
        '从“好玩”到“有用”',
        '• 趣味实验：一批基于 AI 的 Vibe Cases',
        '• 价值交付：迭代为能解决真实问题的服务',
        '',
        '思维与生产力',
        '• 正反馈飞轮：外部拱火 + 显性输出',
        '• 知识内化：Apple 生态 + Obsidian 第二大脑'
      ];
      return messages.join('\n');
    },

    projects: () => {
      const messages = [
        '生态构建',
        '',
        '长理分浪 (基石)',
        '• 定位：让“后浪”在成浪前就令人艳羡的认知成长社群',
        '• 逻辑：成浪前蓄力，跨越物理隔阂，先建认知高地',
        '',
        '洋来社 (行动实验)',
        '• 定位：基于“拱火”哲学的反内耗成长生态',
        '• 逻辑：低摩擦启动 - 外部拱火 - 显性输出',
        '',
        '跨校认知网络',
        '• 定位：连接本校与外部高维认知资源的枢纽',
        '• 逻辑：打破信息壁垒，引入外部活水'
      ];
      return messages.join('\n');
    },

    poem: () => {
      const messages = [
        '千千君子，温润如玉',
        '',
        '技术之路',
        '',
        '千行代码汇成川，',
        '逐梦求知路漫长。',
        '君子怀德如润玉，',
        '温润内敛光华藏。',
        '',
        '---',
        '在代码中寻找意义，',
        '在创造中体悟价值。'
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
