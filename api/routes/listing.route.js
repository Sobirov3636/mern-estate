import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import {
  createListing,
  deleteListing,
  updateListing,
  getListing,
  getListings,
} from "../controllers/listing.controller.js";

const router = express.Router();

// Create listing route
router.post("/create", verifyToken, createListing);

// Delete listing route

router.delete("/delete/:id", verifyToken, deleteListing);

// Editing listing route
router.post("/update/:id", verifyToken, updateListing);

// Get listing route

router.get("/get/:id", getListing);

// Get listings route
router.get("/get/", getListings);

export default router;
