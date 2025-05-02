import express from "express";
import {
  createNoteHandler,
  getNotesByContactHandler,
} from "../../controllers/note.controller.js";

const router = express.Router();

router.post("/", createNoteHandler);
router.get("/contact/:contactId", getNotesByContactHandler);

export default router;
