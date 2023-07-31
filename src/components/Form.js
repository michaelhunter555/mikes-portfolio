import React, { useRef, useState } from "react";

import emailjs from "@emailjs/browser";
import { Stack, styled, Typography } from "@mui/material";

const isEmpty = (value) => value.trim() === "";
const messageHasLength = (value) =>
  value.trim() === "" && value.trim().length <= 5;

const Form = () => {
  const [emailSent, setEmailSent] = useState(false);
  const [formInputValid, setFormInputValid] = useState({
    name: true,
    email: true,
    subject: true,
    message: true,
  });

  //create ref for each input on form.
  const form = useRef();
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const subjectInputRef = useRef();
  const messageInputRef = useRef();

  //submit handler function for form
  const onSubmitHandler = (e) => {
    e.preventDefault();

    //store current values of inputRefs
    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredSubject = subjectInputRef.current.value;
    const enteredMessage = messageInputRef.current.value;

    //make sure inputs pass validation
    const nameIsValid = !isEmpty(enteredName);
    const emailIsvalid = !isEmpty(enteredEmail);
    const subjectIsValid = !isEmpty(enteredSubject);
    const messageIsValid = !messageHasLength(enteredMessage);

    //set validataion checkers in setFormInputValid
    setFormInputValid({
      name: nameIsValid,
      email: emailIsvalid,
      subject: subjectIsValid,
      message: messageIsValid,
    });

    //create condition for what counts as a valid form. All fields should be true.
    const validateForm =
      nameIsValid && emailIsvalid && subjectIsValid && messageIsValid;

    //if any fields are false, the form cannot be sent.
    if (!validateForm) {
      return;
    }

    //send email with email.js and reset target value
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
    setEmailSent(true);
    e.target.reset();
  };

  return (
    <StyledForm>
      <Stack justifyContent="center" alignItems="center">
        {!emailSent && (
          <Typography variant="subtitle2">
            Send me a message and I will get back to you within 24hrs. :)
          </Typography>
        )}
        {emailSent && (
          <Typography variant="subtitle2">
            Your e-mail has been sent! We'll talk soon!
          </Typography>
        )}
      </Stack>

      <form ref={form} onSubmit={onSubmitHandler}>
        {!formInputValid.name && (
          <Typography variant="subtitle2">
            please fill in all fields.
          </Typography>
        )}
        {!formInputValid.email && (
          <Typography variant="subtitle2">
            please enter a valid email.
          </Typography>
        )}
        {!formInputValid.subject && (
          <Typography variant="subtitle2">
            please add a subject line.
          </Typography>
        )}
        {!formInputValid.message && (
          <Typography variant="subtitle2">
            messages must be greater than 5 characters.
          </Typography>
        )}
        <label>Name</label>
        <input type="text" name="name" ref={nameInputRef} />
        <label>E-mail</label>
        <input type="email" name="email" ref={emailInputRef} />
        <label>Subject</label>
        <input type="text" name="subject" ref={subjectInputRef} />
        <label>Message</label>
        <textarea
          rows="6"
          placeholder="type message here..."
          name="message"
          ref={messageInputRef}
        />
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </StyledForm>
  );
};

const StyledForm = styled("div")`
  label {
    color: black;
    margin-bottom: 0.5rem;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem 1rem;
    margin: auto;
    max-width: 600px;

    input,
    textarea {
      margin-bottom: 1rem;
      padding: 10px 18px;
      font-size: 1.2rem;
      background: rgba(255, 255, 255, 0.7);
      border-color: rgba(255, 255, 255, 0.7);
      color: white;
    }
  }
`;

export default Form;
