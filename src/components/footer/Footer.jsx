import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="site-footer" className="site-footer footer-v3">
      <div className="container">
        <div className="space-100"></div>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="widget-footer">
              <h5>Products</h5>
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
                  <Link to={"#"}>Team Members</Link>
                </li>
                <li className="list-item">
                  <Link to={"#"}>Careers & Reviews</Link>
                </li>
                <li className="list-item">
                  <Link to={"/contacts"}>Get In Touch</Link>
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
                  <Link to={"#"} target="_self">
                    <i className="fab fa-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link to={"#"} target="_self">
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                </li>
                <li>
                  <Link to={"#"} target="_self">
                    <i className="fab fa-linkedin-in"></i>
                  </Link>
                </li>
                <li>
                  <Link to={"#"} target="_self">
                    <i className="fab fa-instagram"></i>
                  </Link>
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
              {new Date().getFullYear()} © <strong> Upayza Inc.</strong> All
              Rights Reserved. | <Link to={"/privacy"}> Privacy notice </Link>
            </p>
          </div>
          <div className="space-35"></div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
