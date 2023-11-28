import { HeaderMobile, Navigation } from "../index";
import { Link } from "react-router-dom";

const HeaderMain = () => {
  return (
    <header
      id="site-header"
      className="site-header header-style-6  header-second-color sticky-header"
    >
      {/* Main Header start */}
      <div className="octf-main-header">
        <div className="octf-area-wrap">
          <div className="container octf-mainbar-container">
            <div className="octf-mainbar">
              <div className="octf-mainbar-row octf-row">
                <div className="octf-col logo-col">
                  <div id="site-logo" className="site-logo">
                    <Link to={""}>
                      <img src="../images/logo.svg" alt="Upayza" className="" />
                    </Link>
                  </div>
                </div>
                <Navigation />
                <div className="octf-col cta-col text-right">
                  {/* Call To Action */}
                  <div className="octf-btn-cta">
                    <div className="octf-header-module">
                      <div className="toggle_search octf-cta-icons">
                        <i className="flaticon-search"></i>
                      </div>
                      {/* Form Search on Header */}
                      <div className="h-search-form-field collapse">
                        <div className="h-search-form-inner">
                          <form
                            role="search"
                            method="get"
                            id="hsearch-form"
                            className="search-form"
                          >
                            <label>
                              <span className="screen-reader-text">
                                Search for:
                              </span>
                              <input
                                type="search"
                                className="search-field"
                                placeholder="Search …"
                                value=""
                                name="s"
                              />
                            </label>
                            <button type="submit" className="search-submit">
                              <i className="flaticon-search"></i>
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HeaderMobile />
    </header>
  );
};

export default HeaderMain;
