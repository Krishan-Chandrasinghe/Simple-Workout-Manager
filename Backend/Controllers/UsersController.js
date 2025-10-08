const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = require('../Models/UsersModel');

const attachResponseCookie = (_id, res) => {
    const token = jwt.sign({ _id }, process.env.JWT_SECRET_STRING, { expiresIn: '3h' });

    res.cookie('authToken', token, {
        path: '/', // if path is "/api" that cookie works for only "/api" path requests. not for others
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict', // or lax - allows other sites get request nor for other type requests(eg: link sharing on social media)
        maxAge: 15 * 60 * 1000 // 15 min
    })
}

const signupUser = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const user = await User.signup(username, email, password);
        attachResponseCookie(user._id, res);

        res.status(200).json({ user, message: 'Signed up successfully!' });

    } catch (error) {
        res.status(401).json({ error: error.message, message: 'Sign up unsuccessful!' });
    }

}

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.login(email, password);
        attachResponseCookie(user._id, res);

        res.status(200).json({ user, message: 'Logged in successfully!' });

    } catch (error) {
        res.status(401).json({ error: error.message, message: 'Log in unsuccessful!' });
    }
}

const logoutUser = (req, res) => {
    res.clearCookie('authToken', { path: '/' })
    res.status(200).json({ message: 'Logged out successfully!' });
}

const verifyUser = async (req, res) => {
    const token = req.cookies.authToken;

    if(!token)
        return

    try {
        const { _id } = await jwt.verify(token, process.env.JWT_SECRET_STRING);

        if (!mongoose.isValidObjectId(_id))
            throw Error('User validation failed!');

        const user = await User.findById(_id);

        if(!user)
            throw Error('User validation failed!');

        res.status(200).json({ user, message: 'User verified!' });

    } catch (error) {
        res.status(401).json({ error: error.message, message: 'Verification failed!' });
    }
}

module.exports = { signupUser, loginUser, logoutUser, verifyUser };