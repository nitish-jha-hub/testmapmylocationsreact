import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-dark text-white py-3 shadow">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <div className="fs-3 fw-bold">Vyqda<span className="text-primary">Tech</span></div>
        <nav>
          <ul className="nav">
            <li className="nav-item"><Link className="nav-link text-white" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to="/services">Services</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to="/about">About</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
} 