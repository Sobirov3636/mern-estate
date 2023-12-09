import express from "express";
import { google, signin, signup } from "../controllers/auth.controller.js";

const router = express.Router();

// Create sing up auth route
router.post("/signup", signup);

// Create sing in auth route

router.post("/signin", signin);

// Create sing in with google auth route

router.post("/google", google);

export default router;
