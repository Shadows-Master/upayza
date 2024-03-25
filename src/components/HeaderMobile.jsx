import { MobileMenu } from "./index";

const HeaderMobile = () => {
  return (
    <div className="header_mobile">
      <div className="container">
        <div className="mlogo_wrapper clearfix">
          <div className="mobile_logo">
            <a href="#">
              <img
                src={process.env.PUBLIC_URL + "/images/logo.svg"}
                alt="Upayza"
              />
            </a>
          </div>
          <div id="mmenu_toggle">
            <button></button>
          </div>
        </div>
        <MobileMenu />
      </div>
    </div>
  );
};

export default HeaderMobile;
