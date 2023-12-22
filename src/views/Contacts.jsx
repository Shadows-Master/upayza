import { Link } from "react-router-dom";

import React from "react";

function Contacts() {
  return (
    <>
      <div id="content" className="site-content">
        <div className="page-header flex-middle">
          <div className="container">
            <div className="inner flex-middle">
              <h1 className="page-title">CONNECT</h1>
              <ul id="breadcrumbs" className="breadcrumbs none-style">
                <li>
                  <Link to={""}>Home</Link>
                </li>
                <li className="active">Contact</li>
              </ul>
            </div>
          </div>
        </div>
        <section className="contact-page">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="contact-left">
                  <div className="ot-heading">
                    {" "}
                    <h2 className="main-heading">
                      Empower your business to transcend limits.
                    </h2>
                  </div>
                  <div className="space-5"></div>
                  <p>
                    Drop your questions or inquiries; our team will get in touch
                    with you shortly.Thank you!"
                  </p>
                  <div className="contact-info box-style1">
                    <i className="flaticon-world-globe"></i>
                    <div className="info-text">
                      <h6>Our Address:</h6>
                      <p>10235 101 St NW, Edmonton, AB, T5J3E8, Canada</p>
                    </div>
                  </div>
                  <div className="contact-info box-style1">
                    <i className="flaticon-envelope"></i>
                    <div className="info-text">
                      <h6>Our Mailbox:</h6>
                      <a href="mailto:contact@upayza.com">
                        <p>contact@upayza.com</p>
                      </a>
                    </div>
                  </div>
                  {/*<div className="contact-info box-style1">
                    <i className="flaticon-phone-1"></i>
                    <div className="info-text">
                      <h6>Our Phone:</h6>
                      <a href="tel:+17809083580">
                        <p>+1-780-908-3580</p>
                      </a>
                    </div>
                  </div>*/}
                </div>
              </div>
              <div className="col-lg-6">
                <form
                  id="ajax-form"
                  name="ajax-form"
                  action="https://templates.thememodern.com/engitech/contact.php"
                  method="post"
                  className="wpcf7"
                >
                  <div className="main-form">
                    <h2>Ready to Get Started?</h2>
                    <p className="font14">
                      Your email address will not be published. Required fields
                      are marked *
                    </p>
                    <p>
                      <label htmlFor="name">
                        {" "}
                        <span className="error" id="err-name">
                          please enter name
                        </span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value=""
                        size="40"
                        className=""
                        aria-required="true"
                        aria-invalid="false"
                        placeholder="Your Name *"
                        required=""
                      />
                    </p>
                    <p>
                      <label htmlFor="email">
                        <span className="error" id="err-email">
                          please enter e-mail
                        </span>
                        <span className="error" id="err-emailvld">
                          e-mail is not a valid format
                        </span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value=""
                        size="40"
                        className=""
                        aria-required="true"
                        aria-invalid="false"
                        placeholder="Your Email *"
                        required=""
                      />
                    </p>
                    <p>
                      <label htmlFor="message"></label>
                      <textarea
                        name="message"
                        id="message"
                        cols="40"
                        rows="10"
                        className=""
                        aria-invalid="false"
                        placeholder="Message..."
                        required=""
                      ></textarea>
                    </p>
                    <p>
                      <button
                        type="submit"
                        id="send"
                        className="octf-btn octf-btn-light"
                      >
                        Send Message
                      </button>
                    </p>
                    <div className="clear"></div>
                    <div className="error" id="err-form">
                      There was a problem validating the form please check!
                    </div>
                    <div className="error" id="err-timedout">
                      The connection to the server timed out!
                    </div>
                    <div className="error" id="err-state"></div>
                  </div>
                </form>
                <div className="clear"></div>
                <div id="ajaxsuccess">Successfully sent!!</div>
                <div className="clear"></div>
              </div>
            </div>
          </div>
        </section>
        <div className="no-padding">
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2370.7204968576743!2d-113.49578168704119!3d53.54490467223229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a0224f40266ecb%3A0xa54ffc483449f5a1!2s10235%20101%20St%20NW%2C%20Edmonton%2C%20AB%20T5J%203E8%2C%20Canada!5e0!3m2!1sfr!2scm!4v1703271508827!5m2!1sfr!2scm"
              height="500"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contacts;
