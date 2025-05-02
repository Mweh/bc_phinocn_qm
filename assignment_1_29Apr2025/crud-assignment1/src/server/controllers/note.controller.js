import noteService from "../services/note.service.js";
import { successResponse, errorResponse } from "../utils/response.js";

export const createNoteHandler = async (req, res) => {
  const { content, contactId } = req.body;
  try {
    const note = await noteService.create({ content, contactId });
    res.status(201).json(successResponse(note));
  } catch (err) {
    res.status(500).json(errorResponse("Failed to create note"));
  }
};

export const getNotesByContactHandler = async (req, res) => {
  try {
    const notes = await noteService.getByContactId(req.params.contactId);
    res.status(200).json(successResponse(notes));
  } catch (err) {
    res.status(500).json(errorResponse("Failed to get notes"));
  }
};
