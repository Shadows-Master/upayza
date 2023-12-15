import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="site-footer" className="site-footer footer-v3">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-4 mb-5 mb-lg-0">
            <div className="newsletter-title">
              <h2>Newsletter</h2>
            </div>
          </div>
          <div className="col-xl-9 col-lg-8">
            <form
              className="sub-form6 mc4wp-form"
              method="post"
              action="newsletter.php"
            >
              <div className="mc4wp-form-fields">
                <div className="subscribe-inner-form">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email Address"
                    required=""
                  />
                  <button type="submit" className="octf-btn octf-btn-second">
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="space-100"></div>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="widget-footer">
              <h5>Services</h5>
              <ul className="list-items">
                <li className="list-item">
                  <Link to={"/services/cross-border-money"}>
                    International Money Transfer
                  </Link>
                </li>
                <li className="list-item">
                  <Link to={"/services/interoperable-mobile-payment"}>
                    Interoperable Mobile Payment
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="widget-footer">
              <h5>Who we serve</h5>
              <ul className="list-items">
                <li className="list-item">
                  <Link to={"#"}>Banks</Link>
                </li>
                <li className="list-item">
                  <Link to={"#"}>Merchants</Link>
                </li>
                <li className="list-item">
                  <Link to={"#"}>Financial institutions</Link>
                </li>
                <li className="list-item">
                  <Link to={"#"}>Money Transfer Operators (MTOs)</Link>
                </li>
                <li className="list-item">
                  <Link to={"#"}>Mobile Network Operators (MNOs)</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="widget-footer">
              <h5>Company</h5>
              <ul className="list-items">
                <li className="list-item">
                  <Link to={"/company/about"}>About Us</Link>
                </li>
                <li className="list-item">
                  <Link to={"/company/our-team"}>Team Members</Link>
                </li>
                <li className="list-item">
                  <Link to={"#"}>Careers & Reviews</Link>
                </li>
                <li className="list-item">
                  <Link to={"/contacts"}>Contacts</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="widget-footer">
              <h5>Social</h5>
              <p>Find us on social media</p>
              <ul className="social-list">
                <li>
                  <a href="https://x.com" target="_self">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://facebook.com" target="_self">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com" target="_self">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a href="https://instagram" target="_self">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="space-70"></div>
        <div className="row">
          <div className="f-border-i6"></div>
          <div className="space-35"></div>
          <div className="col-md-6 mb-4 mb-md-0">
            <div className="flogo-i6">
              <Link to={""}>
                <img src={process.env.PUBLIC_URL + "images/logo.svg"} alt="" />
              </Link>
            </div>
          </div>
          <div className="col-md-6 text-left text-md-right align-self-center">
            <p className="copyright-text">
              {new Date().getFullYear()} © <strong> Upayza Inc</strong> All
              Rights Reserved. | <Link to={"#"}> Privacy notice </Link>
            </p>
          </div>
          <div className="space-35"></div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
