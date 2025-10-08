import React, { useState } from "react";

const ContactNewsletter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSuccess(true);
      setEmail("");
      setTimeout(() => setSuccess(false), 3000);
    }
  };

  const handleContact = (e) => {
    e.preventDefault();
    if (email && message) {
      alert("Thank you for contacting us!");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <div className="contact-newsletter">
      <h2>Stay Updated & Reach Out</h2>
      <div className="forms-container">
        {/* Newsletter Form */}
        <div className="newsletter">
          <h3>Subscribe to our Newsletter</h3>
          <form onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Subscribe</button>
          </form>
          {success && <p className="success">Subscribed successfully!</p>}
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <h3>Contact Us</h3>
          <form onSubmit={handleContact}>
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <textarea
              placeholder="Your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactNewsletter;
