import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { TextField, Button, Typography, Grid, Box, Container, Card, CardContent, FormLabel } from "@mui/material";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const EditContact = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [contact, setContact] = useState({});

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const response = await axios.get(`/api/v1/contact/${id}`);
        setContact(response.data.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchContact();
  }, [id]);

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.put(`/api/v1/contact/${id}`, values);
      setContact(response.data.data);
      navigate("/contacts");
      toast.success("Contact updated successfully");
    } catch (err) {
      console.error(err);
      toast.error("An error occurred while updating the contact");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Container maxWidth="sm">
      <Card>
        <CardContent>
          <Typography variant="h5" component="h2">
            Edit Contact
          </Typography>
          <Formik
            initialValues={contact}
            enableReinitialize
            validationSchema={Yup.object({
              firstName: Yup.string().required("First name is required"),
              lastName: Yup.string().required("Last name is required"),
              email: Yup.string().email("Invalid email address").required("Email is required"),
            })}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, isValid, dirty, values, setValues, setFieldValue }) => (
              <form>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <FormLabel>First Name</FormLabel>
                    <Field name="firstName">
                      {({ field }) => <TextField {...field} variant="outlined" fullWidth value={values.firstName} onChange={(e) => setFieldValue("firstName", e.target.value)} />}
                    </Field>
                    <ErrorMessage name="firstName" component="div" />
                  </Grid>
                  <Grid item xs={12}>
                    <FormLabel>Last Name</FormLabel>
                    <Field name="lastName">
                      {({ field }) => <TextField {...field} variant="outlined" fullWidth value={values.lastName} onChange={(e) => setFieldValue("lastName", e.target.value)} />}
                    </Field>
                    <ErrorMessage name="lastName" component="div" />
                  </Grid>
                  <Grid item xs={12}>
                    <FormLabel>Email</FormLabel>
                    <Field name="email">
                      {({ field }) => <TextField {...field} variant="outlined" fullWidth value={values.email} onChange={(e) => setFieldValue("email", e.target.value)} />}
                    </Field>
                    <ErrorMessage name="email" component="div" />
                  </Grid>
                </Grid>
                <Box mt={2}>
                  <Button type="submit" variant="contained" color="primary" disabled={isSubmitting || !isValid || !dirty}>
                    Save
                  </Button>
                </Box>
              </form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </Container>
  );
};

export default EditContact;

