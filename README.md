# 🚀 Team Task Manager

A full-stack **team collaboration and task management system** built to streamline task assignment, tracking, and team productivity.

---

## 🌐 Live Demo

* 🔗 Live:https://disciplined-recreation-production-f9ee.up.railway.app/
* 💻 GitHub: https://github.com/akazmi001/team-task-manager

---

## 📌 Features

* 🔐 **JWT Authentication & Role-Based Access Control (RBAC)**
* 👥 **User & Admin Roles** with secure access
* 📝 **Task Creation & Assignment**
* 📊 **Interactive Dashboard** (Pending, Assigned, Completed tasks)
* 🔄 **Real-time Task Status Updates**
* 🌐 **Full REST API Integration**
* ⚡ Clean UI with responsive design

---

## 🛠️ Tech Stack

### Frontend

* Next.js
* React.js
* Tailwind CSS

### Backend

* Django
* Django REST Framework

### Database

* MySQL

### Deployment

* Railway (Frontend + Backend)

---

## 📂 Project Structure

```
team-task-manager/
│
├── frontend/        # Next.js frontend         
└── backend/         # Django backend
```

---

## ⚙️ Installation & Setup

### 1. Clone Repository

```bash
git clone https://github.com/akazmi001/team-task-manager.git
cd team-task-manager
```

### 2. Backend Setup

```bash
cd backend
pip install -r requirements.txt
python manage.py runserver
```

### 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 🔑 Environment Variables

Create `.env` files in both frontend and backend:

### Backend

```
SECRET_KEY=your_secret_key
DEBUG=True
DATABASE_URL=your_database_url
JWT_SECRET=your_jwt_secret
```

### Frontend

```
NEXT_PUBLIC_API_URL=http://localhost:8000
```

---

## 📈 Future Improvements

* 🔗 OAuth Login (Google / GitHub)
* 📡 Real-time updates using WebSockets
* 🔔 Notifications system
* 📱 Mobile responsiveness improvements
* 📊 Advanced analytics dashboard

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork the repo and submit a PR.

---


## 👨‍💻 Author

**Mohammad Anas*

* GitHub: https://github.com/akazmi001

---

⭐ If you like this project, give it a star!
