import mongoose from "mongoose";
import bcrypt from "bcryptjs";


const userSchema = new mongoose.Schema({
    username : {
        type : String,
        require : true,
    },

    email : {
        type : String,
        require : true,
    },

    phone : {
        type : String,
        require : true,
    },

    password : {
        type : String,
        require : true,
    },

    isAdmin : {
        type : Boolean,
        default : false,
    }

});

//secure the password using bcrypt
userSchema.pre('save', async function (next){
    console.log("pre method ", this)
    const user = this;

    if(!user.isModified("password")){
        next();
    }

    try{
        const saltround = await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(user.password, saltround);
        user.password = hash_password;
    }catch(error){
        next(error);
    }
});

const User = new mongoose.model("User",userSchema);

export default User;