# ✍️ Medium — Modern Blogging Platform

**Medium** is a full-stack blogging platform inspired by the original Medium.com, designed to enable users to write, publish, and share articles seamlessly.  
It’s built using **TypeScript**, **Vite**, and **Tailwind CSS** for the frontend, and a lightweight **Node.js/Cloudflare Workers** backend for fast and scalable deployment.

---

## 🚀 Features

- 🧑‍💻 User Authentication (Sign up / Sign in)
- ✍️ Create, Edit, and Delete blog posts
- 💬 Read and interact with user-generated content
- 🎨 Clean, minimal UI built with Tailwind CSS
- ⚡ Fast performance powered by Vite + TypeScript
- 🌐 Deployable on Cloudflare Workers using Wrangler

---

## 🧠 Tech Stack

| Category | Technologies Used |
|-----------|------------------|
| **Frontend** | Vite, React, Tailwind CSS, TypeScript |
| **Backend** | Node.js / Cloudflare Workers |
| **Common Layer** | Shared modules & TypeScript utilities |
| **Tooling** | Wrangler, PostCSS, ESLint |

---

## ⚙️ Getting Started

Follow these steps to run **Medium** locally:

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/Medium.git
cd Medium/Medium-main
```
### 2️⃣ Install Dependencies
```
cd frontend && npm install
cd ../backend && npm install
cd ../common && npm install
```
### 3️⃣ Configure Environment (Backend)
```
DATABASE_URL="your-database-url"
JWT_SECRET="your-secret-key"
```
### 4️⃣ Run the Backend Server
```
cd backend
npm run dev
```
### 5️⃣ Run the Frontend
```
cd frontend
npm run dev
open localhost:5173 in your browser to view the app
``` 
