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
              Home
            </Link>
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
              {/*<li>
            <a href="#">Why Choose Us</a>
          </li>
          <li>
            <Link to={"/company/our-team"} href="#">
              Our team
            </Link>
          </li>*/}
            </ul>
          </li>
          <li>
            <Link className="menu-item-has-children" to={"#"}>
              Products
            </Link>
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
            <Link className="menu-item-has-children" to={"#"}>
              Who we serve
            </Link>
            <ul className="sub-menu">
              <li>
                <Link to={"#"}>Money Transfer Operator</Link>
              </li>
              <li>
                <Link to={"#"}>Mobile Network Operators</Link>
              </li>
              <li>
                <Link to={"#"}>Banks</Link>
              </li>
              <li>
                <Link to={"#"}>Financial institutions</Link>
              </li>
              <li>
                <Link to={"#"}>Merchants</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link className="menu-item-has-children" to={"/contacts"}>
              Contacts
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default MobileMenu;
