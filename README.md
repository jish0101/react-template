# 📝 abun App

Welcome to the **abun App**, a single-page application built with **React**, **TypeScript**, and **Vite**. It features a dashboard for managing and viewing generated articles, complete with routing, role-based access control, and a global user state setup using **Zustand**.

## 🚀 Tech Stack

- ⚛️ **React** — Modern UI development
- ⚡ **Vite** — Lightning-fast build tool
- 🧠 **Zustand** — Minimal, scalable global state management
- ⛑ **TypeScript** — Static type safety
- 🧭 **React Router** — Client-side routing
- 💅 **Tailwind CSS** — Utility-first styling
- 🦴 **Lucide Icons** — Beautiful icons
- 📂 **Feature-based architecture** — Scalable folder structure

---

## 📁 Project Structure

```
src/
├── components/          // Reusable UI components
├── pages/               // Route-based pages
│   ├── home/            // Home page
│   ├── auth/            // Auth pages (Login, etc.)
│   └── dashboard/       // Admin dashboard
├── store/               // Zustand global state
├── types/               // TypeScript types
└── App.tsx              // Routes are placed here
└── main.tsx             // Entry point
```

---

## 👤 User Management

- **No login required**  
  A default user is already configured in the Zustand store with the role `ADMIN`. This enables smooth access to protected dashboard routes without authentication setup.

---

## 🔐 Route Access Control

The app uses a powerful route structure powered by `react-router`:

- `CheckAuth` is a middleware component that restricts access to authenticated users with required roles.
- The `/dashboard` route and its nested children are protected for `ADMIN` users.
- `SuspenseWrapper` ensures seamless lazy-loading of components.

### 🧭 Route Overview

| Route                                    | Access     | Description               |
| ---------------------------------------- | ---------- | ------------------------- |
| `/`                                      | Public     | Home page                 |
| `/auth/login`                            | Public     | Login page                |
| `/dashboard`                             | ADMIN only | Dashboard landing         |
| `/dashboard/articles/generated-articles` | ADMIN only | Article generation viewer |
| `*`                                      | Public     | 404 - Not Found           |

---

## 🛠️ Getting Started

1. **Clone the repo**

   ```bash
   git clone https://github.com/jish0101/react-template.git
   cd article-dashboard
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the app**

   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## ✅ Features

- 💻 Fully responsive dashboard UI
- 📄 Article list with pagination and sorting
- 🔒 Protected routes with role checks
- 🧠 Global state powered by Zustand
- 🧹 Clean and scalable code structure
- 🌙 Modern design using Tailwind CSS

---

## 📦 Dependencies

- `react-router-dom`
- `zustand`
- `lucide-react`
- `tailwindcss`
- `vite`
- `typescript`

---

## 🙌 Acknowledgements

Built with ❤️ using the best practices in React, TypeScript, and Zustand. Thanks!

---

## 📜 License

This project is licensed under the MIT License.
