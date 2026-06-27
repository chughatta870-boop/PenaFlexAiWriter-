export default async function handler(req, res) {
  if (req.method!== 'POST') return res.status(405).end();

  const { topic, tone } = req.body;
  const GEMINI_KEY = process.env.GEMINI_API_KEY; // Vercel se aayegi

  const prompt = `You are Pena Flex, an expert AI Writer. Write in ${tone} tone. Topic: ${topic}`;

  const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_KEY}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] })
  });

  const data = await response.json();
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text || "Kuch nahi mila.";
  res.status(200).json({ text });
}
