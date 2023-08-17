import express from "express";
import dotenv from "dotenv";
import { connect } from "./utils/db";
import User from "./api/models/UserMdl";

dotenv.config();

const server = express();
const PORT = process.env.PORT || 3000;

connect();

server.use(express.json());
 server.use("/user", User)

server.listen(PORT, () => console.log(`Listening at port: ${PORT}`));
