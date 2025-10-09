# 💪 Workout Management App

A full-stack workout management application built with the MERN stack, featuring JWT authentication and personalized task management.

![MERN Stack](https://img.shields.io/badge/MERN-Full%20Stack-green)
![JWT](https://img.shields.io/badge/Auth-JWT-orange)
![React](https://img.shields.io/badge/Frontend-React-blue)
![Node.js](https://img.shields.io/badge/Backend-Node.js-success)

## 🚀 Features

### 🔐 Authentication & Security
- **JWT Authentication** - Secure token-based user authentication
- **Access Control** - Role-based authorization system
- **Password Encryption** - Bcrypt password hashing

### 📝 Task Management
- **Full CRUD Operations** - Create, Read, Update, Delete workout tasks
- **User-Scoped Tasks** - Personal task management per user

### 🎯 User Experience
- **Personalized Dashboard** - Custom views for each user
- **Real-time Updates** - Instant task synchronization

## 🛠 Tech Stack

### Frontend
- **React** - UI library
- **Custom CSS** - Styling
- **Axios** - HTTP client for API calls
- **React Router** - Navigation and routing

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB

### Authentication & Security
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing
- **CORS** - Cross-origin resource sharing


## ⚙️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### 1. Clone the Repository

```bash
git clone https://github.com/Krishan-Chandrasinghe/Simple-Workout-Manager.git
cd Simple-Workout-Manager
```

### 2. Backend Setup

```bash
cd Backend
npm install
```

#### i. Edit CORS origin URL inside the server.js

```bash
baseURL: 'http://localhost:5173',  // Replace with your frontend URL
```

#### ii. Environment Configuration
- Create a .env file in the backend directory:
- **Note :-** You need to put the MONGO_URI as the connection string of MongoDB atlas server or MongoDB Compass desktop App.

```bash
# Server Configurations
SERVER_PORT=4000
SERVER_HOST=127.0.0.1

# Mongo Congigurations
MONGO_URI=mongodb://localhost:27017/workout_manager

# JWT Configurations
BCRYPT_SALT_ROUNDS=10
JWT_SECRET_STRING='a88f79e757bd868514c0cd21a8f9f450bc13f16c5dd46aec5f7e5e123662d9f1e0b57285690f9ea5acbb96cc9a8ab1069dd98f76d1a1b5d1f52650e641'

# Cookie Configurations
NODE_ENV='development'
```

#### iii. Start Backend Server

```bash
npm start
```

### 3. Frontend Setup
```bash
cd ../Frontend
npm install
```

#### i. API Configuration
- Edit the api.js file (Frontend/src/api.js)
- Change the baseURL to your client URL

```bash
baseURL: 'http://localhost:4000/api',  // Replace with your backend URL + '/api'
```

#### ii. Start Frontend Development Server

```bash
npm run dev
```