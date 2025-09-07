# 📋 Git版本控制规范

## 🔄 工作流程

### 1. 分支策略
- `main` - 主分支，始终保持可部署状态
- `develop` - 开发分支，集成最新功能
- `feature/*` - 功能分支，开发新功能
- `hotfix/*` - 紧急修复分支

### 2. 提交规范
使用 Conventional Commits 格式：

```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

#### 类型说明：
- `feat` - 新功能
- `fix` - 修复bug
- `docs` - 文档更新
- `style` - 代码格式调整
- `refactor` - 重构
- `perf` - 性能优化
- `test` - 测试相关
- `chore` - 构建工具或依赖管理

### 3. 提交消息示例
```bash
feat(cli): 添加新的theme命令支持
fix(responsive): 修复移动端显示问题
docs(readme): 更新项目说明文档
style(css): 优化玉石主题配色
```

## 🏷️ 版本标记

### 语义化版本
- 主版本号.次版本号.修订号 (1.0.0)
- 主版本号：不兼容的API修改
- 次版本号：向下兼容的功能性新增
- 修订号：向下兼容的问题修正

### 标签规范
```bash
# 创建标签
git tag -a v1.0.0 -m "版本1.0.0：初始发布版本"

# 推送标签
git push origin v1.0.0
```

## 📝 开发流程

### 1. 开始新功能
```bash
# 从develop分支创建功能分支
git checkout develop
git pull origin develop
git checkout -b feature/new-feature-name
```

### 2. 完成开发
```bash
# 提交更改
git add .
git commit -m "feat(feature): 完成新功能开发"

# 推送到远程
git push origin feature/new-feature-name

# 创建Pull Request
```

### 3. 代码审查
- 确保代码符合项目规范
- 检查功能完整性
- 测试覆盖率
- 性能影响评估

### 4. 合并到主分支
```bash
# 合并到develop
git checkout develop
git merge --no-ff feature/new-feature-name

# 合并到main
git checkout main
git merge --no-ff develop
```

## 🔧 常用命令

### 状态检查
```bash
git status                    # 查看工作区状态
git log --oneline --graph     # 查看提交历史
git diff                      # 查看未暂存的更改
```

### 撤销操作
```bash
git reset HEAD <file>         # 取消暂存文件
git checkout -- <file>        # 撤销工作区更改
git revert <commit-hash>      # 撤销指定提交
```

### 分支管理
```bash
git branch -a                 # 查看所有分支
git branch -d <branch-name>   # 删除本地分支
git push origin -d <branch-name>  # 删除远程分支
```

## 🚨 注意事项

1. **永远不要直接修改main分支**
2. **每次提交前进行测试**
3. **保持提交信息清晰明确**
4. **及时同步远程分支**
5. **定期清理无用分支**

## 📊 项目历史

### v1.0.0 (2025-09-06)
- ✅ 实现完整的CLI命令系统
- ✅ 玉石主题设计系统
- ✅ 主题切换功能
- ✅ 响应式设计
- ✅ 13个核心命令

---
*最后更新: 2025-09-06*