import mongoose from "mongoose";

// const URI = "mongodb://127.0.0.1:27017/mern_admin";

const connectDb = async() => {
    try{
        await mongoose.connect(process.env.MONGOD);
        console.log("connected to Database....")
    }catch(error){
        console.error("database connection failed");
        process.exit(0);
    }
}

export default connectDb;