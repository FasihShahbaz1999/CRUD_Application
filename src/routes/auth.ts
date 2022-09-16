import { Router } from "express";
import signupController from "../controller/auth/signup";
import loginController from "../controller/auth/login";
import refreshController from "../controller/auth/refresh";

const router=Router();

router.post("/SignUP",signupController);

router.post("/Login",loginController);

router.post("/Refresh",refreshController);

export default router;