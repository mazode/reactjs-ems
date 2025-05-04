# 🧑‍💼 Employee Management System

A simple and elegant employee task tracking system built with **React**. It features login authentication, task breakdowns for employees, and separate dashboards for admins and employees.

---

## ✨ Features

- 🔐 **Login System** for Admin and Employees  
- 🧾 **Task Summary** per Employee  
- 🧑‍💼 **Admin Dashboard** to view all employees and task stats  
- 👤 **Employee Dashboard** to view individual tasks  
- 💾 **Local Storage** based persistence  
- 🎨 **Modern UI** with Tailwind CSS  

---

## 📁 Folder Structure

src/
├── components/
│   ├── Auth/
│   │   └── Login.jsx
│   ├── Dashboard/
│   │   ├── AdminDashboard.jsx
│   │   └── EmployeeDashboard.jsx
│   └── Task/
│       └── AllTask.jsx
├── context/
│   └── AuthProvider.jsx
├── utils/
│   └── localStorage.js
└── App.jsx

---

## 🛠️ Tech Stack

- **React**
- **Tailwind CSS**
- **Context API** for global state
- **LocalStorage** for data persistence

---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/employee-management-system.git
cd employee-management-system
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Server

```bash
npm start
```
---

## 🔐 Login Credentials

| Role    | Email          | Password |
|---------|----------------|----------|
| Admin   | admin@me.com   | 123      |
| Employee| Defined in localStorage | Defined manually |

---