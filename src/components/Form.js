import './Form.scss';

import React, {
  useRef,
  useState,
} from 'react';

import emailjs from '@emailjs/browser';

const Form = () => {
  const [emailSent, setEmailSent] = useState(false);
  const form = useRef();

  const onSubmitHandler = (e) => {
    e.preventDefault();

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
        <label>Name</label>
        <input type="text" name="name" />
        <label>E-mail</label>
        <input type="email" name="email" />
        <label>Subject</label>
        <input type="text" name="subject" />
        <label>Message</label>
        <textarea rows="6" placeholder="type message here..." name="message" />
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
