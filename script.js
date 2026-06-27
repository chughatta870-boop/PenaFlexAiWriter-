const response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=YAHAN_GEMINI_KEY_LAGAO", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    contents: [{ parts: [{ text: `You are Pena Flex AI Writer. Tone: ${tone}. Topic: ${topic}` }] }]
  })
});
const data = await response.json();
output.innerText = data.candidates[0].content.parts[0].text;
