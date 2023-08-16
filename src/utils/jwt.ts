import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const generateSign = (id: string | number): string => {
    return jwt.sign({ id }, process.env.JWT_KEY!, { expiresIn: "1h" });
};

const verifySign = (token: string): any => {
    return jwt.verify(token, process.env.JWT_KEY!);
};

export { generateSign, verifySign };