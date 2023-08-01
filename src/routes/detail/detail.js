import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "../../styles/routes/detail.module.css";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import SizeCompo from "./size";
import ColorCompo from "./color";
import QuantityCompo from "./quantity";
import Loading from "../../components/Loading/Loading";
import { useDispatch } from "react-redux";
import { addCart } from "../../store/cartState";
import cartItemInfo, { addInfo } from "../../store/cartItemInfo";

function DetailMain() {
  let { id } = useParams();
  const dispatch = useDispatch();

  let product = useSelector((state) => state.productDetailState[0]);
  let isCartItem = useSelector((state) => state.isCartItem[0]);
  if (isCartItem) {
    product = isCartItem;
  }

  const [loading, setLoading] = useState(true);

  // SIZE
  let [size, setSize] = useState(product.size && product.size[0]);
  let [sizeVisible, setSizeVisible] = useState(false);
  let [sizeIcon, setSizeIcon] = useState(faChevronDown);

  // COLOR
  let [color, setColor] = useState(product.color && product.color[0]);
  let [colorVisible, setColorVisible] = useState(false);
  let [colorIcon, setColorIcon] = useState(faChevronDown);

  // QUANTITY
  let [count, setCount] = useState(1);

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    setLoading(false);
  }, [loading]);

  return (
    <>
      {loading && <Loading />}
      <div
        onClick={() => {
          if (product.size) {
            setSizeVisible(false);
            setSizeIcon(faChevronDown);
          }
          if (product.color) {
            setColorVisible(false);
            setColorIcon(faChevronDown);
          }
        }}
      >
        <section className="section1">
          <div className="img-box">
            <img src={product.url} alt="" />
          </div>
          <div className="text-box">
            <div className="text">
              <em>{product.filter}</em>
              <h2>{product.title}</h2>

              {product.size ? (
                <SizeCompo
                  product={product}
                  size={size}
                  sizeIcon={sizeIcon}
                  setSize={setSize}
                  sizeVisible={sizeVisible}
                  setSizeVisible={setSizeVisible}
                  setSizeIcon={setSizeIcon}
                />
              ) : null}
              {product.color ? (
                <ColorCompo
                  product={product}
                  color={color}
                  colorIcon={colorIcon}
                  setColor={setColor}
                  colorVisible={colorVisible}
                  setColorVisible={setColorVisible}
                  setColorIcon={setColorIcon}
                />
              ) : null}

              <QuantityCompo count={count} setCount={setCount} />

              <h5 className="price">${product.price}</h5>

              <div className="button-box">
                <div className="add-button">
                  <button
                    type="submit"
                    onClick={() => {
                      dispatch(addCart(product));
                      dispatch(
                        addInfo({ size: size, color: color, count: count })
                      );
                    }}
                  >
                    Add to Cart
                  </button>
                </div>

                <div className="buy-button">
                  <button>Buy</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
export default DetailMain;
