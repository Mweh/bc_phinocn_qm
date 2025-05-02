import { prisma } from '../prisma/client.js'

export const createNote = async (data) => {
  return prisma.note.create({ data })
}

export const getNoteById = async (id) => {
  return prisma.note.findUnique({ where: { id } })
}

export const getNotesByContactId = async (contactId) => {
  return prisma.note.findMany({ where: { contactId } })
}

export const updateNote = async (id, data) => {
  return prisma.note.update({ where: { id }, data })
}

export const deleteNote = async (id) => {
  return prisma.note.delete({ where: { id } })
}
