import React from "react";
// import "./Footer.css"; // Create and link a CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section newsletter">
          <h4>SUBSCRIBE TO OUR NEWSLETTER</h4>
          <p>
            Lorem Ipsum Dolor Sit Amet. Aut Ipsam Illum Et Nostrum Quidem Aut
            Necessibus Enim
          </p>
          <form className="subscribe-form">
            <input type="email" placeholder="Enter Your Email Address" />
            <button type="submit">SUBSCRIBE</button>
          </form>
        </div>

        <div className="footer-section about">
          <h4>ABOUT US</h4>
          <ul>
            <li>
              <a href="#story">Our Story</a>
            </li>
            <li>
              <a href="#blogs">Blogs</a>
            </li>
            <li>
              <a href="#careers">Careers</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
            <li>
              <a href="#help">Help & Support</a>
            </li>
          </ul>
        </div>

        <div className="footer-section services">
          <h4>OUR SERVICES</h4>
          <ul>
            <li>
              <a href="#book">Book Maali</a>
            </li>
            <li>
              <a href="#plantcare">Plant Day Care</a>
            </li>
            <li>
              <a href="#rent">Rent Plants</a>
            </li>
            <li>
              <a href="#plants">Plants & Pots</a>
            </li>
            <li>
              <a href="#tools">Gardening Tools</a>
            </li>
          </ul>
        </div>

        <div className="footer-section links">
          <h4>USEFUL LINKS</h4>
          <ul>
            <li>
              <a href="#account">My Account</a>
            </li>
            <li>
              <a href="#orders">Orders & Returns</a>
            </li>
            <li>
              <a href="#track">Track Order</a>
            </li>
            <li>
              <a href="#terms">Terms & Conditions</a>
            </li>
            <li>
              <a href="#privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="#refund">Return, Refund & Replacement Policy</a>
            </li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h4>GET IN TOUCH</h4>
          <p>
            Address: F-262, First Floor, Sushant Lok Phase-III, Sector-57,
            Gurgaon, Haryana, India 122003
          </p>
          <p>Call: +919958287272</p>
          <p>Email: care@chaperoneplants.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-chaperone">
          <h4>CHAPERONE</h4>
          <p>
            Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut
            necessitatibus enim ut internos accusantium.
          </p>
        </div>
        <div className="footer-social">
          <p>Follow us on</p>
          {/* <div className="social-icons">
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div> */}
        </div>
      </div>
      <div className="footer-copyright">
        <p>© 2023, chaperone.com All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
