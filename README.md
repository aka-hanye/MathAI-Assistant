# MathAI-Assistant｜数学 AI 助手

手机浏览器可用的中文数学解题网页，支持文字提问、题目图片上传、分步讲解和 LaTeX 公式显示。

## 功能

- 手机/电脑浏览器直接使用，无需安装 App。
- 支持输入数学题或上传 JPG、PNG、WebP 图片。
- 通过 OpenRouter 的免费模型路由 `openrouter/free` 请求模型。
- 使用 MathJax 排版 LaTeX 公式。
- Markdown 输出经过 DOMPurify 清理。
- API Key 仅保存在当前浏览器会话的 sessionStorage，不写入仓库。

## 开始使用

1. 在 https://openrouter.ai/keys 创建自己的 API Key。
2. 打开网页，粘贴 API Key，点击“临时保存”。
3. 输入题目或上传图片，点击“发送”。

免费模型有调用额度、速率限制，且可用模型会变化；免费不代表不限量，也不保证服务始终可用。图片识别需要路由到支持视觉输入的模型。

## GitHub Pages 部署

1. 打开仓库 Settings → Pages。
2. 在 Build and deployment 选择 Deploy from a branch。
3. Branch 选择 `main`，目录选择 `/ (root)`，点击 Save。
4. 构建完成后访问： https://aka-hanye.github.io/MathAI-Assistant/

## 安全与限制

- 不要把 API Key 写进源码、提交到 GitHub 或分享给他人。
- Key 由用户自行申请；本项目不代存、不代管密钥。
- 模型输出可能出错，重要答案请核对推导。
- 当前版本是静态前端，不包含自托管模型或服务端密钥代理。
