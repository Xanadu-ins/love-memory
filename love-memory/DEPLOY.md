# 部署到 Vercel 的步骤

## 1. 创建 GitHub 仓库

1. 登录 GitHub (https://github.com)
2. 点击右上角 "+" → "New repository"
3. 输入仓库名称：`love-memory`
4. 选择 Public（免费）
5. 勾选 "Add a README file"
6. 点击 "Create repository"

## 2. 推送代码到 GitHub

```bash
git remote add origin https://github.com/你的用户名/love-memory.git
git push -u origin main
```

## 3. 部署到 Vercel

### 方法一：Vercel 官网部署（推荐）

1. 访问 [vercel.com](https://vercel.com)
2. 点击 "Sign Up" 用 GitHub 账号登录
3. 点击 "New Project"
4. 找到你的 `love-memory` 仓库，点击导入
5. 点击 "Deploy" 按钮
6. 等待部署完成，会获得一个 `.vercel.app` 域名

### 方法二：CLI 部署

```bash
# 1. 安装 Vercel CLI
npm i -g vercel

# 2. 登录
vercel login

# 3. 部署
vercel
```

## 4. 更新内容后的部署

### 修改数据文件后：

1. 修改 `public/data/` 中的 JSON 文件
2. 提交并推送：
```bash
git add public/data/*.json
git commit -m "更新内容"
git push
```

Vercel 会自动重新部署！

## 自定义域名

1. 在 Vercel 项目设置中绑定你的域名
2. 配置 DNS：
   - A 记录：your-domain.com → 76.76.21.21
   - CNAME 记录：www.your-domain.com → cname.vercel-dns.com

## 常见问题

- Q: 图片不显示？
  A: 将图片放在 `public/photos/` 文件夹，使用相对路径 `/photos/xxx.jpg`

- Q: 音乐不播放？
  A: 确保音乐文件是 `.mp3` 格式，放在 `public/music/` 文件夹

- Q: 如何更新情侣名字？
  A: 编辑 `public/data/timeline.json` 中的 `couple` 部分
