# 🤖 AI-Powered Resume Tailor

> An AI tool that analyzes your resume against a job description and provides actionable improvement suggestions.

---

## 🧠 Overview

**AI-Powered Resume Tailor** is a web-based tool that uses **Google Gemini API** to analyze a user's resume in relation to a specific job description. It then returns intelligent suggestions on how to improve the resume by matching relevant keywords, skills, and experience.

This is the **MVP version**, focused on analysis and feedback. Future versions will include full AI rewriting, PDF export, versioning, and more.

---

## ✨ Features

- 📄 Paste your resume and job description
- 🤖 AI-generated suggestions to align your resume with the job posting
- ⚙️ Powered by Gemini AI for accurate and context-aware results

---

## 🚧 Project Status

- ✅ Resume & JD input
- ✅ AI analysis and suggestion generation
- ❌ Resume rewriting (coming soon)
- ❌ PDF export
- ❌ Authentication and user plans

---

## 🛠 Tech Stack

- **Frontend**: HTML, CSS, JavaScript, React, NextJS
- **Backend**: Node.js (Express)
- **AI**: Google Gemini API
- **Deployment**: (Vercel or Firebase)

---

## 📥 Installation (for Devs)

```bash
git clone https://github.com/yourusername/ai-resume-tailor.git
cd ai-resume-tailor
npm install

🔐 Environment Variables
Create a .env file in the root directory:
```ini
GEMINI_API_KEY=your_gemini_api_key_here


## ▶️ Run Locally
```bash
npm run dev

