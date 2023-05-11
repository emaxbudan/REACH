
import userModel from "../models/user.js"

export function checkAdmin(req, res, next) {
    const user = userModel.findOne({username: req.body.username});

    if ( !user || user.role !== "Admin" ) res.send("permission Denied").end();

    next();

}

//module.exports ={
    //checkAdmin
//}