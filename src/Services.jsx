import React from 'react';

export default function Services() {
  return (
    <div className="container-fluid pt-5">
      <h1 className="mb-4">Our Services</h1>
      <div className="row g-4">
        <div className="col-md-4">
          <div className="bg-light p-4 rounded text-center h-100 shadow-sm">
            <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80" alt="Web Development" className="img-fluid rounded mb-3" style={{height: 180, objectFit: 'cover', width: '100%'}} />
            <i className="fas fa-code fa-3x text-primary mb-3"></i>
            <h3 className="h5 mb-3">Web Development</h3>
            <p>Custom websites and web applications tailored to your business needs with modern technologies and responsive design.</p>
            <ul className="text-start mx-auto" style={{maxWidth: 300}}>
              <li>Responsive & Mobile-First Design</li>
              <li>Modern JavaScript Frameworks</li>
              <li>eCommerce & CMS Solutions</li>
              <li>API Integration</li>
            </ul>
          </div>
        </div>
        <div className="col-md-4">
          <div className="bg-light p-4 rounded text-center h-100 shadow-sm">
            <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="SEO Services" className="img-fluid rounded mb-3" style={{height: 180, objectFit: 'cover', width: '100%'}} />
            <i className="fas fa-search fa-3x text-primary mb-3"></i>
            <h3 className="h5 mb-3">SEO Services</h3>
            <p>Comprehensive search engine optimization to improve your online visibility and drive targeted traffic to your website.</p>
            <ul className="text-start mx-auto" style={{maxWidth: 300}}>
              <li>On-Page & Off-Page SEO</li>
              <li>Keyword Research</li>
              <li>Content Optimization</li>
              <li>Analytics & Reporting</li>
            </ul>
          </div>
        </div>
        <div className="col-md-4">
          <div className="bg-light p-4 rounded text-center h-100 shadow-sm">
            <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80" alt="POS Solutions" className="img-fluid rounded mb-3" style={{height: 180, objectFit: 'cover', width: '100%'}} />
            <i className="fas fa-cash-register fa-3x text-primary mb-3"></i>
            <h3 className="h5 mb-3">POS Solutions</h3>
            <p>Advanced Point of Sale systems to streamline your business operations and enhance customer experience.</p>
            <ul className="text-start mx-auto" style={{maxWidth: 300}}>
              <li>Inventory Management</li>
              <li>Sales Analytics</li>
              <li>Multi-Store Support</li>
              <li>Customer Loyalty Programs</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 