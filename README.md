# 🚀 Smart Task Manager

A clean, responsive, and interactive task manager built using React. This project was developed for the **Tech Pioneer Program 2025 – Case Study Round (Jeeny)**.

---

## 🔧 Features

- Add, edit, and delete tasks
- Mark tasks as complete or incomplete
- Filter tasks by category and deadline
- Toast notifications for user actions
- Data persists in localStorage (even after refresh)
- Fully responsive layout for mobile, tablet, and desktop

---

## 🧠 Tech Stack

- **Frontend:** React.js
- **State Management:** React Hooks (`useState`, `useEffect`)
- **Data Persistence:** `localStorage`
- **Styling:** CSS (Glassmorphism theme with dark mode via CSS variables)
- **Data Handling:** JavaScript
- **Notifications:** `react-toastify`
- **Authentication:** Mock login system using localStorage

---

## ▶️ How to Run the Project

To run the project on your local machine:

1. Visit [https://github.com/IshikaKirpalani11/smart-task-manager](https://github.com/IshikaKirpalani11/smart-task-manager)

2. Download the code as a ZIP file or clone the repository using Git.

3. Open the project folder (`smart-task-manager`) in Visual Studio Code or any code editor.

4. Make sure you have Node.js installed. Then, in your terminal (inside the project folder), install the required dependencies by running:

   → `npm install`

5. Once installed, start the development server by running:

   → `npm start`

6. The app will open automatically in your browser at `http://localhost:3000`. If it doesn’t, open your browser and enter that URL manually.

---

## 🔐 Login Credentials (Mock)

This app uses a simple login system. Use the following credentials to log in:

- **Email:** `user@demo.com`
- **Password:** `123456`

---

## 📌 Assumptions Made

- The app supports one user session at a time.
- Tasks are stored locally using `localStorage` for simplicity and speed.
- Deadline reminders are visual (no calendar integrations).
- Time is handled in the user's local timezone.

---

## 🌟 Improvements If I Had More Time

- Integrate Firebase for multi-user login and cloud-based task syncing
- Enable collaboration (assign tasks, share with team members)
- Build a Kanban board or calendar view for more advanced task organization
- Add animations using Framer Motion for smoother transitions and better UX

---

## 📱 Mobile Responsiveness

The UI is designed to work seamlessly across all screen sizes. It includes:

- Fully responsive layouts using media queries
- Inputs and buttons adjust for small screens
- Tested on Chrome DevTools using iPhone, Android, and tablet views

---

## 📷 Demo Video

🎥 **[Watch the full demo here](#)**  
_(Replace this with your Loom or YouTube video link before submission)_

---

## 📁 Project Structure Overview

smart-task-manager/
├── public/
│ └── index.html, favicon, assets
├── src/
│ ├── components/
│ │ ├── TaskForm.jsx
│ │ ├── TaskList.jsx
│ │ ├── FilterBar.jsx
│ │ ├── Login.jsx
│ ├── utils/
│ │ └── storage.js
│ ├── styles.css
│ ├── theme.css
│ ├── App.jsx
│ └── index.js

---

## 🤝 License

This project is free to use for educational and demo purposes only.

---

> Developed by **Ishika Kirpalani**  
> GIKI | Tech Pioneer Program 2025
