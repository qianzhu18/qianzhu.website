#!/bin/bash

echo "🌐 千逐个人网站 - 本地测试访问"
echo "================================="
echo
echo "📱 访问地址:"
echo "   本地访问: http://localhost:3001"
echo "   网络访问: http://192.168.22.45:3001"
echo
echo "🔍 测试页面功能..."
echo

# 测试基本连接
if curl -s http://localhost:3001 > /dev/null; then
    echo "✅ 服务器运行正常"
    
    # 测试页面标题
    title=$(curl -s http://localhost:3001 | grep -o '<title>.*</title>' | sed 's/<title>\(.*\)<\/title>/\1/')
    echo "📄 页面标题: $title"
    
    # 测试关键元素
    content=$(curl -s http://localhost:3001)
    
    if echo "$content" | grep -q "千逐的个人空间"; then
        echo "✅ 主标题加载正常"
    fi
    
    if echo "$content" | grep -q "命令行世界"; then
        echo "✅ 副标题加载正常"
    fi
    
    if echo "$content" | grep -q "CLI"; then
        echo "✅ CLI组件加载正常"
    fi
    
    echo
    echo "🎨 特色功能:"
    echo "   • 14个CLI命令系统"
    echo "   • 玉石主题设计"
    echo "   • 主题切换功能"
    echo "   • 响应式设计"
    echo "   • 命令历史记录"
    echo "   • 自动补全功能"
    echo
    echo "💡 使用提示:"
    echo "   1. 在浏览器中打开 http://localhost:3001"
    echo "   2. 在终端中输入命令进行交互"
    echo "   3. 尝试输入 'help' 查看所有命令"
    echo "   4. 使用 ↑↓ 键浏览命令历史"
    echo "   5. 使用 Tab 键自动补全"
    echo
    echo "🌐 如果要从其他设备访问，可以使用:"
    echo "   http://$(hostname -I | awk '{print $1}'):3001"
    echo
    echo "📝 日志文件: dev.log"
    echo "🛑 停止服务器: pkill -f 'next dev'"
    
else
    echo "❌ 服务器连接失败"
    echo "请检查服务器状态: ps aux | grep 'next dev'"
fi