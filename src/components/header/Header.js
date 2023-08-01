import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changePageNum } from "../../store/pageState";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Badge } from "react-bootstrap";

function HeaderNav() {
  let cartState = useSelector((state) => state.cartState);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });

  return (
    <>
      <div className="header-nav" />
      <div className="nav-bg">
        <h3
          onClick={() => {
            navigate("/");

            dispatch(changePageNum(1));
          }}
        >
          Vasastan
        </h3>
        <h5
          onClick={() => {
            dispatch(changePageNum(1));

            navigate("/costume");
          }}
        >
          Costume
        </h5>
        <h5
          onClick={() => {
            dispatch(changePageNum(1));

            navigate("/shoes");
          }}
        >
          Shoes
        </h5>
        <h5
          onClick={() => {
            dispatch(changePageNum(1));

            navigate("/accessory");
          }}
        >
          Accessory
        </h5>
        <h5
          onClick={() => {
            dispatch(changePageNum(1));

            navigate("/perfume");
          }}
        >
          Perfume
        </h5>

        <h6
          className="login"
          onClick={() => {
            dispatch(changePageNum(1));

            navigate("/signin");
          }}
        >
          Login
        </h6>
        <h6
          className="cart"
          onClick={() => {
            dispatch(changePageNum(1));

            navigate("/cart");
          }}
        >
          <FontAwesomeIcon icon={faCartShopping} />
          <Badge
            bg="dark"
            className="cart-badge-num"
            onClick={() => {
              dispatch(changePageNum(1));
            }}
          >
            {cartState.length}
          </Badge>
        </h6>
      </div>
    </>
  );
}

export default HeaderNav;
