const userModel = require('../models/user.model');

module.exports.createUser = async({
    firstname,lastname,email,password,age,mobile
}) => {
    if(!firstname || !email || !password || !age || !mobile){
        throw new Error('All feilds are required');
    }
    const user = userModel.create({
        fullname:{
            firstname,
            lastname
        },
        email,
        password,
        age,
        mobile
    });

    return user;
}