import { MobileMenu } from "./index";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const HeaderMobile = () => {
  let _eventSetted = false;
  useEffect(() => {
    if (!_eventSetted) {
      _eventSetted = true;
      console.log("jQuery", window.$);
      const $ = window.$;
      $(".collapse .mobile_mainmenu li:has(ul)").prepend(
        '<span class="arrow"><i class="flaticon-arrow"></i></span>',
      );
      $("#mmenu_toggle").on("click", function () {
        $(this).toggleClass("active");

        if ($(this).hasClass("active")) {
          $(".mobile_nav").stop(true, true).slideDown();
        } else {
          $(".mobile_nav").stop(true, true).slideUp();
        }
      });

      $(".mobile_mainmenu > li span.arrow").on("click", function () {
        $(this).parent().find("> ul").stop(true, true).slideToggle();
        $(this).toggleClass("active");
      });
    }
  }, []);
  return (
    <div className="header_mobile">
      <div className="container">
        <div className="mlogo_wrapper clearfix">
          <div className="mobile_logo">
            <Link to={"/"}>
              <img
                src={process.env.PUBLIC_URL + "/images/logo.svg"}
                alt="Upayza"
              />
            </Link>
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
