const express = require("express")
const fs = require("fs");
const { connection } = require("./config/database");
const { UserModel } = require("./medels/userModel");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");
const { blacklist } = require("./Blacklistuser");
const app = express();
app.use(express.json())
app.use(express.text())



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
                res.json({ msg: "Invalid credentials"})
               }
               else if(result){
                    
                   res.json({ msg: "login successfull", token:jwt.sign({ foo: 'bar' }, 'masai')  })
               }
            });
        }

    } catch (error) {
        res.json({ mag: "Invalid credentials" })
    }
})

app.get("/", (req, res)=>{
    res.json({msg:"This is home route"})
})

app.get("/logout", (req, res)=>{
    try {
        const token  = req.headers.authorization;
        blacklist.push(token)
        res.send("logout successfull")
    } catch (error) {
       console.log(error); 
    }
})

// middleware for restricted routes
const  authmiddleware   =  (req, res, next)=>{
    const token = req.headers.authorization;
    console.log(token);
    if (token) {
        if(blacklist.includes(token)){
            res.status(200).json({"msg":"Please login first"})
        }
        else{
            jwt.verify(token, 'masai', function(err, decoded) {
                if (err) {
                    res.status(403).json({"msg": "Token verification failed"});
                } else {
                    console.log(decoded); // Log decoded token payload
                   next();
                }
            });

        }
     
    } else {
        res.status(401).json({"msg": "You are not authorized"});
    }
}


// logout routes


// private route
// private route
app.get("/movie", authmiddleware,  (req, res) => {
    res.send("Movies data")
});


app.get("/series", (req, res)=>{
    const token = req.headers.authorization;
    console.log(token);
    if (token) {
        jwt.verify(token, 'masai', function(err, decoded) {
            if (err) {
                res.status(403).json({"msg": "Token verification failed"});
            } else {
                console.log(decoded); // Log decoded token payload
                res.json({msg:'This is series date'})
            }
        });
    } else {
        res.status(401).json({"msg": "You are not authorized"});
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