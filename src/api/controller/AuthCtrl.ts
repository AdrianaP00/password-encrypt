import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/UserMdl"; 
import { generateSign, validateEmail, validatePassword, usedEmail } from "../../utils/validators"; 

export const register = async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    const newUser = new User(req.body);

    if (!validateEmail(newUser.mail)) {
      return res.status(400).json({ message: "Email inválido" });
    }
    if (!validatePassword(newUser.password)) {
      return res.status(400).json({ message: "Contraseña inválida" });
    }
    if (await usedEmail(newUser.mail)) {
      return res.status(400).json({ message: "El email ya existe" });
    }

    newUser.password = bcrypt.hashSync(newUser.password, 10);
    const createdUser = await newUser.save();

    return res.status(201).json(createdUser);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    console.log(req.body.email);
    const userInfo = await User.findOne({ email: req.body.email });
    console.log(userInfo);
    if (!userInfo) {
      return res.status(404).json({ message: "Email no encontrado" });
    }
    if (!bcrypt.compareSync(req.body.password, userInfo.password)) {
      return res.status(404).json({ message: "Contraseña incorrecta" });
    }
    const token = generateSign(userInfo._id, userInfo.mail);

    return res.status(200).json({ user: userInfo, token: token });
  } catch (error) {
    return res.status(500).json(error);
  }
};