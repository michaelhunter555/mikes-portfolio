import './Form.scss';

import React, { useState } from 'react';

const Form = () => {
  const [emailSent, setEmailSent] = useState(false);

  const onSubmitHanlder = (e) => {
    e.preventDefault();

    setEmailSent(true);
  };

  return (
    <div className="form" onSubmit={onSubmitHanlder}>
      {!emailSent && (
        <p>Send me a message and I will get back to you within 24hrs. :)</p>
      )}
      {emailSent && <p>Your e-mail has been sent! We'll talk soon!</p>}
      <form>
        <label>Name</label>
        <input type="text" />
        <label>E-mail</label>
        <input type="email" />
        <label>Subject</label>
        <input type="text" />
        <label>Message</label>
        <textarea rows="6" placeholder="type message here..." />
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
