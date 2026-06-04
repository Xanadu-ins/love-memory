# 轻量级上传方案

## 问题说明
压缩包太大，无法上传。

## 解决方案

### 方案一：使用 GitHub CLI（推荐）

如果你已经安装了 Git，可以直接推送：

1. **初始化 Git**（如果还没有）：
```bash
git init
git add .
git commit -m "Deploy to GitHub Pages"
git branch -M main
git remote add origin https://github.com/Xanadu-ins/love-memory.git
git push -u origin main
```

2. **然后**：
- 进入仓库 Settings → Pages
- Source 选择 "main" 分支
- 点击 "Save"

### 方案二：逐个上传核心文件

只上传必要的文件：

1. **只上传这些文件**（不要文件夹）：
   - index.html
   - assets/index-Cp0Xvgge.js
   - assets/index-DHKLVc9C.css
   - icons.svg
   - favicon.svg

2. **创建文件夹并上传**：
   - 创建 data 文件夹，上传：
     - data/messages.json
     - data/photos.json
     - data/timeline.json
   - 创建 photos 文件夹（先放一张测试图片）
   - 创建 music 文件夹（可选）

### 方案三：创建新轻量仓库

1. **创建新仓库** `love-memory-simple`
2. **只上传 index.html**
3. **手动添加其他文件**通过 "Add file" → "Create new file"

### 方案四：使用其他平台

考虑使用 Netlify 或 Vercel（代码已经在 GitHub）：
1. 访问 https://netlify.com
2. 拖拽 index.html 到首页
3. 网站会自动识别并部署

## 🎯 最快解决方案

推荐使用 **方案一**：
1. 在命令行运行推送命令
2. 等待推送完成
3. 去 GitHub 配置 Pages

这样最快，也不需要大文件上传！
