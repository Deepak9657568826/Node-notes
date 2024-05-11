const express = require("express")
const { connection } = require("./config/database")
const jwt = require("jsonwebtoken")
const { blackList } = require("./blacklist/blacklisUser")



const {userRouter} = require("./routes/userRoutes")
const userRoutes =  require("./routes/userRoutes")


const app = express()
app.use(express.json())
app.use(express.text())
app.use("/try", userRouter)

app.listen(1234, async () => {
    try {
        await connection;
        console.log("connected to db");
        console.log("Server is conneted to DB");
    } catch (error) {
        console.log(error);
    }
})