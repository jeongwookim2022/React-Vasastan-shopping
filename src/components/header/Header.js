import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";

import "./Header.module.css";
function HeaderNav() {
  const navigate = useNavigate();

  return (
    <>
      <div className="header-nav"></div>
      <div className="nav-bg">
        <h3>Vasastan</h3>
        <h6>Costume</h6>
        <h6>Shoes</h6>
        <h6>Accessory</h6>
        <h6>Perfume</h6>
      </div>
    </>
  );
}

export default HeaderNav;
