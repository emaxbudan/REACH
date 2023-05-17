// import user from '../models/user.js';

// //let user = [];


// // get all users
// export function getAllUsers(req, res) {
//     res.send(user).end();
// }

// // get single user
// export function getSingleUser(req, res) {
//     user.find(r => r.id === req.params.userId);
//     res.send(user).end();
// }

// //user login
// export  function login(req, res) {
//     user.findOne({username: req.params.username });
//     res.send("Login sucessfull!").end();
// }

// //register
// export function register(req, res) {
//     user.create({
//         name: req.params.name,
//         username: req.params.username,
//         password: req.params.password,
//         role: req.body.role
//     })
//     res.send("welcome Onboard").end();

//     }



// // update user
// export function udpateUser(req, res) {
//     user.map(r => {
//         if (r.id === req.params.userId) {
//             return {...r, ...req.body};
//         }

//         return r;
//     })

//     res.send("user updated successfully!").end();
// }

// // delete user
// export function deleteUser(req, res) {
//     user.filter(r => r.id !== req.params.userId);
//     res.send("user deleted").end();
// }






// add new user
// export function addUser(req, res) {
//    user.save({
//          name: req.params.name,
//         username: req.params.username,
//         password: req.params.password,
//         role: req.body.role
//     })
//     //     ...req.body,
//     //     id: (user).toString()
//     // });
//     res.send("user added").end();
// }





import  users  from '../models/users.js';

// get all users
export const getAllUsers = async (req,res) => {

    // For getting pages
    const page = parseInt(req.query.page)
    console.log(page);
    try{
        const allUsers = await users.find({});
        res.status(200).json({sucsess: true, message:"Successful", data: allUsers});
    }catch (error){
        console.log(error)
        res.status(500).json({success: false, message: "failed"});
    }
};


// get single user
export const getSingleUser = async(req, res) => {
    const id = req.params.id; 
    try{
        const singleUser = await users.findById(id);
        res.status(200).json({success: true, message:"Successful", data:singleUser});
    }catch(error){
        console.log(error)
        res.status(404).json({success:false, message:"User not found"});
    }
   
};


// add user
export const addUser = async (req,res) =>{
    const newUser = new users(req.body);
    try{
        const savedUser = await newUser.save();
        res.status(200).json({successs: true, measage: "User Added successfuly!", data: savedUser});
    }catch (error){
        console.log(error),
        res.send(500).json({success: false, message: "Failed to Add User"});
    }

};

// update user
export const updateUser = async(req, res) =>{
   const id = req.params.id
   try{
    const updatedUser =await users.findByIdAndUpdate(id, {$set: req.body}, {new:true});
        res.status(200).json({sucess:true, message:"updated successfully", data:updatedUser});
    } catch(error) {
        console.log(error)
        res.status(500).json({success:false, message:"failed to update User",});
    }
};

// delete user
export const deleteUser = async(req, res) => {
   const id = req.params.id
   try{
    const deletedUser = await users.findByIdAndDelete(id);
    res.status(200).json({success : true, message: "User deleted successfully", data: deletdUser});
   }catch (error){
    console.log(error)
    res.status(500).json({success: false, message:"Failed to Delete User"});
   }
    
};