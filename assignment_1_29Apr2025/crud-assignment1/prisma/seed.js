import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Create a contact
  const contact = await prisma.contact.create({
    data: {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
    },
  });

  // Create notes related to the contact
  await prisma.note.create({
    data: {
      content: "Follow-up call next week",
      contact: {
        connect: { id: contact.id }, // Associate the note with the created contact
      },
    },
  });

  await prisma.note.create({
    data: {
      content: "Reminder to check email for response",
      contact: {
        connect: { id: contact.id }, // Associate the note with the created contact
      },
    },
  });

  console.log("Seed data created!");
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
