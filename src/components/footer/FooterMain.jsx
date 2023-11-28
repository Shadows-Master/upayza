import { Link, NavLink } from "react-router-dom";
import { SocialMediaComponent } from "../index";

const FooterMain = () => {
  return (
    <footer id="site-footer" className="site-footer footer-v2">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <img
              src="../images/logo-light.svg"
              alt=""
              height={50}
              width={153}
            />
          </div>
        </div>
        <div className="space-60"></div>
        <div className="row justify-content-center">
          <div className="col-md-4 col-sm-6">
            <div className="contact-info box-style2 ft-contact-info">
              <div className="box-icon">
                <i className="flaticon-world-globe"></i>
              </div>
              <p>411 University St, Seattle, USA</p>
              <h6>Our Address</h6>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="contact-info box-style2 ft-contact-info">
              <div className="box-icon">
                <i className="flaticon-envelope"></i>
              </div>
              <a href="mailto:infos@upayza.com">
                <p>infos@upayza.com</p>
              </a>
              <h6>Our Mailbox</h6>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="contact-info box-style2 ft-contact-info">
              <div className="box-icon">
                <i className="flaticon-phone-1"></i>
              </div>
              <a href="tel:+17809083580">
                <p>1-780-908-3580</p>
              </a>
              <h6>Our Phone</h6>
            </div>
          </div>
        </div>
        <div className="space-65"></div>
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="footer-menu">
              <ul>
                <li>
                  <Link to={""}>Home</Link>
                </li>
                <li>
                  <NavLink to={"/company"}>Company</NavLink>
                </li>
                <li>
                  <NavLink to={"/services"}>Services</NavLink>
                </li>
                <li>
                  <NavLink to={"/who-we-serve"}>Who we serve</NavLink>
                </li>
                <li>
                  <NavLink className="menu-item-has-children" to={"/network"}>
                    Network
                  </NavLink>
                </li>
                <li>
                  <NavLink className="menu-item-has-children" to={"/contacts"}>
                    Contacts
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="space-20"></div>
            <p className="copyright-text v2">
              Copyright © {new Date().getFullYear()} UPAYZA Inc. All Rights
              Reserved.
            </p>
            <div className="space-26"></div>
            <SocialMediaComponent />
          </div>
        </div>
      </div>
    </footer>
  );
};
export default FooterMain;