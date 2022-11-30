import React from 'react';
import './Form.scss';

const Form = () => {
  return (
    <div className="form">
        <p>Send me a message and I will get back to you within 24hrs. :)</p>
        <form>
            <label>Name</label>
            <input type="text" />
            <label>E-mail</label>
            <input type="email" />
            <label>Subject</label>
            <input type="text" />
            <label>Message</label>
            <textarea rows="6" placeholder="type message here..." />
            <button type="submit" className="btn">Submit</button>

        </form>
    </div>
  )
}

export default Form