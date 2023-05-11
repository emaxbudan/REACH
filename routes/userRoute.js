import { Router } from "express";
//import express from 'express';
import { getAllUsers, getSingleUser, addUser, deleteUser, register, login, } from "../controllers/usercontroller.js";
import { checkAdmin} from "../middlewares/AuthMiddleWare.js";

const router = Router();

// get all users
router.get('/', getAllUsers);

 //get single user
router.get('/:userId', getSingleUser);

//login
router.post("/login", checkAdmin, login);

//register
router.post("/register", register);

 //add new user
router.post('/', addUser);

 //update user
//router.patch('/:userId', updateUser);

 //delete user
router.delete('/:userId', deleteUser);

export default router;

//export const usersRouter = router;
//module.exports = {
    //usersRouter: router
// }


 