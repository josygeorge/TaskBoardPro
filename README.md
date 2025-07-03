# 🧠 TaskBoard Pro

A compact, fullstack Kanban-style task management app built in ~12 hours to showcase three modern state management patterns:

- **NGXS** (for user authentication)
- **NGRX** (for task and board management)
- **Redux Toolkit** (for analytics in the admin dashboard)

---

## 🔧 Tech Stack

### 🔹 Frontend

- **Angular 17+** (with NGXS + NGRX)
- **Next.js 14+** (React + Redux Toolkit)

### 🔹 Backend

- **Node.js + Express** REST API
- **MongoDB** (or JSON mock database)

---

## 📁 Project Structure

```
taskboard-pro/
├── backend/              # Express + MongoDB REST API
├── angular-client/       # Angular App (NGXS & NGRX)
├── next-admin/           # Next.js Admin Dashboard (Redux Toolkit)
└── README.md
```

---

## ✨ Key Features

### 🔐 NGXS (Angular)

- User login / token storage
- Auth state management

### 📦 NGRX (Angular)

- Create, edit, delete boards & tasks
- Task status tracking (To-Do, In Progress, Done)
- Full entity-based state handling

### 📊 Redux Toolkit (Next.js)

- Fetch board/task data
- Display task status stats
- Show board summary

---

## 📦 REST API Endpoints

```
GET    /api/boards
POST   /api/boards
GET    /api/boards/:id
POST   /api/boards/:id/tasks
PUT    /api/tasks/:id
DELETE /api/tasks/:id
POST   /api/users/login
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/taskboard-pro.git
cd TaskBoardPro
```

### 2. Run Backend

```bash
cd backend
npm install
npm run dev
```

### 3. Run Angular App (NGXS/NGRX)

```bash
cd ../angular-client
npm install
ng serve
```

### 4. Run Next.js Admin Dashboard

```bash
cd ../next-admin
npm install
npm run dev
```

---

## 🗓️ Timeline (3–4 Days)

| Task                      | Time Estimate |
| ------------------------- | ------------- |
| Backend API + Auth (NGXS) | 3 hrs         |
| Board & Task State (NGRX) | 3 hrs         |
| Admin Dashboard (Redux)   | 3 hrs         |
| UI Polish + Deploy        | 3 hrs         |
| **Total**                 | **~12 hrs**   |

---

## 🧠 Learning Highlights

- NGXS for token-based login and state snapshotting
- NGRX for scalable task/board entities with effects
- Redux Toolkit with async thunks and selectors
- Integration across three frontend frameworks

---

## 🖼️ Screenshots

_Add UI screenshots or a video demo here._

---

## 📜 License

© Josy George

---

> Built with ❤️ to demonstrate multi-state management and cross-framework skills in a focused timeframe.
