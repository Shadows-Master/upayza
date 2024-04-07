import { Link } from "react-router-dom";
import { SocialMediaComponent } from "../index";
import React from "react";

const FooterMain = () => {
  return (
    <footer id="site-footer" className="site-footer footer-v2">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <img
              src={process.env.PUBLIC_URL + "../images/logo-light.svg"}
              alt=""
              height={50}
              width={153}
            />
          </div>
        </div>
        <div className="space-60"></div>
        <div className="row justify-content-center">
          <div className="col-md-6 col-sm-6">
            <div className="contact-info box-style2 ft-contact-info">
              <div className="box-icon">
                <i className="flaticon-world-globe"></i>
              </div>
              <p>
                10235 101 St NW, <br />
                Edmonton, AB, T5J3E8, Canada
              </p>
              <h6>Our Address</h6>
            </div>
          </div>
          <div className="col-md-6 col-sm-6">
            <div className="contact-info box-style2 ft-contact-info">
              <div className="box-icon">
                <i className="flaticon-envelope"></i>
              </div>
              <a href="mailto:contact@upayza.com">
                <p>contact@upayza.com</p>
              </a>
              <h6>Our Mailbox</h6>
            </div>
          </div>
          {/*<div className="col-md-4 col-sm-6">
            <div className="contact-info box-style2 ft-contact-info">
              <div className="box-icon">
                <i className="flaticon-phone-1"></i>
              </div>
              <a href="tel:+17809083580">
                <p>1-780-908-3580</p>
              </a>
              <h6>Our Phone</h6>
            </div>
          </div>*/}
        </div>
        <div className="space-65"></div>
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="footer-menu">
              <ul>
                <li>
                  <Link to={""}>HOME</Link>
                </li>
                <li>
                  <Link to={"/company/about"}>COMPANY</Link>
                </li>
                <li>
                  <Link to={"/services/cross-border-money"}>PRODUCTS</Link>
                </li>
                {/*<li>
                  <Link to={"/who-we-serve"}>Who we serve</Link>
                </li>*/}
                <li>
                  <Link className="menu-item-has-children" to={"/contacts"}>
                    CONNECT
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-20"></div>
            <p className="copyright-text v2">
              {new Date().getFullYear()} © <strong> Upayza Inc.</strong> All
              Rights Reserved. |{" "}
              <Link to={"/privacy"} className="text-white">
                Privacy notice{" "}
              </Link>
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
