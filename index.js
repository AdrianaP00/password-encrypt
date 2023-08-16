const express = require("express")
const dotenv = require("dotenv").config()
const { connect } = require("./src/utils/db.js")

const server = express()
const PORT = process.env.PORT
connect()

server.use(express.json());
// server.use("/newuser", allCourses)
// server.use("/user", User)

server.listen(PORT,() => console.log(`Listening at port http://localhost:${PORT}`))