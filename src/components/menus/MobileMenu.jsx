import { Link, NavLink } from "react-router-dom";

const MobileMenu = () => {
  return (
    <div className="mmenu_wrapper">
      <div className="mobile_nav collapse">
        <ul id="menu-main-menu" className="mobile_mainmenu">
          <li>
            <a>
              <Link
                to={""}
                className="menu-item-has-children current-menu-item current-menu-ancestor"
              >
                Home
              </Link>
            </a>
          </li>
          <li>
            <NavLink className="menu-item-has-children" to={"/company"}>
              Company
            </NavLink>
            <ul className="sub-menu">
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Why Choose Us</a>
              </li>
              <li>
                <a href="#">Our team</a>
              </li>
            </ul>
          </li>
          <li>
            <NavLink className="menu-item-has-children" to={"/services"}>
              Services
            </NavLink>
            <ul className="sub-menu">
              <li>
                <a href="#">Cross-border money Transfer</a>
              </li>
              <li>
                <a href="#">Interoperable Mobile Payment</a>
              </li>
            </ul>
          </li>
          <li>
            <NavLink className="menu-item-has-children" to={"/who-we-serve"}>
              Who we serve
            </NavLink>
            <ul className="sub-menu">
              <li>
                <a href="#">Banks</a>
              </li>
              <li>
                <a href="#">Digital Merchants</a>
              </li>
              <li>
                <a href="#">Creator Economy</a>
              </li>
              <li>
                <a href="#">Mobile Wallets</a>
              </li>
              <li>
                <a href="#">Money Transfer Operators</a>
              </li>
              <li>
                <a href="#">Payment Service Providers</a>
              </li>
              <li>
                <a href="#">Platforms and Marketplaces</a>
              </li>
            </ul>
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
    </div>
  );
};
export default MobileMenu;
