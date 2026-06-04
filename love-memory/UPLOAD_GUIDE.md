# GitHub 上传文件指南

## 问题说明
Save 按钮是灰色的，说明还没有选择要上传的文件。

## 解决步骤

### 方法一：逐个上传文件

1. **点击** "choose your files"
2. **按住 Ctrl** 选中以下文件：
   - index.html
   - icons.svg
   - favicon.svg
3. **点击** "Choose selected files"
4. **展开** "Add a folder" 部分
5. **点击** "choose your files" 
6. **选中整个 assets 文件夹**
7. **重复** 上一步，分别上传：
   - data 文件夹
   - photos 文件夹
   - music 文件夹
8. **输入 Commit message**：`Deploy static site`
9. **点击 "Commit changes"**

### 方法二：打包成 ZIP 文件（推荐）

1. **在桌面** 右键点击 `love-memory` 文件夹
2. **选择** "Send to" → "Compressed (zipped) folder"
3. **得到** `love-memory.zip`
4. **回到 GitHub**
5. **点击** "Add file" → "Upload files"
6. **拖拽** `love-memory.zip` 到上传区域
7. **展开** "Add a folder" 部分，删除这个文件夹（因为不需要）
8. **点击** "love-memory.zip" 旁边的 "Extract"
9. **输入 Commit message**：`Deploy static site`
10. **点击 "Commit changes""

### 方法三：使用 GitHub Desktop

1. 下载安装 [GitHub Desktop](https://desktop.github.com/)
2. 登录后，File → Add Local Repository
3. 选择 `C:\Users\AA\Desktop\love-memory`
4. Publish repository
5. 在 Summary 中输入 "Deploy to GitHub Pages"
6. 点击 Publish repository

## 💡 提示

- 确保所有文件和文件夹都被选中
- 如果看不到文件列表，刷新页面
- 如果还是不行，使用方法二（ZIP 文件）

推荐使用方法二，最简单可靠！
