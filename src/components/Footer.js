import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';


const Footer = () => {
    return (
      <footer className="bg-dark text-light py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-3 mb-md-0">
              <h5>About Us</h5>
              <p className="text-muted">
                We are a company dedicated to providing excellent services and products to our customers.
              </p>
            </div>
            <div className="col-md-4 mb-3 mb-md-0">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-muted">Home</a></li>
                <li><a href="#" className="text-muted">Services</a></li>
                <li><a href="#" className="text-muted">Products</a></li>
                <li><a href="#" className="text-muted">Contact</a></li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5>Connect With Us</h5>
              <div className="d-flex">
                <a href="#" className="text-light me-3"><FaFacebook size={24} /></a>
                <a href="#" className="text-light me-3"><FaTwitter size={24} /></a>
                <a href="#" className="text-light me-3"><FaInstagram size={24} /></a>
                <a href="#" className="text-light"><FaLinkedin size={24} /></a>
              </div>
            </div>
          </div>
          <hr className="my-4" />
          <div className="row">
            <div className="col-md-6 text-center text-md-start">
              <p className="mb-0">&copy; 2023 Your Company Name. All rights reserved.</p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <a href="#" className="text-muted me-2">Privacy Policy</a>
              <a href="#" className="text-muted">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    );
  };

  export default Footer