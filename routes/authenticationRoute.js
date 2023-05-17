import { Router } from "express";
const router = Router();

import { register, login } from "../controllers/authenticationController.js";
import { checkAdmin} from "../middlewares/AuthMiddleWare.js";



//login
router.post("/login", checkAdmin, login);

//register
router.post("/register", register);

export default router;