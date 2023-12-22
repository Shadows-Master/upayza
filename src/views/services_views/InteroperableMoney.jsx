import { Link } from "react-router-dom";
import { InteroperableMobileTabs } from "../../components/tabs";

const InteroperableMobile = () => {
  return (
    <div id="content" className="site-content">
      <div className="page-header flex-middle">
        <div className="container">
          <div className="inner flex-middle">
            <h1 className="page-title">Interoperable Mobile Payment</h1>
            <ul id="breadcrumbs" className="breadcrumbs none-style">
              <li>
                <Link to={""}>Home</Link>
              </li>
              <li className="active">Interoperable Mobile Payment</li>
            </ul>
          </div>
        </div>
      </div>
      <section className="app-offer">
        <div className="overlay overlay-image"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img src="../images/interoperable.png" alt="" />
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="right-about-v4">
                <div className="ot-heading">
                  <span>Overview</span>
                  <h2 className="main-heading">
                    Revolutionary interoperable <br />
                    mobile payment switch
                  </h2>
                </div>
                <div className="space-5"></div>
                <p className="text-justify">
                  Our innovative mobile payment switch fosters interoperability
                  among providers, creating an open system for seamless
                  transactions. With a centralized ledger, it integrates users,
                  businesses, networks, utilities, and government agencies.
                  Regulators play a crucial role in efficient clearing,
                  switching, and monitoring of mobile payments.
                </p>
                <p>
                  <em className="text-dark text-justify">
                    <strong>
                      Operating 24x7, it processes financial and non-financial
                      transactions in real-time, promoting swift and secure
                      interbank and inter-processor mobile payments.
                    </strong>
                  </em>
                </p>
                <div className="video-popup style-2">
                  {/*<div className="btn-inner">
                    <a
                      className="btn-play"
                      href="https://www.youtube.com/watch?v=lfDZJqSrIuk"
                    >
                      <i className="flaticon-play"></i>
                      <span className="circle-1"></span>
                      <span className="circle-2"></span>
                    </a>
                  </div>
                  <span>video showcase</span>*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*<section className="counter-v5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-3 col-lg-6 no-padding">
              <img src="../images/fun-fact1.jpg" alt="" className="img-full" />
            </div>
            <div className="col-xl-3 col-lg-6 no-padding align-self-center">
              <div className="ot-counter2">
                <div className="s-num">
                  <span className="num" data-to="15" data-time="2000">
                    0
                  </span>
                  <span>+</span>
                </div>
                <h6>Countries Worldwide</h6>
                <p>
                  To succeed, every software solution must be deeply integrated
                  into the existing tech environment...
                </p>
                <a href="#" className="btn-details">
                  <i className="flaticon-right-arrow-1"></i> LEARN MORE
                </a>
                <div className="b-num">15+</div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 order-lg-last no-padding">
              <img src="../images/fun-fact2.jpg" alt="" className="img-full" />
            </div>
            <div className="col-xl-3 col-lg-6 no-padding order-xl-last align-self-center">
              <div className="ot-counter2">
                <div className="s-num">
                  <span className="num" data-to="23" data-time="2000">
                    0
                  </span>
                  <span>k</span>
                </div>
                <h6>Happy Customers</h6>
                <p>
                  To succeed, every software solution must be deeply integrated
                  into the existing tech environment...
                </p>
                <a href="#" className="btn-details">
                  <i className="flaticon-right-arrow-1"></i> LEARN MORE
                </a>
                <div className="b-num">23k</div>
              </div>
            </div>
          </div>
        </div>
      </section>*/}
      <section className="mobile-app">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="ot-heading">
                <span>Benefits</span>
                <h2 className="main-heading">
                  Interoperable Mobile Payment Benefits
                </h2>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-4 align-self-center">
              <div className="icon-box-s2 s3 app-benefits-left">
                <div className="icon-main">
                  <span className="flaticon-laptop"></span>
                </div>
                <div className="content-box">
                  <h5>Facilitated Financial Inclusion</h5>
                  <p className="text-justify">
                    Allows both banked and unbanked users to participate in the
                    financial system, promoting financial inclusion.
                  </p>
                </div>
              </div>
              <div className="icon-box-s2 s3 app-benefits-left ml-0 mr-0">
                <div className="icon-main">
                  <span className="flaticon-seo-and-web"></span>
                </div>
                <div className="content-box">
                  <h5>Enhanced Governance</h5>
                  <p className="text-justify">
                    Provides full management and control over the entire mobile
                    payment’s ecosystem.
                  </p>
                </div>
              </div>
              <div className="icon-box-s2 s3 app-benefits-left">
                <div className="icon-main">
                  <span className="flaticon-process"></span>
                </div>
                <div className="content-box">
                  <h5>Ensured Stability</h5>
                  <p className="text-justify">
                    Offers full control over the financial stability and
                    compliance of mobile payment participants.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 align-self-center">
              <div className="app-benefits-img text-center">
                <img src="../images/interoperable.png" alt="" />
              </div>
            </div>
            <div className="col-lg-4 align-self-center">
              <div className="icon-box-s2 s1 app-benefits-right">
                <div className="icon-main">
                  <span className="flaticon-data-1"></span>
                </div>
                <div className="content-box">
                  <h5>Monitored Micro-payments </h5>
                  <p className="text-justify">
                    Enables micro-payments monitoring for efficient microfinance
                    statistical data collection.
                  </p>
                </div>
              </div>
              <div className="icon-box-s2 s1 app-benefits-right ml-0 mr-0">
                <div className="icon-main">
                  <span className="flaticon-code-2"></span>
                </div>
                <div className="content-box">
                  <h5>Monopoly Prevention</h5>
                  <p className="text-justify">
                    Enables an interoperable system preventing monopolies in
                    mobile payment services.
                  </p>
                </div>
              </div>
              <div className="icon-box-s2 s1 app-benefits-right">
                <div className="icon-main">
                  <span className="flaticon-report"></span>
                </div>
                <div className="content-box">
                  <h5>Trading Systems</h5>
                  <p className="text-justify">
                    Allows both banked and unbanked users to participate in the
                    financial system, promoting financial inclusion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="service-web-video">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-5 col-lg-6">
              <div className="tab-video">
                <div className="ot-heading">
                  <span>Features</span>
                  {/* <h2 className="main-heading">
                    We Organize Our <br />
                    Production Process
                  </h2>*/}
                </div>
                <div className="space-15"></div>
                <InteroperableMobileTabs />
              </div>
            </div>
            <div className="offset-xl-1 col-xl-6 col-lg-6 split-right-img">
              <div className="video-popup">
                {/*<div className="btn-inner">
                  <a className="btn-play" href="https://vimeo.com/94686522">
                    <i className="flaticon-play"></i>
                    <span className="circle-1"></span>
                    <span className="circle-2"></span>
                  </a>
                </div>*/}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="app-industris">
        {/*<div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="s-counter4">
                <div className="row">
                  <div className="col-lg-3 col-md-6 col-sm-6 text-center mb-4 mb-lg-0">
                    <div className="ot-counter text-white">
                      <div>
                        <span className="num" data-to="330" data-time="2000">
                          0
                        </span>
                        <span>+</span>
                      </div>
                      <h6 className="text-white">active Clients</h6>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 text-center mb-4 mb-lg-0">
                    <div className="ot-counter text-white">
                      <div>
                        <span className="num" data-to="850" data-time="2000">
                          0
                        </span>
                        <span>+</span>
                      </div>
                      <h6 className="text-white">projects done</h6>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 text-center mb-4 mb-sm-0">
                    <div className="ot-counter text-white">
                      <div>
                        <span className="num" data-to="25" data-time="2000">
                          0
                        </span>
                        <span>+</span>
                      </div>
                      <h6 className="text-white">team advisors</h6>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 text-center">
                    <div className="ot-counter text-white">
                      <div>
                        <span className="num" data-to="10" data-time="2000">
                          0
                        </span>
                        <span>+</span>
                      </div>
                      <h6 className="text-white">Glorious Years</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>*/}
        <div className="space-10"></div>
      </section>
    </div>
  );
};

export default InteroperableMobile;
