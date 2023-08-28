import { Request, Response } from "express";

export function generatePassword(req: Request, res: Response) {
  const { length, useSpecialChars } = req.body;
  const specialChars = "!@#$%^&*()_-+=<>?";
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789" + (useSpecialChars ? specialChars : "");
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars.charAt(randomIndex);
  }

  res.json({ password });
}