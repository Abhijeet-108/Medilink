const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type: String,
            required: true,
            minlength: [3, 'First name must be at least 3 character long'],

        },
        lastname:{
            type: String,
            minlength: [3, 'last name must be at least 3 character long'],
        }
    },
    email:{
        type: String,
        required: true,
        unique: true,
        minlength: [6, 'Email must be at least 6 character long']
    },
    password:{
        type: String,
        required: true,
        select: false,
    },
    age:{
        type: Number,
        required: true,
    },
    mobile:{
        type: Number,
        required: true,
        minlength: [10, 'mobile number should 10 number'],
        maxlength: [10, 'mobile number should be 10 length'],
    }
})

userSchema.methods.generateAuthToken = function (){
    const token = jwt.sign({_id: this._id, email: this.email}, process.env.JWT_SECRET, { expiresIn: '24h' });
    return token;
}

userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password);
}

userSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password, 10);
}

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;