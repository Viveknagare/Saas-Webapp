import User from "../models/user-model.js"
import bcrypt from 'bcryptjs';

//directly use export in front of arrow function instead of writing at end
export const home = async(req,res) => {    //es module type 
    try{
        res.status(200).json({message : "welcome from home page"});
    }catch (error){
        console.log(error);
    }
};


export const registration = async(req,res) => {
    try{
        // console.log(req.body);
        const { username, email, phone, password } = req.body; //destructuring
        console.log(req.body);

        //check whether the email exits in db
        const userExits = await User.findOne({email});
        if(userExits){
            return res.status(200).json({message:"email already exists"});
        }

        //hashing the password
        //1st way and 2 way using the pre method
        // const saltround = 10;
        // const hashpassword = await bcrypt.hash(password, saltround);
        //hash it where we are creating the schema, whenever we will call any database method usinf the User model it firstly executes the pre method in user-model.js

        const usercreated = await User.create({username, email, phone, password});
        res.status(200).json({message:usercreated});
        // method 1 
        // const data = req.body;
        // res.status(200).json({data});
        // method2
        // res.status(200).json({message : req.body});
    }catch (error){
        res.status(500).send({message :"Internal Server Error"});
    }
}






// export {home,registration}  //es module type
 
//another way to export the module usind export statement
// module.exports = {home,registration};  common js where we use require

//export default all; for exporting all modules  es modules
// another way is 
//module.exports = modulename;
//module.exports = {modulename1, modulename2,  modulename3};
//module.exports = {moduleNameToBeExported : TheModuleThatIsExported}
//above 3 are of commonjs