import './Form.scss';

import React, {
  useRef,
  useState,
} from 'react';

import emailjs from '@emailjs/browser';

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

    //send email with email.js and resent target value
    emailjs
      .sendForm(
        "service_k92fbwa",
        "template_i2gnk69",
        form.current,
        "SBuFh7ItIkdyOwWGq"
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
    <div className="form">
      {!emailSent && (
        <p>Send me a message and I will get back to you within 24hrs. :)</p>
      )}
      {emailSent && <p>Your e-mail has been sent! We'll talk soon!</p>}

      <form ref={form} onSubmit={onSubmitHandler}>
        {!formInputValid.name && <p>please fill in all fields.</p>}
        {!formInputValid.email && <p>please enter a valid email.</p>}
        {!formInputValid.subject && <p>please add a subject line.</p>}
        {!formInputValid.message && (
          <p>messages must be greater than 5 characters.</p>
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
    </div>
  );
};

export default Form;
