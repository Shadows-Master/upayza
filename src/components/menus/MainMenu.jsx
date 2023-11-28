import { Link, NavLink } from "react-router-dom";

const MainMenu = () => {
  return (
    <ul className="menu">
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
        <Link to={"#"} className="menu-item-has-children">
          Company
        </Link>
        <ul className="sub-menu">
          <li>
            <Link to={"/company/about"} href="#">
              About us
            </Link>
          </li>
          <li>
            <a href="#">Why Choose Us</a>
          </li>
          <li>
            <Link to={"/company/our-team"} href="#">
              Our team
            </Link>
          </li>
        </ul>
      </li>
      <li>
        <NavLink className="menu-item-has-children" to={""}>
          Services
        </NavLink>
        <ul className="sub-menu">
          <li>
            <Link to={"/services/cross-border-money"}>
              Cross-border money Transfer
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
  );
};

export default MainMenu;
