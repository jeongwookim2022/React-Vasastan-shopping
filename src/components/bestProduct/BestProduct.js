import { useEffect, useState } from "react";
import "./BestProduct.module.css";
import Loading from "../Loading/Loading";
import LoadData from "../common/LoadData";
import MappingBestProducts from "./MappingBestProducts";

function BestProduct() {
  const [best, setBest] = useState([]);
  const [best2, setBest2] = useState([]);
  const [viewMore, setViewMore] = useState(false);
  const [btnVisible, setBtnVisible] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (viewMore) {
      LoadData(
        "https://jeongwookim2022.github.io/best2.json",
        setBest2,
        setLoading
      );
    } else {
      LoadData(
        "https://jeongwookim2022.github.io/best1.json",
        setBest,
        setLoading
      );
    }
  }, [viewMore, loading]);

  return (
    <>
      {loading && <Loading />}
      <div className="best-product-title">
        <h3>━━━</h3>
        <h2>BEST PRODUCTS</h2>
        <h3>━━━</h3>
      </div>
      <MappingBestProducts best={best} />
      {viewMore && <MappingBestProducts best={best2} />}
      <div className="view-more-btn-box">
        {btnVisible && (
          <button
            onClick={() => {
              setLoading(true);
              setViewMore(true);
              setBtnVisible(false);
            }}
          >
            View more
          </button>
        )}
      </div>
    </>
  );
}

export default BestProduct;
