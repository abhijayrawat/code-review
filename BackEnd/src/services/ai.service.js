import Groq from "groq-sdk";

export async function generateCodeReview(code) {
  if (!process.env.GROQ_API_KEY) {
    throw new Error("GROQ_API_KEY not found in environment");
  }

  const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
  });

  const completion = await groq.chat.completions.create({
    model: "llama-3.1-8b-instant",
    temperature: 0.2,
    messages: [
      {
        role: "system",
        content:
          "You are a senior software engineer. Review the given code, find bugs, and suggest improvements.",
      },
      {
        role: "user",
        content: code,
      },
    ],
  });

  return completion.choices[0].message.content;
}
