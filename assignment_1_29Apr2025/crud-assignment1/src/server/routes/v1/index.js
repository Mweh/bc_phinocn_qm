import { Router } from "express";
import errorHandler from "strong-error-handler";
import contactRoutes from "./contact.route.js";import noteRoutes from "./note.routes.js";

const router = Router();

router.use("/contact", contactRoutes);
router.use("/note", noteRoutes);

/**
 * GET /health
 * Health check endpoint.
 */
router.get("/health", (req, res) => {
  res.send("Ok");
});

// Error handling middleware
router.use(
  errorHandler({
    debug: process.env.ENV !== "prod",
    log: true,
  })
);

export default router;
