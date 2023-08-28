import User from "../api/models/UserMdl";
import jwt from "jsonwebtoken";

const fixedSecretKey = "mysecretkey";
export function generateSign(userId: string, email: string): string {
  const token = jwt.sign({ userId, email }, fixedSecretKey, { expiresIn: "1h" });
  return token;
}

const validateEmail = (email: string): boolean => {
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
};

const validatePassword = (password: string): boolean => {
  const regex = /^(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  return regex.test(password);
};

const usedEmail = async (email: string): Promise<number> => {
  const users = await User.find({ email: email });
  return users.length;
};

export { validateEmail, validatePassword, usedEmail };
