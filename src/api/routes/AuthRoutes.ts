import express from "express";
import {register, login } from "../controller/AuthCtrl";
const {isAuth, isAdmin} = require("../../middlewares/auth")

const authRoutes = express.Router();


authRoutes.post("/register", register);
authRoutes.post("/login", [isAuth], [isAdmin], login);


export default authRoutes;