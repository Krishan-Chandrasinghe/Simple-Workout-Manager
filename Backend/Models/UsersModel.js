require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

const usersSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true });

usersSchema.statics.signup = async function (username, email, password) {

    // validate inputs
    if (!username || !email || !password) throw Error('All feilds are required!');

    if (!validator.isStrongPassword(password)) throw Error('Password is not strong enough!');

    if (!validator.isEmail(email)) throw Error('Email is not valid!');

    // Sign up logic
    const exist = await this.findOne({ email });

    if (exist) throw Error('User email already in used!');

    const salt = await bcrypt.genSalt(parseInt(process.env.BCRYPT_SALT_ROUNDS));
    const hashPwd = await bcrypt.hash(password, salt);

    const user = await this.create({ username, email, password: hashPwd });

    return user;
}

usersSchema.statics.login = async function (email, password) {

    // validate inputs
    if (!email || !password) throw Error('All feilds are required!');

    // log in logic
    // const user = await this.findOne({
    //     $or: [{ email }, { username }]
    // });

    const user = await this.findOne({ email });

    if (!user) throw Error('User not signed in!');

    const match = await bcrypt.compare(password, user.password);

    if (!match) throw Error('Incorrect password!');

    return user;
}

module.exports = mongoose.model('users', usersSchema);