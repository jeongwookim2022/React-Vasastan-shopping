import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { currentProduct } from "../store/productDetailState";
import "../styles/routes/common/MappingProductsAll.module.css";
import { useEffect, useState } from "react";
import { didOthersClick } from "../store/isCartItem";

function MappingProductsAll({ best }) {
  let [newBest, setNewBest] = useState([...best]);
  let [toggle, setToggle] = useState(true);

  const lowHighBtn = document.getElementById("lowHighBtn");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="product-group">
      <div className="btn-box">
        <button
          id="nameBtn"
          onClick={() => {
            document.querySelector("#nameBtn").classList.add("clickedBtn");
            document
              .querySelector("#lowHighBtn")
              .classList.remove("clickedBtn");

            const namedSort = best.sort((a, b) => {
              if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
              if (b.title.toLowerCase() < a.title.toLowerCase()) return 1;
            });
            setNewBest(...namedSort);
          }}
        >
          Name
        </button>
        <button
          id="lowHighBtn"
          onClick={() => {
            document.querySelector("#lowHighBtn").classList.add("clickedBtn");
            document.querySelector("#nameBtn").classList.remove("clickedBtn");

            if (toggle) {
              setToggle(false);
              // lowHighBtn.innerHTML = "High Price";
              lowHighBtn.innerHTML = "Low Price";

              const fromLowPrice = best.sort((a, b) => a.price - b.price);
              setNewBest(...fromLowPrice);
            } else {
              setToggle(true);
              // lowHighBtn.innerHTML = "Low Price";
              lowHighBtn.innerHTML = "High Price";

              const fromHighPrice = best.sort((a, b) => b.price - a.price);
              setNewBest(...fromHighPrice);
            }
          }}
        >
          Low Price
        </button>
      </div>
      {best.map((product, i) => (
        <div className="product-each" style={{ width: "25vw" }}>
          <img
            src={`${product.url}`}
            alt=""
            onClick={() => {
              dispatch(currentProduct(product));
              dispatch(didOthersClick());

              navigate(`/detail/${i}`);
            }}
          />
          <div className="best-product-text">
            <em className="filter">{product.filter}</em>
            <p className="title">{product.title}</p>
            <strong className="price">${product.price}</strong>
          </div>
        </div>
      ))}
    </div>
  );
}
export default MappingProductsAll;
