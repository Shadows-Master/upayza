import { Link } from "react-router-dom";
import { CrossBorderMoneyTabs } from "../../components/tabs";

const CrossBorderMoney = () => {
  return (
    <div id="content" className="site-content">
      <div className="page-header flex-middle">
        <div className="container">
          <div className="inner flex-middle">
            <h1 className="page-title">Cross-border Money Transfer</h1>
            <ul id="breadcrumbs" className="breadcrumbs none-style">
              <li>
                <Link to={""}>Home</Link>
              </li>
              <li className="active">Cross-border Money Transfer</li>
            </ul>
          </div>
        </div>
      </div>
      <section className="mobile-app">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="ot-heading">
                <span>Benefits</span>
                <h2 className="main-heading">
                  Cross-border Money Transfer Benefits
                </h2>
              </div>
            </div>
          </div>
          <div className="row mt-md-5">
            <div className="col-lg-4 align-self-center">
              <div className="icon-box-s2 s3 app-benefits-left">
                <div className="icon-main">
                  <span className="flaticon-laptop"></span>
                </div>
                <div className="content-box">
                  <h5>Real Time</h5>
                  <p className="text-justify">
                    Our real-time payment processing technology is designed to
                    provide an unparalleled level of speed and convenience to
                    our users.
                  </p>
                </div>
              </div>
              <div className="icon-box-s2 s3 app-benefits-left ml-0 mr-0">
                <div className="icon-main">
                  <span className="flaticon-seo-and-web"></span>
                </div>
                <div className="content-box">
                  <h5>Robust</h5>
                  <p className="text-justify">
                    Our network is processing 180 million transactions per year,
                    and is built on strong local knowledge and direct
                    connections even in the hard-to-reach markets.
                  </p>
                </div>
              </div>
              <div className="icon-box-s2 s3 app-benefits-left">
                <div className="icon-main">
                  <span className="flaticon-process"></span>
                </div>
                <div className="content-box">
                  <h5>Direct</h5>
                  <p className="text-justify">
                    UPAYZA network is founded on strong direct connections which
                    means better transaction success rate, streamlined issue
                    resolution and a frictionless payment experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 align-self-center">
              <div className="app-benefits-img text-center">
                <img
                  src={process.env.PUBLIC_URL + "../images/crossBorder.png"}
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-4 align-self-center">
              <div className="icon-box-s2 s1 app-benefits-right">
                <div className="icon-main">
                  <span className="flaticon-data-1"></span>
                </div>
                <div className="content-box">
                  <h5>Transparent </h5>
                  <p className="text-justify">
                    We provide real-time reporting including instant payment
                    confirmation and enriched transaction information.
                  </p>
                </div>
              </div>
              <div className="icon-box-s2 s1 app-benefits-right ml-0 mr-0">
                <div className="icon-main">
                  <span className="flaticon-code-2"></span>
                </div>
                <div className="content-box">
                  <h5>Scalable</h5>
                  <p className="text-justify">
                    We’re constantly adding new partners and payment methods so
                    we can scale, adjust and customize our solutions for you.
                  </p>
                </div>
              </div>
              <div className="icon-box-s2 s1 app-benefits-right">
                <div className="icon-main">
                  <span className="flaticon-report"></span>
                </div>
                <div className="content-box">
                  <h5>Inclusive</h5>
                  <p className="text-justify">
                    Our network is fully interoperable and optimized for local
                    relevance and most popular payment methods in Africa
                    country.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="counter-v5">
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
      </section>
      <section className="app-offer">
        <div className="overlay overlay-image"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img src="../images/crossBorder.png" alt="" />
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="right-about-v4">
                <div className="ot-heading">
                  <span>Overview</span>
                  <h2 className="main-heading">
                    Instant cross-border <br />
                    transfers for your customers
                  </h2>
                </div>
                <div className="space-5"></div>
                <p className="text-justify">
                  Upayza's platform simplifies global payments, making money
                  transfers across borders instant, easier and more efficient.
                  We simplify transactions through cashless payments, supporting
                  real-time business growth with flexible options. We offer
                  instant cross-border transfers for your customers, opening up
                  limitless possibilities for you.
                </p>
                <p>
                  <em className="text-dark text-justify">
                    <strong>
                      Our API allows easy and smooth international transfers for
                      all our partners, including money transfer operators
                      (MTOs), banks, fintech, mobile wallet operators, and
                      licensed payment providers, in real-time.
                    </strong>
                  </em>
                </p>
                <div className="video-popup style-2">
                  <div className="btn-inner">
                    <a
                      className="btn-play"
                      href="https://www.youtube.com/watch?v=lfDZJqSrIuk"
                    >
                      <i className="flaticon-play"></i>
                      <span className="circle-1"></span>
                      <span className="circle-2"></span>
                    </a>
                  </div>
                  <span>video showcase</span>
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
                  <h2 className="main-heading">
                    We Organize Our <br />
                    Production Process
                  </h2>
                </div>
                <div className="space-15"></div>
                <CrossBorderMoneyTabs />
              </div>
            </div>
            <div className="offset-xl-1 col-xl-6 col-lg-6 split-right-img">
              <div className="video-popup">
                <div className="btn-inner">
                  <a className="btn-play" href="https://vimeo.com/94686522">
                    <i className="flaticon-play"></i>
                    <span className="circle-1"></span>
                    <span className="circle-2"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="app-industris mt-md-5">
        <div className="container">
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
        </div>
        <div className="space-110"></div>
      </section>
    </div>
  );
};

export default CrossBorderMoney;
