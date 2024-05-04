import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle form submission here
    console.log(formData);
    // Reset form fields after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    // Show success message
    setShowSuccess(true);
    // Hide success message after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  return (
    <div className="bg-warning container mt-5 mb-5 p-3 rounded mt-2 text-black shadow-lg fw-bold">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter your name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
            type="email" 
            placeholder="Enter your email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control 
            as="textarea" 
            rows={3} 
            placeholder="Enter your message" 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
          />
        </Form.Group>

        <Button variant="transparent" className="border border" type="submit">
          Submit
        </Button>
      </Form>
      {/* Success message */}
      {showSuccess && (
        <Alert variant="success" className="mt-3">
          Your message has been submitted successfully!
        </Alert>
      )}
    </div>
  );
};

export default ContactForm;
