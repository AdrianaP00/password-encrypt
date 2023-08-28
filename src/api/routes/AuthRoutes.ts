import express from "express";
import {register, login } from "../controller/AuthCtrl";
import { isAdmin, isAuth } from "../../middlewere/auth";

const authRoutes = express.Router();


authRoutes.post("/register", register);
authRoutes.post("/login", [isAuth], [isAdmin], login);


export default authRoutes;