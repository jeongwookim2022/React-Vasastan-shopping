import { useEffect, useState } from "react";
import "./LatestProduct.module.css";
import LoadData from "../common/LoadData";
import Loading from "../Loading/Loading";
import MappingLatestProducts from "./MappingLatestProducts";

function LatestProduct() {
  const [costume, setCostume] = useState([]);
  const [accessory, setAccessory] = useState([]);
  const [shoes, setShoes] = useState([]);
  const [perfume, setPerfume] = useState([]);
  const setStateList = [setCostume, setAccessory, setShoes, setPerfume];
  const stateList = [costume, accessory, shoes, perfume];
  const categories = ["Costume", "Accessory", "Shoes", "Perfume"];

  const [test, setTest] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setStateList.forEach((setState, i) => {
      LoadData(
        `https://jeongwookim2022.github.io/latest${i + 1}.json`,
        setState,
        setLoading
      );
    });
  }, [setStateList]);

  return (
    <>
      {loading && <Loading />}
      <div className="latest-product-bg">
        <div className="latest-product-title">
          <h3>━━━</h3>
          <h2>LATEST PRODUCTS</h2>
          <h3>━━━</h3>
          <div className="latest-category-box">
            {categories.map((category, i) => (
              <div className="latest-group-category">{category}</div>
            ))}
          </div>
        </div>
        <div className="groups-all">
          {stateList.map((state, i) => (
            <MappingLatestProducts latest={state} />
          ))}
        </div>
      </div>
    </>
  );
}
export default LatestProduct;
