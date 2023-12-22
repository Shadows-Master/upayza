import {
  Footer,
  Header,
  SVGIconMainOne,
  SVGIconMainTwo,
  SVGIconMainThree,
  SVGIconMainFour,
  SVGIconMainFive,
  SVGIconMainSix,
  SVGIconMainSeven,
} from "../components";

import React from "react";
import { Link } from "react-router-dom";

function AppView() {
  return (
    <div id="page" className="site">
      <Header />
      <div id="content" className="site-content">
        <section className="top-home6">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <div className="ot-heading">
                  <h2 className="main-heading">
                    Experience a universal payment ecosystem
                    <br />
                    enabling limitless cross-border transfers.{""}
                  </h2>
                </div>
                <div className="space-10"></div>
                <div className="space-5"></div>
              </div>
            </div>
          </div>
          <div className="container-fluid text-center">
            <img
              src="images/banner-home6.png"
              alt=""
              style={{ marginTop: "-13em", marginBottom: "16em" }}
            />
          </div>
        </section>
        <section className="about-home6">
          <div className="about-overlay-6 overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12 mb-5 mb-lg-0 align-self-center">
                <div className="about-img-6">
                  <img src="images/image1-home6.png" alt="" />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 align-self-center">
                <div className="about-desc-6">
                  <div className="ot-heading s2">
                    <h2 className="main-heading">
                      Creating a worldwide payment ecosystem
                    </h2>
                  </div>
                  <p className="text-justify">
                    Upayza is building a comprehensive global payment
                    infrastructure to enhance the payment experience. Through a
                    seamless connection to Upayzas' APIs, your business and
                    customers gain the capability to effortlessly send and
                    receive payments globally, instantly reaching every corner
                    of the world.
                    <br /> <br /> We provide convergence and interoperability.
                    Our mission is to empower our partners in scaling their
                    digital payment strategies
                  </p>
                  <div className="space-10"></div>
                  {/*<ul className="style-none">
                    <li>
                      <i className="fas fa-check"></i> Contribute to progress,
                      financial inclusion
                    </li>
                    <li>
                      <i className="fas fa-check"></i> break down borders,
                      enabling faster transactions
                    </li>
                    <li>
                      <i className="fas fa-check"></i> Offers innovative and
                      secure digital payment solutions
                    </li>

                    <li>
                      <i className="fas fa-check"></i> Streamlining financial
                      processes, enhancing security...
                    </li>
                  </ul>*/}
                  <div className="space-35"></div>
                  <div className="video-popup style-2">
                    <div className="btn-inner">
                      <video controls width="500" autoPlay loop={true} muted>
                        <source src="upayza.mp4" type="video/mp4" />
                        <p>
                          Sorry, Your Browser Doesn't Support Embedded Videos.
                          Here's the{" "}
                          <a href="https://vimeo.com/89727542">
                            Link to the video
                          </a>
                        </p>
                      </video>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*<section className="p-0">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 mb-5 mb-lg-0">
                <div className="ot-counter ot-counter3 ot-counter3-bg1">
                  <SVGIconMainOne />
                  <div>
                    <span className="num" data-to="25" data-time="2000">
                      0
                    </span>
                    <span>K</span>
                    <h6>Database everyday</h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-5 mb-lg-0">
                <div className="ot-counter ot-counter3">
                  <SVGIconMainTwo />
                  <div>
                    <span className="num" data-to="8760" data-time="2000">
                      0
                    </span>
                    <span>+</span>
                    <h6>Clients on worldwide</h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="ot-counter ot-counter3 ot-counter3-bg3">
                  <SVGIconMainThree />
                  <div>
                    <span className="num" data-to="3265" data-time="2000">
                      0
                    </span>
                    <span>+</span>
                    <h6>Transaction Done</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>*/}

        <section>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="space-10"></div>
                <div className="ot-heading s2 text-center">
                  <span>Who we serve</span>
                  <h2 className="main-heading">
                    We power payments for the world's fastest-growing businesses{" "}
                    <br />
                  </h2>
                </div>
                <div className="space-60"></div>
                <div className="space-5"></div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="icon-box-s3">
                  <div className="top-box">
                    <SVGIconMainFour />
                  </div>
                  <h5>Money Transfer Operators (MTOs)</h5>
                  <p>
                    Expand your cross-border corridors fast, securely and
                    cost-effectively.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="icon-box-s3">
                  <div className="top-box">
                    <SVGIconMainFive />
                  </div>
                  <h5>Mobile Network Operators (MNOs)</h5>
                  <p>
                    Expand into new markets quickly with a single API
                    integration.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="icon-box-s3 mb-lg-0">
                  <div className="top-box">
                    <SVGIconMainSix />
                  </div>
                  <h5>Banks</h5>
                  <p>
                    Connect to our payment network for endless opportunities in
                    just one plug-in experience.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="icon-box-s3">
                  <div className="top-box">
                    <SVGIconMainOne />
                  </div>
                  <h5>Financial institutions</h5>
                  <p>
                    Accelerate your business growth by accessing new digital
                    banking channels through our network.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="icon-box-s3 mb-lg-0">
                  <div className="top-box">
                    <SVGIconMainTwo />
                  </div>
                  <h5>Merchants</h5>
                  <p>
                    Easy way to do business across borders and gain instant
                    access to untapped customer segments.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pricing-table-i6">
          <div className="overlay"></div>
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-12 mb-5 mb-xl-0">
                <div className="ot-heading s2">
                  <span>Our Products</span>
                  {/*<h3 className="main-heading">Start With An Affordable</h3>*/}
                </div>
                <div className="space-10"></div>
                <p className="mr-70 text-justify">
                  By accessing our API capabilities, you can accelerate time to
                  market, expand your offering, and implement payments in
                  multiple countries with just a single integration.
                </p>
                <div className="space-55"></div>
                <div className="ot-button">
                  {/*<a href="#" className="octf-btn octf-btn-second btn-round">
                    all products
                  </a>*/}
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                <div className="serv-box s1">
                  <div className="icon-main">
                    <span className="flaticon-tablet"></span>
                  </div>
                  <div className="content-box">
                    <h5>International Money Transfer</h5>
                    <div>
                      Upayza's platform simplifies global payments, making money
                      transfers across borders instant, easier and more
                      efficient.
                      <ul>
                        <li>
                          <Link to={"#"}>Global remittances</Link>
                        </li>
                        <li>
                          <Link to={"#"}>Easy Integration</Link>
                        </li>
                        <li>
                          <Link to={"#"}>Business Payouts</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                <div className="serv-box s1">
                  <div className="icon-main">
                    <span className="flaticon-report"></span>
                  </div>
                  <div className="content-box">
                    <h5>Interoperable Mobile Payment Switch</h5>
                    <div className="text-justify">
                      Our revolutionary interoperable mobile payment switch is
                      an innovation that creates an open system for mobile
                      payment providers.
                      <ul>
                        <li>
                          <Link to={"#"}>Monitored Micro-payments</Link>
                        </li>
                        <li>
                          <Link to={"#"}>Enhanced Governance</Link>
                        </li>
                        <li>
                          <Link to={"#"}>Ensured Stability</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*
        <section className="testimonial-i6">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mb-5 mb-lg-0 align-self-center">
                <div className="testi-i6-img">
                  <img src="images/image2-home6.png" alt="" />
                </div>
              </div>
              <div className="col-lg-6 align-self-center">
                <div className="ot-heading s2">
                  <span>Testimonials</span>
                  <h2 className="main-heading">
                    Trusted From Over +3K Happy Clients
                  </h2>
                </div>
                <div className="space-35"></div>
                <div className="testi-simple-i6">
                  <p>
                    “I’m glad I decided to work with you. It’s really great how
                    easy your websites are to update and manage. I never have
                    any problem at all.”
                  </p>
                  <h6>Tom Black</h6>
                  <span>CEO Founder at OceanThemes</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="client-i6">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="partners">
                  <div className="owl-carousel owl-theme home-client-carousel">
                    <div className="partners-slide">
                      <a href="" className="client-logo">
                        <figure className="partners-slide-inner">
                          <img
                            className="partners-slide-image"
                            src="images/client-logos/client1.svg"
                            alt=""
                          />
                        </figure>
                      </a>
                    </div>
                    <div className="partners-slide">
                      <a href="#" className="client-logo">
                        <figure className="partners-slide-inner">
                          <img
                            className="partners-slide-image"
                            src="images/client-logos/client2.svg"
                            alt=""
                          />
                        </figure>
                      </a>
                    </div>
                    <div className="partners-slide">
                      <a href="#" className="client-logo">
                        <figure className="partners-slide-inner">
                          <img
                            className="partners-slide-image"
                            src="images/client-logos/client3.svg"
                            alt=""
                          />
                        </figure>
                      </a>
                    </div>
                    <div className="partners-slide">
                      <a href="#" className="client-logo">
                        <figure className="partners-slide-inner">
                          <img
                            className="partners-slide-image"
                            src="images/client-logos/client4.png"
                            alt=""
                          />
                        </figure>
                      </a>
                    </div>
                    <div className="partners-slide">
                      <a href="#" className="client-logo">
                        <figure className="partners-slide-inner">
                          <img
                            className="partners-slide-image"
                            src="images/client-logos/client5.svg"
                            alt=""
                          />
                        </figure>
                      </a>
                    </div>
                    <div className="partners-slide">
                      <a href="#" className="client-logo">
                        <figure className="partners-slide-inner">
                          <img
                            className="partners-slide-image"
                            src="images/client-logos/client6.svg"
                            alt=""
                          />
                        </figure>
                      </a>
                    </div>
                    <div className="partners-slide">
                      <a href="#" className="client-logo">
                        <figure className="partners-slide-inner">
                          <img
                            className="partners-slide-image"
                            src="images/client-logos/client1.svg"
                            alt=""
                          />
                        </figure>
                      </a>
                    </div>
                    <div className="partners-slide">
                      <a href="#" className="client-logo">
                        <figure className="partners-slide-inner">
                          <img
                            className="partners-slide-image"
                            src="images/client-logos/client2.svg"
                            alt=""
                          />
                        </figure>
                      </a>
                    </div>
                    <div className="partners-slide">
                      <a href="#" className="client-logo">
                        <figure className="partners-slide-inner">
                          <img
                            className="partners-slide-image"
                            src="images/client-logos/client3.svg"
                            alt=""
                          />
                        </figure>
                      </a>
                    </div>
                    <div className="partners-slide">
                      <a href="#" className="client-logo">
                        <figure className="partners-slide-inner">
                          <img
                            className="partners-slide-image"
                            src="images/client-logos/client4.png"
                            alt=""
                          />
                        </figure>
                      </a>
                    </div>
                    <div className="partners-slide">
                      <a href="#" className="client-logo">
                        <figure className="partners-slide-inner">
                          <img
                            className="partners-slide-image"
                            src="images/client-logos/client5.svg"
                            alt=""
                          />
                        </figure>
                      </a>
                    </div>
                    <div className="partners-slide">
                      <a href="#" className="client-logo">
                        <figure className="partners-slide-inner">
                          <img
                            className="partners-slide-image"
                            src="images/client-logos/client6.svg"
                            alt=""
                          />
                        </figure>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>*/}
      </div>
      <Footer />
      {/* #site-footer */}
    </div>
  );
}

export default AppView;
