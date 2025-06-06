import { celebrate, Joi } from "celebrate";

/**
 * Validation schemas for contact-related requests
 * Uses celebrate/Joi for request validation
 */
export const contactValidation = {
  /**
   * Validation for contact creation
   * Requires firstName, lastName, and valid email
   */
  create: celebrate({
    body: Joi.object({
      firstName: Joi.string().required().description("Contact's first name"),
      lastName: Joi.string().required().description("Contact's last name"),
      email: Joi.string().email().required().description("Contact's email address"),
    }),
  }),

  /**
   * Validation for contact updates
   * All fields are optional, but must be valid if provided
   */
  update: celebrate({
    params: Joi.object({
      id: Joi.string().uuid().required().description("Contact ID (UUID)"),
    }),
    body: Joi.object({
      firstName: Joi.string().description("Updated first name"),
      lastName: Joi.string().description("Updated last name"),
      email: Joi.string().email().description("Updated email address"),
    }),
  }),

  /**
   * Validation for contact note creation (assuming you're adding a relationship between contact and note)
   */
  createNote: celebrate({
    body: Joi.object({
      content: Joi.string().required().description("Note content"),
      contactId: Joi.string().uuid().required().description("Contact ID associated with the note"),
    }),
  }),
};
