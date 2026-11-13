export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }
  const key = process.env.OPENROUTER_API_KEY;
  if (!key) return res.status(503).json({ error: "服务器尚未配置模型密钥，请联系网站管理员。" });
  try {
    const { messages } = req.body || {};
    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: "缺少题目内容。" });
    }
    const upstream = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + key,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://aka-hanye.github.io/MathAI-Assistant/",
        "X-Title": "MathAI Assistant"
      },
      body: JSON.stringify({
        model: "openrouter/free",
        messages,
        temperature: 0.2
      })
    });
    const data = await upstream.json();
    if (!upstream.ok) {
      return res.status(upstream.status).json({ error: data.error?.message || "模型服务暂时不可用。" });
    }
    return res.status(200).json({ answer: data.choices?.[0]?.message?.content || "" });
  } catch (error) {
    return res.status(500).json({ error: "服务器请求失败，请稍后重试。" });
  }
}
