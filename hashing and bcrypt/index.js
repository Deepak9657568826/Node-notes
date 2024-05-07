const express = require("express")
const fs = require("fs");
const { connection } = require("./config/database");
const { UserModel } = require("./medels/userModel");
const bcrypt = require("bcrypt")
const app = express();
app.use(express.json())





// routes for register user
app.post("/register",  (req, res) => {
    const { name,age,email, password } = req.body;
    try {
        bcrypt.hash(password, 5, async function(err, hash) {
            if(err){
                res.json({msg:err})
            }
            else{
                const newuser = new UserModel({
                    name, 
                    age,
                    email,
                    password:hash
                })
                await newuser.save()
                res.status(200).json({ msg: "New user added successfully", newuser })
            }
        });
    } catch (error) {
        res.status(500).json({ msg: error })
    }
})
// for login 
app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.findOne({ email})
        if (!user) {
            res.json({ msg: "Invalid credentials" })
        }
        else {
            bcrypt.compare(password, user.password, function(err, result) {
               if(err){
                res.json({ msg: "Invalid credentials" })
               }
               else if(result){
                    
                   res.json({ msg: "login successfull" })
               }
            });
        }

    } catch (error) {
        res.json({ mag: "Invalid credentials" })
    }
})

// for get all  user 
app.get("/user", async (req, res) => {
    try {
        const user = await UserModel.find({})
        res.json({ msg: "All user data", user })
    } catch (error) {
        res.json({ mag: error })
    }
})

// change some data  patch request
app.patch("/user/:id", async (req, res) => {
    const { id } = req.params;
    const payload = req.body;
    try {
        const user = await UserModel.findByIdAndUpdate({ _id: id }, payload);
        res.json({ msg: "user data updated", user });
    } catch (error) {
        res.json({ mag: error })
    }
})

app.put("/user/:id", async (req, res) => {
    const { id } = req.params;
    const payload = req.body;
    try {
        const user = await UserModel.findByIdAndUpdate({ _id: id }, payload);
        res.json({ msg: "user data updated", user });
    } catch (error) {
        res.json({ mag: error })
    }
})

app.delete("/user/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const user = await UserModel.findByIdAndDelete({ _id: id });
        res.json({ msg: "user data deleted" });
    } catch (error) {
        res.json({ mag: error })
    }
})



app.listen(1234, async () => {
    try {
        await connection
        console.log("Connect to db");
        console.log("Server is running at port 1234");
    } catch (error) {
        console.log(error);
    }
})