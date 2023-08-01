import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { currentProduct } from "../../store/productDetailState";
import { didOthersClick } from "../../store/isCartItem";

function MappingLatestProducts({ latest }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="latest-product-group">
      {latest.map((product, i) => (
        <div className="latest-product">
          <div className="latest-img-box">
            <img
              src={`${product.url}`}
              alt=""
              onClick={() => {
                dispatch(currentProduct(product));
                dispatch(didOthersClick());

                navigate(`/detail/${i}`);
              }}
            />
          </div>
          <div className="latest-product-text">
            <em className="filter">{product.filter}</em>
            <p className="title">{product.title}</p>
            <strong className="price">${product.price}</strong>
          </div>
        </div>
      ))}
    </div>
  );
}
export default MappingLatestProducts;
