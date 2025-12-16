import dotenv from "dotenv";
dotenv.config();

import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const res = await groq.chat.completions.create({
  model: "llama-3.1-8b-instant", // ✅ UPDATED
  messages: [
    {
      role: "user",
      content: "Review this JS code:\n\nfunction add(a,b){return a+b}",
    },
  ],
});

console.log(res.choices[0].message.content);
