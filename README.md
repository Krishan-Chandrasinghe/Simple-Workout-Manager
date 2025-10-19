# 💪 Workout Management App

A full-stack workout management application built with the MERN stack, featuring JWT authentication and personalized task management.

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

## Prerequisites
- Node.js (v14 or higher)
- MongoDB Compass desktop app or MongoDB Atlas cluster
- npm or yarn

## ⚙️ Installation & Setup (Run followings in CMD or Terminal)

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

#### i. Environment Configuration
- Create a .env file using .env.sample in the backend directory:

```bash
cp .env.sample .env
```
- **Note :-** You need to update environment variables' data according to your details.


### 3. Frontend Setup
```bash
cd ../Frontend
npm install
```

#### i. Environment Configuration
- Create a .env file using .env.sample in the Client directory:

```bash
cp .env.sample .env
```
- **Note :-** You need to update environment variables' data according to your details.


### 4. Start the application
- Open two terminals inside your application root folder (One for the Server and one for the Client)

#### i. Start Server(Backend) Server

```bash
cd Frontend
npm run dev
```

#### ii. Start Client(Frontend) Development Server

```bash
cd Backend
npm run dev
```