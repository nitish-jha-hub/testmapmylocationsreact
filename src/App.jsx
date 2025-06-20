import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Header from "./Header";
import Footer from "./Footer";

function Home() {
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
      {/* Font Awesome CDN */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />
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
    </>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
