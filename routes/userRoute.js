import { Router } from "express";
//import express from 'express';
import { getAllUsers, getSingleUser, deleteUser, addUser, updateUser } from "../controllers/usercontroller.js";
//import { checkAdmin} from "../middlewares/AuthMiddleWare.js";

const router = Router();

// get all users
router.get('/', getAllUsers);

 //get single user
router.get('/:Id', getSingleUser);


 //add new user
router.post('/', addUser);

 //update user
router.put('/:Id', updateUser);

 //delete user
router.delete('/:Id', deleteUser);

export default router;

//export const usersRouter = router;
//module.exports = {
    //usersRouter: router
// }


 