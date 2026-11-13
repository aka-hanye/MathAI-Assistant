# MathAI-Assistant｜数学 AI 助手

手机浏览器可用的中文数学解题网页，支持文字提问、题目图片上传、分步讲解和 LaTeX 公式显示。

## 功能
- 手机/电脑浏览器直接使用。
- 输入数学题或上传 JPG、PNG、WebP 图片。
- 通过服务端调用 OpenRouter 免费模型路由 `openrouter/free`。
- MathJax 排版 LaTeX 公式，DOMPurify 清理 Markdown。
- 网页不要求用户填写 API Key；密钥只保存在部署平台的服务端环境变量中。

## 部署（推荐 Vercel）
本项目包含 `api/chat.js` 服务端函数，不能只部署到 GitHub Pages。请将 GitHub 仓库导入 Vercel：

1. 登录 https://vercel.com/ ，选择 Add New → Project。
2. Import Git Repository，选择 `aka-hanye/MathAI-Assistant`。
3. Framework Preset 选择 Other，Root Directory 保持默认。
4. 在 Environment Variables 添加：
   - Name：`OPENROUTER_API_KEY`
   - Value：你在 https://openrouter.ai/keys 创建的密钥
5. 点击 Deploy。

部署完成后，打开 Vercel 分配的域名即可使用。服务端密钥不要写入代码或发给任何人。

## GitHub Pages
GitHub Pages 只能托管静态文件，不会运行 `api/chat.js`。因此免用户填写密钥的版本必须部署到支持 Serverless Functions 的平台（如 Vercel），不能继续使用 GitHub Pages 作为完整运行地址。

## 费用与限制
`openrouter/free` 路由会选择当时可用的免费模型，但免费模型有额度、速率和可用性限制；免费不保证不限量或永久可用。模型服务政策可能变化。

## 安全提示
不要将 API Key 提交到 GitHub、写进网页源码或分享给他人。重要数学答案请核对推导。
