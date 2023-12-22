import { Link } from "react-router-dom";

const SocialMediaComponent = () => {
  return (
    <div className="ft-list-icon">
      <Link to={"#"} className="twitter">
        <i className="fab fa-twitter"></i>
      </Link>
      <Link to={"#"} className="facebook">
        <i className="fab fa-facebook-f"></i>
      </Link>
      <Link to={"#"} className="linkedin">
        <i className="fab fa-linkedin-in"></i>
      </Link>
      <Link to={"#"} className="instagram">
        <i className="fab fa-instagram"></i>
      </Link>
    </div>
  );
};

export default SocialMediaComponent;
