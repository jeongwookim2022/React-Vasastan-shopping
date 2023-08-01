import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { currentProduct } from "../../store/productDetailState";
import { didOthersClick } from "../../store/isCartItem";

function MappingBestProducts({ best }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="best-product-group">
      {best.map((product, i) => (
        <div className="best-product" style={{ width: "25vw" }}>
          <img
            src={`${product.url}`}
            alt=""
            onClick={() => {
              dispatch(currentProduct(product));
              dispatch(didOthersClick());
              navigate(`/detail/${i}`);
            }}
          />
          <div className="best-product-text mt-lg-2 ms-4">
            <em className="filter">{product.filter}</em>
            <p className="title">{product.title}</p>
            <strong className="price">${product.price}</strong>
          </div>
        </div>
      ))}
    </div>
  );
}
export default MappingBestProducts;
