# 🧠 TaskBoard Pro

A minimal Trello-style Kanban app built in 3–4 days (~12 hours) to demonstrate advanced frontend state management using **NGXS**, **NGRX**, and **Redux**, with a fullstack architecture.

---

## 🚀 Tech Stack

### 🌐 Frontend (Monorepo)

- **Angular**
  - `NGXS` for authentication state
  - `NGRX` for board/task management
- **React + Redux**
  - Admin dashboard using `@reduxjs/toolkit`

### 🛠 Backend

- **Node.js + Express**
- **MongoDB** (or JSON mock)
- RESTful API structure

---

## 📂 Monorepo Structure

TaskBoardPro/
├── backend/ # Node + Express REST API
├── angular-client/ # Angular app using NGXS & NGRX
├── react-admin/ # React + Redux admin dashboard
└── README.md

---

## 🧩 Features

### 👤 Auth (NGXS - Angular)

- Login with token-based authentication
- Store user in global NGXS state

### 🗂 Boards & Tasks (NGRX - Angular)

- Create boards
- Add/edit/delete tasks within boards
- Status tracking: Todo, In Progress, Done
- All state via NGRX actions, reducers, selectors

### 📊 Admin Dashboard (Redux - React)

- Fetch all boards/tasks
- Show task stats (counts, statuses, etc.)
- Global Redux store using Redux Toolkit

---

## 📦 API Endpoints (REST)

GET /api/boards
POST /api/boards
GET /api/boards/:id
POST /api/boards/:id/tasks
PUT /api/tasks/:id
DELETE /api/tasks/:id
POST /api/users/login

## 🗓 Timeline

Phase Time Estimate
Backend + NGXS auth 3 hrs
NGRX (board/tasks) 3 hrs
React Admin Dashboard 3 hrs
UI polish & deployment 3 hrs
Total ~12 hrs

## 📜 License

JG

    Built with in a time-boxed challenge to explore cross-framework state management techniques.
