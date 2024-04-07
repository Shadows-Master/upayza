import { Link } from "react-router-dom";

const MobileMenu = () => {
  return (
    <div className="mmenu_wrapper">
      <div className="mobile_nav collapse">
        <ul id="menu-main-menu" className="mobile_mainmenu">
          <li>
            <Link
              to={""}
              className="menu-item-has-children current-menu-item current-menu-ancestor"
            >
              HOME
            </Link>
          </li>
          <li>
            <Link to={"/company/about"}>COMPANY</Link>
          </li>
          <li className="menu-item-has-children">
            <Link to={"#"}>PRODUCTS</Link>

            <ul className="sub-menu">
              <li>
                <Link to={"/services/cross-border-money"}>
                  International money Transfer
                </Link>
              </li>
              <li>
                <Link to={"/services/interoperable-mobile-payment"}>
                  Interoperable Mobile Payment
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to={"/contacts"}>CONNECT</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default MobileMenu;
