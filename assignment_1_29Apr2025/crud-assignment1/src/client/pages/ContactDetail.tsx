import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Avatar, Box, Card, CardContent, Container, Divider, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import { Email, Person, AccountCircle } from "@mui/icons-material";

interface Contact {
  firstName: string;
  lastName: string;
  email: string;
}

const ContactDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [contact, setContact] = useState<Contact | null>(null);
  const [notes, setNotes] = useState<string[]>([]); // State for notes

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const response = await axios.get(`/api/v1/contact/${id}`);
        setContact(response.data.data);
        console.log("ContactDetail.tsx: contact: ", response.data);
      } catch (err) {
        console.error("Error fetching contact details:", err);
      }
    };

    const fetchNotes = async () => {
      try {
        const response = await axios.get(`/api/v1/notes/${id}`);
        setNotes(response.data.notes); // Assuming notes data is an array of notes
      } catch (err) {
        console.error("Error fetching notes:", err);
      }
    };

    fetchContact();
    fetchNotes();
  }, [id]);

  if (!contact) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Card elevation={2} sx={{ borderRadius: 2 }}>
        <CardContent sx={{ p: 4 }}>
          <Box display="flex" alignItems="center" mb={4}>
            <Avatar sx={{ bgcolor: "primary.main", width: 56, height: 56 }}>
              <PersonIcon sx={{ fontSize: 32 }} />
            </Avatar>
            <Typography variant="h4" component="h1" ml={2} fontWeight="medium">
              {contact.firstName} {contact.lastName}
            </Typography>
          </Box>

          {[
            { label: "First Name", value: contact.firstName, icon: <Person sx={{ color: "action.active" }} /> },
            { label: "Last Name", value: contact.lastName, icon: <AccountCircle sx={{ color: "action.active" }} /> },
            { label: "Email", value: contact.email, icon: <Email sx={{ color: "action.active" }} /> },
          ].map((field, index) => (
            <Box key={field.label} sx={{ mb: index !== 2 ? 3 : 0 }}>
              <Box display="flex" alignItems="center" mb={1}>
                {field.icon}
                <Typography variant="subtitle2" color="text.secondary" sx={{ ml: 1 }}>
                  {field.label}
                </Typography>
              </Box>
              <Typography variant="body1" sx={{ fontSize: "1.1rem", ml: 4 }}>
                {field.value}
              </Typography>
              {index !== 2 && <Divider sx={{ mt: 3 }} />}
            </Box>
          ))}

          <Box sx={{ mt: 3 }}>
            <Typography variant="h6" gutterBottom>Notes:</Typography>
            {notes.length > 0 ? (
              notes.map((note, index) => (
                <Box key={index} sx={{ mb: 2 }}>
                  <Typography variant="body1" sx={{ ml: 4 }}>
                    {note}
                  </Typography>
                  {index !== notes.length - 1 && <Divider sx={{ mt: 2 }} />}
                </Box>
              ))
            ) : (
              <Typography variant="body2" color="text.secondary" sx={{ ml: 4 }}>
                No notes available
              </Typography>
            )}
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ContactDetail;
