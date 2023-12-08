import express from "express";
import { signin, signup } from "../controllers/auth.controller.js";

const router = express.Router();

// Create sing up auth route
router.post("/signup", signup);

// Create sing in auth route

router.post("/signin", signin);

export default router;
