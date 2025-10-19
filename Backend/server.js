require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const WorkoutRouter = require('./Routes/WorkoutsRoutes');
const UsersRoutes = require('./Routes/UsersRoutes');
const cookieParser = require('cookie-parser');

//express app
const app = express();

//middleware
app.use(express.json());
app.use(cookieParser());

// app.use(cors()); // httpOnly cookie will not create like this
app.use(cors({
    origin: process.env.FRONTEND_URL, // Replace with your frontend URL
    credentials:true
}));

app.use((req, res, next) => {
    console.log(req.method, req.path);
    next();
})

// connect to routes
app.use('/workouts', WorkoutRouter);
app.use('/users',UsersRoutes);

// Connect to the database
mongoose.connect(process.env.MONGO_URI)
    .then(() => {

        // Listen to the server
        app.listen(process.env.SERVER_PORT, process.env.SERVER_HOST, () => {
            console.log(`Database connected.\nServer is running on the port ${process.env.SERVER_PORT}.`);
        })

    }).catch((error) => {
        console.log(error);
    })