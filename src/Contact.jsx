import React from 'react';

export default function Contact() {
  return (
    <div className="container-fluid pt-5">
      <div className="row align-items-center mb-5">
        <div className="col-md-6 mb-4 mb-md-0">
          <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80" alt="Contact VyqdaTech" className="img-fluid rounded shadow w-100" />
        </div>
        <div className="col-md-6">
          <h1 className="mb-4">Contact Us</h1>
          <p className="lead">We would love to hear from you! Reach out to us using the information below or fill out the contact form.</p>
          <ul className="list-unstyled mb-4">
            <li><i className="fas fa-map-marker-alt me-2"></i> 123 Tech Street, Digital City</li>
            <li><i className="fas fa-phone me-2"></i> +91 (979) 830-5771</li>
            <li><i className="fas fa-envelope me-2"></i> info@vyqda.com</li>
          </ul>
        </div>
      </div>
      <div className="row mb-5">
        <div className="col-12">
          <form className="w-100">
            <input type="text" className="form-control w-100 mb-3" placeholder="Your Name" required />
            <input type="email" className="form-control w-100 mb-3" placeholder="Your Email" required />
            <textarea className="form-control w-100 mb-3" rows="4" placeholder="Your Message" required></textarea>
            <button type="submit" className="btn btn-primary w-100">Send Message</button>
          </form>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <h3 className="h5 mb-3">Find Us Here</h3>
          <div className="rounded overflow-hidden shadow w-100" style={{maxWidth: '100%'}}>
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=78.0000%2C27.1670%2C78.0060%2C27.1720&layer=mapnik"
              width="100%"
              height="250"
              title="VyqdaTech Location Map"
              style={{ border: 'none', width: '100%' }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
} 