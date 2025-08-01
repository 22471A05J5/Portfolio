import React, { useState, useEffect } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    });
    elements.forEach((el) => observer.observe(el));
    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 3) {
      newErrors.name = 'Name must be at least 3 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      alert('✅ Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    } else {
      setErrors(formErrors);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' }); // clear error on input
  };

  return (
    <div className="contact-wrapper animate-on-scroll">
      <div className="contact-info animate-on-scroll">
        <h2>Contact Us</h2>
        <p>We would love to hear from you! Drop your message below.</p>

        <div className="info-box">
          <i className="fas fa-map-marker-alt bounce-icon"></i>
          <div>
            <h4>Address</h4>
            <p>4321 Narasaraopeta,<br />Palnadu, 522601</p>
          </div>
        </div>

        <div className="info-box">
          <i className="fas fa-phone-alt bounce-icon"></i>
          <div>
            <h4>Phone</h4>
            <p>91-9398-6094</p>
          </div>
        </div>

        <div className="info-box">
          <i className="fas fa-envelope bounce-icon"></i>
          <div>
            <h4>Email</h4>
            <p>sirishapagadala161@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="contact-form animate-on-scroll">
        <form onSubmit={handleSubmit} noValidate>
          <h3>Send Message</h3>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}

          <textarea
            name="message"
            placeholder="Type your Message..."
            rows="5"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && <span className="error">{errors.message}</span>}

          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}
