import React, { useRef, useState } from "react";

import emailjs from "@emailjs/browser";
import EmailIcon from "@mui/icons-material/Email";
import {
  Button,
  Chip,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  FormLabel,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import { OtherChips, socialIcons } from "../utils/supplementalChips";

const StyledStack = styled(Stack)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    flexWrap: "wrap",
    flexDirection: "column",
    alignItems: "flex-end",
    gap: "5px",
  },
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  borderRadius: "15px",
  padding: "2rem",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  maxWidth: "75%",
  [theme.breakpoints.down("sm")]: {
    maxWidth: "90%",
    marginTop: "1.5rem",
  },
}));

const StyledDialogForm = styled(Dialog)({
  borderRadius: "15px !important",
});

const isEmpty = (value) => value.trim() === "";
const messageHasLength = (value) =>
  value.trim() === "" && value.trim().length <= 5;

const AdditionalSkills = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [formInputValid, setFormInputValid] = useState({
    name: true,
    email: true,
    message: true,
  });

  //create ref for each input on form.
  const form = useRef();
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const messageInputRef = useRef();

  const openContactFormHandler = () => {
    setOpenDialog((prev) => !prev);
  };

  //submit handler function for form
  const onSubmitHandler = (e) => {
    e.preventDefault();

    //store current values of inputRefs
    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;

    const enteredMessage = messageInputRef.current.value;

    //make sure inputs pass validation
    const nameIsValid = !isEmpty(enteredName);
    const emailIsvalid = !isEmpty(enteredEmail);
    const messageIsValid = !messageHasLength(enteredMessage);

    //set validataion checkers in setFormInputValid
    setFormInputValid({
      name: nameIsValid,
      email: emailIsvalid,
      message: messageIsValid,
    });

    //create condition for what counts as a valid form. All fields should be true.
    const validateForm = nameIsValid && emailIsvalid && messageIsValid;

    //if any fields are false, the form cannot be sent.
    if (!validateForm) {
      return;
    }

    //send email with email.js and reset target value
    try {
      emailjs
        .sendForm(
          process.env.REACT_APP_EMAIL_SERVICE_KEY,
          process.env.REACT_APP_EMAIL_TEMPLATE,
          form.current,
          process.env.REACT_APP_EMAIL_SECRET
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      setOpenDialog(false);
      setEmailSent(true);
      e.target.reset();
    } catch (err) {
      console.log("Error Sending Email", err);
    }
  };

  return (
    <>
      <StyledDialogForm
        disableScrollLock={true}
        open={openDialog}
        onClose={openContactFormHandler}
      >
        <DialogTitle>Contact</DialogTitle>
        {!emailSent && (
          <DialogContent>
            Send me an email and I promise to get back to you within 24 hours.
          </DialogContent>
        )}
        {emailSent && (
          <DialogContent>
            Your message has been sent! We'll talk soon!
          </DialogContent>
        )}

        <Grid container direction="column" alignItems="center" spacing={2}>
          <form onSubmit={onSubmitHandler} style={{ width: "90%" }}>
            <Grid item xs={12}>
              <FormLabel>Name</FormLabel>
              <TextField fullWidth type="text" ref={nameInputRef} />
            </Grid>
            <Grid item xs={12}>
              <FormLabel>E-mail</FormLabel>
              <TextField fullWidth type="text" ref={emailInputRef} />
            </Grid>
            <Grid item xs={12}>
              <FormLabel>Message</FormLabel>
              <TextField
                fullWidth
                type="text"
                multiline
                rows={4}
                ref={messageInputRef}
              />
            </Grid>
            <Stack direction="row" spacing={2} sx={{ margin: "2rem 0 1rem 0" }}>
              <Button
                variant="contained"
                type="submit"
                disabled={!formInputValid}
              >
                Send
              </Button>
              <Button
                variant="outlined"
                color="error"
                onClick={openContactFormHandler}
              >
                Cancel
              </Button>
            </Stack>
          </form>
        </Grid>
      </StyledDialogForm>
      <Grid
        id="contact"
        container
        direction="row"
        justifyContent="center"
        sx={{ margin: "5rem auto" }}
      >
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography variant="h2" sx={{ textAlign: "center" }}>
            Worth Mentioning
          </Typography>
          <Stack
            direction="column"
            alignItems="center"
            spacing={1}
            justifyContent="center"
          >
            <Stack direction="row" spacing={1}>
              {OtherChips.map((chip, i) => (
                <Chip key={i} icon={chip.icon} label={chip.name} />
              ))}
            </Stack>
            <Stack
              justifyContent="center"
              sx={{ margin: "0 auto", maxWidth: "80%" }}
            >
              <Typography variant="subtitle2">
                My past experience with blogging, SEO, Shopify and google ads
                acted as a catalyst in pushing me towards the path of coding. I
                feel it's necessary to mention this because it's through my
                years of experience with these platforms that I realized
                shortcomings that coding could solve.
              </Typography>
            </Stack>
          </Stack>
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <StyledPaper
            elevation={0}
            sx={{
              borderRadius: "15px",
              padding: "2rem",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              maxWidth: "75%",
            }}
          >
            <Typography variant="h6">Contact Me</Typography>

            <Typography variant="subtitle2" color="text.secondary">
              If you have any questions or would like to learn more about my
              skills, work history, recommendation, etc. please don't hesitate
              to contact me.
            </Typography>

            <Divider flexItem sx={{ marginBottom: "0.5rem" }} />
            <Stack direction="row">
              <Stack justifyContent="center" alignItems="center">
                <Chip
                  clickable
                  icon={<EmailIcon />}
                  component={Button}
                  label="Contact"
                  onClick={openContactFormHandler}
                  variant="outlined"
                />
              </Stack>

              <Divider
                orientation="vertical"
                flexItem
                sx={{ margin: "0 1rem" }}
              />
              <StyledStack direction="row" alignItems="center" spacing={2}>
                {socialIcons.map((item, i) => (
                  <Chip
                    clickable={true}
                    component="a"
                    href={item.link}
                    target="_blank"
                    variant="outlined"
                    key={i}
                    label={item.name}
                    icon={item.icon}
                  />
                ))}
              </StyledStack>
            </Stack>
          </StyledPaper>
        </Grid>
      </Grid>
    </>
  );
};

export default AdditionalSkills;
