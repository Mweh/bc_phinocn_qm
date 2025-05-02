import express from "express";
import categoryService from "../services/category.service.js";
import { successResponse, errorResponse } from "../utils/response.js";

const router = express.Router();

/**
 * POST /create
 * Create a new category.
 */
router.post("/", async (req, res) => {
  const { name } = req.body;
  try {
    const category = await categoryService.create({ name });
    res.status(201).json(successResponse(category));
  } catch (err) {
    res.status(500).json(errorResponse("Failed to create category"));
  }
});

/**
 * GET /list
 * Get all categories.
 */
router.get("/list", async (req, res) => {
  try {
    const categories = await categoryService.findAll();
    res.status(200).json(successResponse(categories));
  } catch (err) {
    res.status(500).json(errorResponse("Failed to get categories"));
  }
});

/**
 * GET /:id
 * Get a category by ID.
 */
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const category = await categoryService.findById(id);
    if (!category) {
      return res.status(404).json(errorResponse("Category not found"));
    }
    res.status(200).json(successResponse(category));
  } catch (err) {
    res.status(500).json(errorResponse("Failed to retrieve category"));
  }
});

export default router;
