import React from 'react';

export default function About() {
  return (
    <div className="container-fluid pt-5">
      <div className="row align-items-center mb-5">
        <div className="col-md-6 mb-4 mb-md-0">
          <img src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=600&q=80" alt="About VyqdaTech" className="img-fluid rounded shadow" />
        </div>
        <div className="col-md-6">
          <h1 className="mb-4">About VyqdaTech</h1>
          <p className="lead">Vyqda Technology is dedicated to providing innovative digital solutions, web development, SEO, and POS systems to help businesses grow in the digital world.</p>
          <p>Our team of experts leverages the latest technologies to deliver custom solutions tailored to your business needs. We believe in quality, transparency, and long-term partnerships with our clients.</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <h3 className="h5">Our Mission</h3>
          <p>To empower businesses with cutting-edge technology and digital strategies that drive growth and success in a rapidly evolving world.</p>
        </div>
        <div className="col-md-4">
          <h3 className="h5">Our Team</h3>
          <p>We are a group of passionate developers, designers, and strategists committed to delivering excellence and value to our clients.</p>
        </div>
        <div className="col-md-4">
          <h3 className="h5">Our Values</h3>
          <ul>
            <li>Innovation & Creativity</li>
            <li>Integrity & Transparency</li>
            <li>Customer Success</li>
            <li>Continuous Learning</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 