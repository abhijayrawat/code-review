# AI Code Review Platform

[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-19-blue.svg)](https://reactjs.org/)
[![Express](https://img.shields.io/badge/Express-4.21-lightgrey.svg)](https://expressjs.com/)
[![Vite](https://img.shields.io/badge/Vite-6.1-purple.svg)](https://vitejs.dev/)
[![Groq](https://img.shields.io/badge/Groq-LLaMA-orange.svg)](https://groq.com/)

A full-stack web application that leverages AI to provide intelligent code reviews. Users can paste code snippets and receive detailed, Markdown-formatted feedback powered by Groq's LLaMA models.

## 🚀 Features

- **AI-Powered Reviews**: Utilizes Groq's LLaMA models for generating comprehensive code reviews
- **Real-time Feedback**: Instant analysis and suggestions for code improvement
- **Markdown Support**: Reviews rendered in clean, readable Markdown format
- **Syntax Highlighting**: Integrated code editor with syntax highlighting for multiple languages
- **Responsive UI**: Clean, modern interface built with React and Vite
- **RESTful API**: Well-structured backend API for seamless integration
- **Free-tier Compatible**: Designed to work with Groq's free API tier

## 🛠 Tech Stack

### Frontend
- **React 19** - Modern JavaScript library for building user interfaces
- **Vite** - Fast build tool and development server
- **React Simple Code Editor** - Lightweight code editor component
- **React Markdown** - Markdown rendering for reviews
- **Highlight.js & Prism.js** - Syntax highlighting libraries
- **Axios** - HTTP client for API communication

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **Groq SDK** - Integration with Groq AI models
- **CORS** - Cross-origin resource sharing middleware
- **Dotenv** - Environment variable management

### AI Integration
- **Groq LLaMA Models** - Advanced language models for code analysis
- **Free-tier API** - Cost-effective AI processing

## 🏗 Architecture

```
┌─────────────────┐    POST /api/ai/get-review    ┌─────────────────┐
│   Frontend      │ ────────────────────────────► │   Backend       │
│   (React + Vite)│                              │   (Express)     │
│                 │                              │                 │
│ • Code Editor   │                              │ • AI Controller │
│ • Review Panel  │                              │ • Groq Service  │
│ • Markdown      │ ◄──────────────────────────── │ • CORS Handling│
│   Rendering     │    JSON Response             │                 │
└─────────────────┘                              └─────────────────┘
                                                        │
                                                        ▼
                                               ┌─────────────────┐
                                               │   Groq API      │
                                               │   (LLaMA Models)│
                                               └─────────────────┘
```

## 📡 API Reference

### POST /api/ai/get-review

Generates an AI-powered code review for the provided code snippet.

**Endpoint:** `POST /api/ai/get-review`

**Request Body:**
```json
{
  "code": "string",
  "language": "string (optional)"
}
```

**Response:**
```json
{
  "review": "string (Markdown formatted review)"
}
```

**Example Request:**
```bash
curl -X POST http://localhost:3000/api/ai/get-review \
  -H "Content-Type: application/json" \
  -d '{"code": "function hello() { console.log(\"Hello World\"); }"}'
```

## 🛠 Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Groq API key (sign up at [groq.com](https://groq.com))

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd BackEnd
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the `BackEnd` directory:
   ```env
   GROQ_API_KEY=your_groq_api_key_here
   PORT=3000
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

The backend will be running on `http://localhost:3000`.

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd Frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The frontend will be running on `http://localhost:5173`.

### Full Application

To run both frontend and backend simultaneously:

1. Start the backend (as above)
2. In a new terminal, start the frontend (as above)
3. Open your browser to `http://localhost:5173`

## 📖 Usage

1. Open the application in your browser
2. Paste your code snippet into the code editor
3. Click "Get Review" to receive AI-generated feedback
4. Review the Markdown-formatted suggestions and recommendations
5. Iterate on your code based on the AI insights

## 🔮 Future Improvements

- [ ] Support for multiple programming languages with specialized prompts
- [ ] User authentication and review history
- [ ] Integration with GitHub for pull request reviews
- [ ] Batch code review for entire files/projects
- [ ] Custom review templates and criteria
- [ ] Performance metrics and review quality scoring
- [ ] Mobile-responsive design enhancements

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.


---

*Built with ❤️ using React, Node.js, and AI-powered by Groq*
