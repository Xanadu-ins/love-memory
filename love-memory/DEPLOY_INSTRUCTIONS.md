# 情侣网站部署教程

## ✅ 已完成步骤

1. ✅ GitHub 仓库已创建：https://github.com/Xanadu-ins/love-memory
2. ✅ 本地项目已初始化
3. ✅ 远程仓库地址已配置

## 🔄 需要你完成：推送代码到 GitHub

### 方法一：使用 GitHub Desktop（推荐）

1. 下载并安装 [GitHub Desktop](https://desktop.github.com/)
2. 登录你的 GitHub 账号
3. 在 GitHub Desktop 中选择 File → Add Local Repository
4. 选择 `C:\Users\AA\Desktop\love-memory` 文件夹
5. 点击 Publish repository
6. 给仓库起名 `love-memory`，点击 Publish repository

### 方法二：使用命令行（需要 GitHub 认证）

打开命令行，输入：

```bash
cd love-memory
git push origin main
```

如果提示需要认证：
- 可能需要输入 GitHub 用户名和密码
- 如果开启了双重验证，需要使用 Personal Access Token
- 生成 Token 的地址：https://github.com/settings/tokens

### 方法三：直接拖拽

1. 打开命令行，进入项目目录：`cd love-memory`
2. 在 GitHub 网页仓库页面，点击 "code" 按钮
3. 选择 "Upload files" 选项卡
4. 将 `love-memory` 文件夹中的所有文件拖拽到上传区域
5. 输入 Commit message："Initial commit"
6. 点击 "Commit changes"

## 🚀 部署到 Vercel

代码推送到 GitHub 后：

1. 访问 https://vercel.com
2. 使用 GitHub 账号登录
3. 点击 "New Project"
4. 选择 `love-memory` 仓库
5. 点击 "Deploy"
6. 等待部署完成（约2-3分钟）

## 🎉 预期结果

部署成功后，你会获得类似这样的网址：
`https://love-memory-xxx.vercel.app`

## 📝 如何修改内容

部署后，可以通过修改以下文件来自定义网站：

### 1. 修改情侣名字
编辑 `public/data/timeline.json`：
```json
{
  "couple": {
    "name1": "星星",
    "name2": "微微",
    "togetherDate": "2026-04"
  }
}
```

### 2. 添加照片
- 将照片文件放入 `public/photos/` 文件夹
- 编辑 `public/data/photos.json` 添加照片信息

### 3. 添加纪念日
编辑 `public/data/timeline.json` 的 `events` 部分

### 4. 添加留言
编辑 `public/data/messages.json`

### 5. 更换背景音乐
将音乐文件放入 `public/music/background.mp3`

### 6. 提交更改
每次修改后，运行：
```bash
git add public/data/*.json
git commit -m "更新内容描述"
git push
```
Vercel 会自动重新部署！

## 📞 需要帮助

如果遇到问题，请告诉我具体的错误信息，我会帮你解决。

## 💡 提示

- 确保将代码推送到 GitHub 后再进行 Vercel 部署
- Vercel 会自动检测到文件变化并重新部署
- 照片建议使用 .jpg 或 .png 格式
- 背景音乐建议使用 .mp3 格式
