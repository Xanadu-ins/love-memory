# 爱情记忆网站

一个浪漫的情侣网站，用于存放珍贵回忆、照片和互动内容。

## 功能特点

- **首页** - 显示情侣名字和在一起的天数计数器
- **照片墙** - 瀑布流展示照片，支持分类和点击放大
- **时光线** - 记录重要时刻和纪念日倒计时
- **留言板** - 双方可以写留言互动
- **背景音乐** - 浪漫的背景音乐播放器
- **飘落心形** - 动态飘落的心形动画

## 本地运行

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

## 如何编辑内容

### 1. 修改情侣名字和纪念日

编辑 `public/data/timeline.json` 文件：

```json
{
  "couple": {
    "name1": "你的名字",
    "name2": "TA的名字",
    "togetherDate": "2023-02-14"  // 在一起的日期
  }
}
```

### 2. 添加照片

方法一：将照片放入 `public/photos/` 文件夹，然后编辑 `public/data/photos.json`：

```json
{
  "photos": [
    {
      "id": 1,
      "url": "/photos/your-photo.jpg",
      "title": "照片标题",
      "date": "2024-01-01",
      "category": "日常",
      "description": "照片描述"
    }
  ]
}
```

方法二：使用在线图片链接（如 Unsplash）

### 3. 添加时间线事件

编辑 `public/data/timeline.json`：

```json
{
  "events": [
    {
      "id": 1,
      "date": "2024-01-01",
      "title": "事件标题",
      "description": "事件描述",
      "icon": "heart"  // 可选: heart, gift, plane, star, cake
    }
  ]
}
```

### 4. 添加留言

编辑 `public/data/messages.json`：

```json
{
  "messages": [
    {
      "id": 1,
      "author": "小明",
      "content": "留言内容",
      "date": "2024-01-01",
      "time": "20:30"
    }
  ]
}
```

### 5. 更换背景音乐

将音乐文件放入 `public/music/` 文件夹，命名为 `background.mp3`

## 部署到 Vercel（推荐）

1. 在 GitHub 创建仓库并推送代码
2. 访问 [vercel.com](https://vercel.com)
3. 点击 "New Project" 导入 GitHub 仓库
4. 点击 "Deploy" 完成部署
5. 获得免费的 `.vercel.app` 域名

### Vercel 部署步骤详解

```bash
# 1. 初始化 Git（如果还没有）
git init

# 2. 添加所有文件
git add .

# 3. 提交
git commit -m "Initial commit"

# 4. 在 GitHub 创建新仓库后，推送代码
git remote add origin https://github.com/你的用户名/love-memory.git
git push -u origin main

# 5. 访问 vercel.com，导入仓库，点击 Deploy
```

## 技术栈

- React 18
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React

## 项目结构

```
love-memory/
├── public/
│   ├── photos/           # 照片文件夹
│   ├── music/            # 背景音乐
│   └── data/
│       ├── timeline.json # 时间线和配置
│       ├── photos.json   # 照片数据
│       └── messages.json # 留言数据
├── src/
│   ├── components/       # React 组件
│   ├── App.jsx          # 主应用
│   └── main.jsx         # 入口文件
└── package.json
```

## 自定义配色

编辑 `tailwind.config.js` 可以自定义颜色主题。

---

用爱制作
