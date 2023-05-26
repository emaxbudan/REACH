import users from "../models/users.js";
import bcrypt from "bcrypt"
// import  validator from "../validations/userValidation.js";

import  {loginValidator} from "../validations/userValidation.js";

// register
export const register = async (req, res) => {
    try{

    //Hashing password
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(req.body.password, salt)

    const newUser = new users({
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        location: req.body.location,
        date:req.body.date,
        password: hash,
        photo:req.body.photo,
        role: req.body.role

        });
        await newUser.save()
        res.status(200).json({success:true, message: "Registration Successful"});
    }catch (error){
        console.log(error)
        res.status(500).json({success: false, message:"Registration failed"});
    }
    
};

// user login
export const login = async(req, res) => {
    const validatedData = loginValidator.safeParse(req.body);

    //console.log(!validatedData)
    if(validatedData.success){
    res.status(200).json((validatedData.success)).end()
    }

    if(!validatedData.success){
         res.status(400).json((validatedData.error)).end()
    
    

     try{
        const email = req.body.email

        const user = await users.findOne({email});
         
        //if user dont exist
        if(!user){
            res.status(404).json({sucess: false, meesage:"not Authorized"});

        // if user exists 

        }
        // correct password
        const checkCorrectPassword = bcrypt.compare(req.body.password, users.password);
        res.status(200).json({success:true, message: "You are logged in", data:user});

        //if incorrect password
        if(!checkCorrectPassword){
             return res.status(401).json({success: false, message:"Incorrect email or Password"});
        }
        
    }catch(error){
        console.log
        res.status(500).json({sucess: false, message:"Failed to Login"})
     }}
 };

    

        // const {password, role, ...rest} = user._doc

        // //create JWT
        // const token = jwt.sign({id:user._id, role:user.role}, process.env.JWT_SECRET_KEY, {expiresIn :"20days"});

        // res.cookie('access token', token,{
        //     httpOnly: true, expires: expires.token.expiresIn
        // }).satus(404).json({success: true, message:"Successful Login", data:{...rest}});


 


