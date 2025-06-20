import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://artstoreindia.org/search-widget/search-widget.js?id=N8xba8rJ-BpOVJ0a_bEgE6lpWzGxNbCTy4g3unzfURM";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      {/* Bootstrap CDN */}
      {/* Font Awesome CDN */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />
      {/* Header */}
      <header className="bg-dark text-white py-3 shadow">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <div className="fs-3 fw-bold">Vyqda<span className="text-primary">Tech</span></div>
          <nav>
            <ul className="nav">
              <li className="nav-item"><a className="nav-link text-white" href="#">Home</a></li>
              <li className="nav-item"><a className="nav-link text-white" href="#services">Services</a></li>
              <li className="nav-item"><a className="nav-link text-white" href="#locations">Locations</a></li>
              <li className="nav-item"><a className="nav-link text-white" href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
      {/* Hero Section */}
      <section className="bg-primary bg-gradient text-white text-center py-5">
        <div className="container-fluid">
          <h1 className="display-4 mb-3">Innovative Digital Solutions for Your Business</h1>
          <p className="lead mb-4 mx-auto" style={{maxWidth: 800}}>
            Vyqda Technology provides cutting-edge web development, SEO services,
            and POS solutions to help your business thrive in the digital world.
          </p>
          <a href="#contact" className="btn btn-danger btn-lg">Get Started</a>
        </div>
      </section>
      {/* Services Section */}
      <section className="py-5 bg-white" id="services">
        <div className="container-fluid">
          <div className="text-center mb-5">
            <h2 className="display-6 fw-bold border-bottom border-primary d-inline-block pb-2">Our Services</h2>
          </div>
          <div className="row g-4">
            <div className="col-12 col-md-4">
              <div className="bg-light p-4 rounded text-center h-100 shadow-sm">
                <div className="mb-3">
                  <i className="fas fa-code fa-3x text-primary"></i>
                </div>
                <h3 className="h5 mb-3">Web Development</h3>
                <p>
                  Custom websites and web applications tailored to your business
                  needs with modern technologies and responsive design.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="bg-light p-4 rounded text-center h-100 shadow-sm">
                <div className="mb-3">
                  <i className="fas fa-search fa-3x text-primary"></i>
                </div>
                <h3 className="h5 mb-3">SEO Services</h3>
                <p>
                  Comprehensive search engine optimization to improve your online
                  visibility and drive targeted traffic to your website.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="bg-light p-4 rounded text-center h-100 shadow-sm">
                <div className="mb-3">
                  <i className="fas fa-cash-register fa-3x text-primary"></i>
                </div>
                <h3 className="h5 mb-3">POS Solutions</h3>
                <p>
                  Advanced Point of Sale systems to streamline your business
                  operations and enhance customer experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Map Section */}
      <section className="py-5 bg-light" id="locations">
        <div className="container-fluid">
          <div className="text-center mb-5">
            <h2 className="display-6 fw-bold border-bottom border-primary d-inline-block pb-2">Our Locations</h2>
          </div>
          <div className="rounded overflow-hidden shadow" style={{maxWidth: '100%'}}>
            <iframe
              src="https://artstoreindia.org/client-all-locations?client=59PX3wWdsYuaCYxt2YygXOwOFgGRRg8q_kFrPeP-vWo&zoom=10&distance=km"
              width="100%"
              height="600px"
              title="Store Locator Map"
              allow="geolocation"
              style={{ border: 'none', width: '100%' }}
            ></iframe>
          </div>
        </div>
      </section>
      {/* Footer */}
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
                <li><a href="#" className="text-decoration-none text-secondary">Home</a></li>
                <li><a href="#services" className="text-decoration-none text-secondary">Services</a></li>
                <li><a href="#locations" className="text-decoration-none text-secondary">Locations</a></li>
                <li><a href="#contact" className="text-decoration-none text-secondary">Contact</a></li>
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
    </>
  );
}

export default App;
