import "./Footer.module.css";
import {
  faInstagram,
  faFacebookSquare,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <div className="footer-bg">
      <div className="footer-copyright">
        Copyright ⓒ 2023 <span>Vasastan</span> All Rights Reserved
      </div>
      <div className="footer-sns">
        <a href="https://github.com/jeongwookim2022" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faFacebookSquare} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
      <div className="footer-phone">
        <FontAwesomeIcon icon={faPhone} /> +46 70 491 4875
      </div>
    </div>
  );
}
export default Footer;
