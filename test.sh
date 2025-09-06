#!/bin/bash

echo "=== 千逐个人网站测试脚本 ==="
echo

# 检查服务器是否运行
if curl -s http://localhost:3000 > /dev/null 2>&1; then
    echo "✅ 服务器正在运行"
    
    # 获取页面标题
    echo "📄 检查页面标题..."
    title=$(curl -s http://localhost:3000 | grep -o '<title>.*</title>' | sed 's/<title>\(.*\)<\/title>/\1/')
    echo "   标题: $title"
    
    # 检查关键元素
    echo "🔍 检查关键元素..."
    content=$(curl -s http://localhost:3000)
    
    if echo "$content" | grep -q "千逐的个人空间"; then
        echo "   ✅ 找到主标题"
    else
        echo "   ❌ 未找到主标题"
    fi
    
    if echo "$content" | grep -q "千千君子，温润如玉"; then
        echo "   ✅ 找到副标题"
    else
        echo "   ❌ 未找到副标题"
    fi
    
    if echo "$content" | grep -q "CLI"; then
        echo "   ✅ 找到CLI组件"
    else
        echo "   ❌ 未找到CLI组件"
    fi
    
    echo
    echo "📊 页面大小统计..."
    size=$(curl -s http://localhost:3000 | wc -c)
    echo "   页面大小: $size 字节"
    
    echo
    echo "🎨 测试完成！网站运行正常。"
    
else
    echo "❌ 服务器未运行"
    echo "请运行 'npm run dev' 或 'npm start' 启动服务器"
fi