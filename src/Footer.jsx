import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-3" id="contact">
      <div className="container-fluid">
        <div className="row g-4 mb-4">
          <div className="col-12 col-md-4">
            <h3 className="h5 mb-3 border-bottom border-primary pb-2">About VyqdaTech</h3>
            <p>
              We are a technology solutions provider dedicated to helping
              businesses grow through innovative digital solutions.
            </p>
            <div className="d-flex gap-2">
              <a href="#" className="d-flex align-items-center justify-content-center bg-secondary bg-opacity-25 rounded-circle text-white" style={{width: 40, height: 40}}><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="d-flex align-items-center justify-content-center bg-secondary bg-opacity-25 rounded-circle text-white" style={{width: 40, height: 40}}><i className="fab fa-twitter"></i></a>
              <a href="#" className="d-flex align-items-center justify-content-center bg-secondary bg-opacity-25 rounded-circle text-white" style={{width: 40, height: 40}}><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="d-flex align-items-center justify-content-center bg-secondary bg-opacity-25 rounded-circle text-white" style={{width: 40, height: 40}}><i className="fab fa-instagram"></i></a>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <h3 className="h5 mb-3 border-bottom border-primary pb-2">Quick Links</h3>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-decoration-none text-secondary">Home</Link></li>
              <li><Link to="/services" className="text-decoration-none text-secondary">Services</Link></li>
              <li><Link to="/about" className="text-decoration-none text-secondary">About</Link></li>
              <li><Link to="/contact" className="text-decoration-none text-secondary">Contact</Link></li>
            </ul>
          </div>
          <div className="col-12 col-md-4">
            <h3 className="h5 mb-3 border-bottom border-primary pb-2">Contact Us</h3>
            <p className="mb-2">
              <i className="fas fa-map-marker-alt me-2"></i> 123 Tech Street, Digital City
            </p>
            <p className="mb-2"><i className="fas fa-phone me-2"></i> +91 (979) 830-5771</p>
            <p className="mb-2"><i className="fas fa-envelope me-2"></i> info@vyqda.com</p>
          </div>
        </div>
        {/* Search Widget */}
        <div className="bg-secondary bg-opacity-10 rounded p-4 mb-3">
          <div id="search-widget"></div>
        </div>
        <div className="text-center text-secondary small">
          <p className="mb-0">&copy; 2025 Vyqda Technology. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
} 