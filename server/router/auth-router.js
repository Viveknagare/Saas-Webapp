import express from "express";

//controllers
import { home } from "../controllers/auth-controller.js";
import {registration} from "../controllers/auth-controller.js";

//collections
import User from "../models/user-model.js";


const router = express.Router();

// router.get("/", (req,res) => {
//     res.status(200).send("Hello from home route");
// });

router.route("/").get(home);

router.post("/register",registration)

export default router;