const accessMiddleware = (...requestedRole)=>{
    return (req, res, next)=>{
        if(requestedRole.includes(req.role)){
            next();
        }
        else {
            res.json({msg:"You have not access"})
        }
    }

}

module.exports = {
    accessMiddleware
}