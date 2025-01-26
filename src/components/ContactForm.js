import React, { useState } from 'react';
import '../styles/ContactForm.sass';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const [buttonText, setButtonText] = useState('Submit');
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formEndpoint = "https://formspree.io/f/xyzkkpdk"; // Remplace par ton ID Formspree
    const formDataToSend = new FormData();
    formDataToSend.append('First Name', formData.firstName);
    formDataToSend.append('Last Name', formData.lastName);
    formDataToSend.append('Email', formData.email);
    formDataToSend.append('Message', formData.message);

    try {
      const response = await fetch(formEndpoint, {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSent(true);
        setButtonText('Sended !');

        // Réinitialisation des champs après envoi
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          message: ''
        });

        setTimeout(() => {
          setButtonText('Submit');
          setIsSent(false);
        }, 3000);
      } else {
        alert("An error occurred while sending your message. Please try again.");
      }
    } catch (error) {
      alert("An error occurred. Please check your internet connection.");
    }
  };

  return (
    <div className="contact-form">
      <h1>Contact me !</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <h2>Full name<span className='redStar'>*</span></h2>
          <div className="name-fields">
            <input
              type="text"
              name="firstName"
              placeholder="First"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <h2>Email<span className='redStar'>*</span></h2>
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <h2>Leave me a few words<span className='redStar'>*</span></h2>
          <textarea
            name="message"
            placeholder="Write your message here..."
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-btn">{buttonText}</button>

        {isSent && <p className="success-message">Your message has been sent successfully!</p>}
      </form>
    </div>
  );
}
