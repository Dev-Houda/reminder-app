# 🗓️ Erinnerungskalender (Reminder App)

A simple web application where users can add important dates and receive reminder emails before the event.

---

## 🚀 Features

- 📅 Add reminders with title, date, and lead time (1–14 days)
- 📨 Automatic email reminders
- ✏️ Edit or delete reminders via the UI
- 🌐 Simple frontend integrated with Express backend
- 🎨 Design based on provided mockups

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js, MongoDB, Mongoose, Nodemailer
- **Frontend**: HTML, CSS, JavaScript
- **Database**: MongoDB (hosted on MongoDB Atlas)
- **Email**: Gmail SMTP with App Password

---

## 📂 Project Structure

reminder-app/
├── backend/ → Express server, routes, models, controllers
├── frontend/ → Static frontend: index.html, style.css, script.js
├── dump/ → MongoDB dump (for import)
├── .env.example → Environment variable template
└── README.md

## 🧪 How to Run

### 1. Clone and install backend

```bash
cd backend
npm install

```

### 2. Set up environment variables

Create a .env file in /backend:

PORT=5000
MONGO_URI=your_mongo_connection_string
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password

Use .env.example as a guide.

### 3. Start the backend

npm start

### 4. Open the frontend

Just open frontend/index.html in your browser.
Make sure the backend is running at http://localhost:5000.

### Restore MongoDB Dump (optional)

mongorestore --uri="your-mongodb-uri" ./dump/reminderapp
You may need to add --tls --tlsAllowInvalidCertificates for Atlas.

## Author

Nour El Houda
LinkedIn: https://www.linkedin.com/in/devhouda/
GitHub: https://github.com/Dev-Houda
