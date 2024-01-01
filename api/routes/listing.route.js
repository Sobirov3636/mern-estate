import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import { createListing, deleteListing, updateListing } from "../controllers/listing.controller.js";

const router = express.Router();

// Create listing route
router.post("/create", verifyToken, createListing);

// Delete listing route

router.delete("/delete/:id", verifyToken, deleteListing);

// Editing listing route
router.post("/update/:id", verifyToken, updateListing);

export default router;
