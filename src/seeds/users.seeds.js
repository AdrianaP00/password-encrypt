const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const Users = require("../api/models/users.models");

const usersArray = [
    {
        username: "Adry",
        email: "adry@gmail.com",
        password: "adry123",
    },{
        username: "Giancarmine",
        email: "carmine@gmail.com",
        password: "carmine123",
    },{
        username: "Maria",
        email: "maria@gmail.com",
        password: "maria123",
    }
  
  ];

const DB_URL= process.env.DB_URL;

mongoose.connect(DB_URL)
.then(async()=> {
    const allUsers = await Users.find();
    if (allUsers.length > 0) {
        await Users.collection.drop();
        console.log("collection delete");
    }
})
.catch((error)=> console.log("Retry",error))

.then(async ()=> {
    const usersMap = usersArray.map((user) => new Users(user));
    await Users.insertMany(usersMap);
    console.log("ok 2");
})
.catch((error) => console.log("Error", error))
.finally(()=> mongoose.disconnect())