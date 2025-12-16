import { useState } from "react";
import Editor from "react-simple-code-editor";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

import axios from "axios";
import "./App.css";

function App() {
  const [code, setCode] = useState(`function sum(a, b) {
  return a + b;
}`);

  const [review, setReview] = useState("");
  const [loading, setLoading] = useState(false);

  async function reviewCode() {
    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:3000/api/ai/get-review", // ✅ correct route
        { code },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // ✅ backend returns { review: "..." }
      setReview(response.data.review);
    } catch (error) {
      console.error(error);
      setReview("❌ Failed to fetch code review.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="container">
      {/* LEFT PANEL */}
      <div className="left">
  <div className="editor-wrapper">
    <Editor
      value={code}
      onValueChange={setCode}
      highlight={(code) =>
        Prism.highlight(code, Prism.languages.javascript, "javascript")
      }
      padding={12}
      style={{
        fontFamily: '"Fira Code", monospace',
        fontSize: 15,
        backgroundColor: "#1e1e1e",
        color: "#fff",
        minHeight: "100%",
      }}
    />

    {/* Floating Review Button */}
    <button
      className="floating-review-btn"
      onClick={reviewCode}
      disabled={loading}
    >
      {loading ? "Reviewing…" : "Review"}
    </button>
  </div>
</div>


      {/* RIGHT PANEL */}
      {/* RIGHT PANEL */}
<div
  className="right"
  style={{
    width: "35%",
    padding: "16px",
    overflowY: "auto",
    backgroundColor: "#111827",
    borderLeft: "1px solid #1f2933",
    fontSize: "16px",
    lineHeight: "1.6",
    color: "#e5e7eb",
  }}
>
  {review ? (
    <Markdown
      rehypePlugins={[rehypeHighlight]}
      components={{
        code({ inline, children, ...props }) {
          return inline ? (
            <code
              style={{
                background: "#020617",
                padding: "2px 6px",
                borderRadius: "4px",
                fontFamily: "Fira Code, monospace",
                fontSize: "14px",
              }}
              {...props}
            >
              {children}
            </code>
          ) : (
            <pre
              style={{
                background: "#020617",
                padding: "12px",
                borderRadius: "6px",
                overflowX: "auto",
                fontSize: "14px",
              }}
            >
              <code {...props}>{children}</code>
            </pre>
          );
        },
      }}
    >
      {review}
    </Markdown>
  ) : (
    <p
      style={{
        color: "#9ca3af",
        fontSize: "15px",
      }}
    >
      🧠 AI code review will appear here
    </p>
  )}
</div>

    </main>
  );
}

export default App;
