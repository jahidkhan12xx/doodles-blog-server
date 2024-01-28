const userCollection = require("../../Database/Schemas/UserSchema/userSchema")
const createUser = (user)=>{
    const res =  userCollection.create(user);
    return res;
}

const getUser =()=>{
    const res =  userCollection.find();
    return res;
}


module.exports = {
    createUser,
    getUser

}