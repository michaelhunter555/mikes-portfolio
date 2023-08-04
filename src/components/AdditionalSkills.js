import React, { useRef, useState } from "react";

import { MdConnectWithoutContact } from "react-icons/md";

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
  maxWidth: "90%",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
  [theme.breakpoints.down("sm")]: {
    maxWidth: "90%",
    marginTop: "1.5rem",
  },
}));

const StyledDialogForm = styled(Dialog)(({ theme }) => ({
  borderRadius: "15px !important",
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    "& .MuiPaper-root": {
      alignItems: "center",
    },
  },
}));

const StyledGridContainer = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
}));

const isEmail = (value) => /^\S+@\S+\.\S+$/.test(value);
const isEmpty = (value) => value?.trim() === "";
const messageIsTooShort = (value) =>
  value?.trim() === "" && value?.trim()?.length <= 5;

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

    setFormInputValid({
      name: (prev) => !prev,
      email: (prev) => !prev,
      message: (prev) => !prev,
    });
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
    const emailIsvalid = isEmail(enteredEmail);

    const messageIsValid = !messageIsTooShort(enteredMessage);

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
            setEmailSent(true);
            e.target.reset();
          },
          (error) => {
            console.log(error.text);
          }
        );
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
        {!formInputValid.name && (
          <DialogContent variant="subtitle2">
            Names should be at least one character.
          </DialogContent>
        )}
        {!formInputValid.email && (
          <DialogContent variant="subtitle2">
            please enter a valid email.
          </DialogContent>
        )}

        {!formInputValid.message && (
          <DialogContent variant="subtitle2">
            Messages must be greater than 5 characters.
          </DialogContent>
        )}

        <StyledGridContainer
          container
          direction="column"
          alignItems="center"
          spacing={2}
        >
          <form onSubmit={onSubmitHandler} style={{ width: "90%" }} ref={form}>
            <Grid item xs={12}>
              <FormLabel>Name*</FormLabel>
              <TextField
                id="name"
                name="name"
                fullWidth
                type="text"
                inputRef={nameInputRef}
              />
            </Grid>
            <Grid item xs={12}>
              <FormLabel>E-mail*</FormLabel>
              <TextField
                id="email"
                name="email"
                fullWidth
                type="text"
                inputRef={emailInputRef}
              />
            </Grid>
            <Grid item xs={12}>
              <FormLabel>Message*</FormLabel>
              <TextField
                id="message"
                name="message"
                fullWidth
                type="text"
                multiline
                rows={4}
                inputRef={messageInputRef}
              />
            </Grid>
            <Stack direction="row" spacing={2} sx={{ margin: "2rem 0 1rem 0" }}>
              <Button disabled={emailSent} variant="contained" type="submit">
                Send
              </Button>

              <Button
                variant="outlined"
                color="error"
                onClick={openContactFormHandler}
              >
                {emailSent ? "Close" : "Cancel"}
              </Button>
            </Stack>
          </form>
        </StyledGridContainer>
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
          sm={5}
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
            <Stack
              direction="row"
              spacing={1}
              sx={{ flexWrap: "wrap", gap: "5px" }}
            >
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
        <Divider variant="middle" orientation="vertical" flexItem />

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
          <StyledPaper elevation={0}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Stack>
                <Typography variant="h6">Contact & Connect</Typography>
              </Stack>
              <Stack>
                <MdConnectWithoutContact size={20} />
              </Stack>
            </Stack>

            <Typography variant="subtitle2" color="text.secondary">
              If you have any questions or would like to learn more about my
              skills, work history, recommendation, etc. please don't hesitate
              to contact me.
            </Typography>

            <Divider flexItem sx={{ marginBottom: "0.5rem" }} />
            <Stack direction="row" justifyContent="flex-start">
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
              <StyledStack
                direction="row"
                alignItems="center"
                justifyContent={{ sm: "flex-start" }}
                spacing={2}
                sx={{ flexWrap: "wrap", gap: "5px" }}
              >
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
