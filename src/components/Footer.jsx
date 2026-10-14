import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram } from 'lucide-react';

function Footer() {
  return (
    <footer>
      <div className="subscribe-bar">
        <strong>SIGN UP FOR OUR DAILY INSIDER</strong>
        <input type="email" placeholder="Enter your email" />
        <button type="button" className="btn">
          Subscribe
        </button>
      </div>

      <div className="footer-main">
        <div className="footer-columns">
          <div>
            <h3>Explore</h3>
            <Link to="/">Home</Link>
            <Link to="/post">Questions</Link>
            <Link to="/">Articles</Link>
            <Link to="/">Tutorials</Link>
          </div>

          <div>
            <h3>Support</h3>
            <a href="#">FAQs</a>
            <a href="#">Help</a>
            <a href="#">Contact Us</a>
          </div>

          <div>
            <h3>Stay connected</h3>
            <div className="social">
              <Facebook />
              <Twitter />
              <Instagram />
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>DEV@Deakin 2026</p>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms</a>
          <a href="#">Code of Conduct</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
