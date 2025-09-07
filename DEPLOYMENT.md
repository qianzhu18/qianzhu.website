# Vercel部署指南

## 自动部署 (推荐)

1. **推送到GitHub**
   ```bash
   git add .
   git commit -m "feat: 新功能描述"
   git push origin main
   ```

2. **Vercel配置**
   - 登录 [Vercel Dashboard](https://vercel.com/dashboard)
   - 点击 "New Project"
   - 选择你的GitHub仓库
   - 点击 "Import"

3. **环境变量 (可选)**
   ```bash
   NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
   NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id
   ```

4. **部署完成**
   - Vercel会自动检测Next.js项目
   - 构建完成后会提供预览链接
   - 可以配置自定义域名

## 手动部署

### 1. 本地构建
```bash
npm run build
```

### 2. 导出静态文件 (如果需要)
```bash
npm run export
```

### 3. 部署到Vercel CLI
```bash
# 安装Vercel CLI
npm i -g vercel

# 登录
vercel login

# 部署
vercel --prod
```

## 域名配置

### 自定义域名
1. 在Vercel项目设置中添加域名
2. 配置DNS记录 (通常需要CNAME记录)
3. 等待SSL证书自动生成

### 域名示例
- 主域名: `qianzhu.dev`
- 子域名: `www.qianzhu.dev`

## 监控和分析

### Vercel Analytics
- 在项目设置中启用Analytics
- 查看访问量、性能指标
- 监控错误和用户体验

### 自定义分析
可以集成Google Analytics或其他分析工具：
```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## 故障排除

### 常见问题
1. **构建失败**: 检查依赖和TypeScript错误
2. **部署超时**: 优化构建时间和资源使用
3. **字体加载**: 确保字体文件正确配置
4. **环境变量**: 检查生产环境变量配置

### 日志查看
- Vercel Dashboard -> Functions -> Logs
- 或者使用Vercel CLI: `vercel logs`

## 性能优化

### 图片优化
- 使用Next.js Image组件
- 配置域名和优化参数

### 代码分割
- Next.js自动进行代码分割
- 可以使用dynamic import进一步优化

### 缓存策略
- 配置适当的缓存头
- 利用CDN缓存静态资源

## 安全配置

### 环境变量
- 敏感信息使用环境变量
- 不要在前端代码中暴露密钥

### CSP配置
可以在`next.config.js`中配置Content Security Policy

---

**注意**: 确保在部署前所有功能都在本地测试正常！