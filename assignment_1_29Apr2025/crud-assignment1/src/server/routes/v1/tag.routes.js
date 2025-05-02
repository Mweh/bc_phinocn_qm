import express from "express";
import tagService from "../services/tag.service.js";
import { successResponse, errorResponse } from "../../utils/response.js";

const router = express.Router();

/**
 * POST /create
 * Create a new tag.
 */
router.post("/", async (req, res) => {
  const { name } = req.body;
  try {
    const tag = await tagService.create({ name });
    res.status(201).json(successResponse(tag));
  } catch (err) {
    res.status(500).json(errorResponse("Failed to create tag"));
  }
});

/**
 * GET /list
 * Get all tags.
 */
router.get("/list", async (req, res) => {
  try {
    const tags = await tagService.findAll();
    res.status(200).json(successResponse(tags));
  } catch (err) {
    res.status(500).json(errorResponse("Failed to get tags"));
  }
});

/**
 * GET /:id
 * Get a tag by ID.
 */
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const tag = await tagService.findById(id);
    if (!tag) {
      return res.status(404).json(errorResponse("Tag not found"));
    }
    res.status(200).json(successResponse(tag));
  } catch (err) {
    res.status(500).json(errorResponse("Failed to retrieve tag"));
  }
});

export default router;
