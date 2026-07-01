# 📝To-Do List App

A simple React + Vite to-do list application that lets users add, edit, and delete tasks with local persistence. The app is styled using Tailwind CSS and includes responsive design for mobile and desktop screens.
#
## ✨Live Demo
 🔗 https://react-todo-list-kipq.vercel.app/

## 📌Tech Stack

- React 19
- Vite 4
- Tailwind CSS 4
- Ant Design icons
- ESLint
- LocalStorage for task persistence

## ☀ Project Structure

```
TODOLIST/
  ├── public/
  ├── src/
  │   ├── App.jsx
  │   ├── index.css
  │   ├── main.jsx
  │   └── Components/
  │       ├── ToDo.jsx
  │       └── TodoItems.jsx
  ├── package.json
  ├── vite.config.js
  ├── eslint.config.js
  └── README.md
```

## 👉Features

- Add new tasks
- Edit existing tasks with a modal dialog
- Delete tasks with confirmation
- Tasks are saved in browser local storage
- Clean, modern UI using Tailwind CSS and Ant Design icons

## 🎭Responsive Web Design

- Layout scales for mobile, tablet, and desktop screens
- Centered task card with fluid width and max-width constraints
- Touch-friendly buttons and inputs
- Responsive spacing and typography for smaller devices

## 🚩Getting Started

### Prerequisites

- Node.js installed (recommended 18+)
- npm or yarn

### Install Dependencies

```bash
cd e:/ReactProjects/InternShipProject/TODOLIST
npm install
```

### Run Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Notes

- The task list persists across page refreshes using `localStorage`.
- The app uses Ant Design icons and modals for edit/delete interactions.

## 👩Author
Hafza Abbasi
