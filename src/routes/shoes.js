import { useEffect, useState } from "react";
import LoadData from "../components/common/LoadData";
import Loading from "../components/Loading/Loading";
import Paging from "../components/pagination/pagination";
import { useSelector } from "react-redux";
import MappingProductsAll from "./MappingProductsAll";

function Shoes() {
  const [shoesAll, setShoesAll] = useState([]);
  const [loading, setLoading] = useState(true);
  let page = useSelector((state) => state.pageState);

  useEffect(() => {
    LoadData(
      "https://jeongwookim2022.github.io/shoesall.json",
      setShoesAll,
      setLoading
    );
  }, [loading, page]);
  return (
    <>
      {loading && <Loading />}
      <div>
        {shoesAll.length > 0 && <MappingProductsAll best={shoesAll[page]} />}
      </div>
      {shoesAll.length > 0 && <Paging />}
    </>
  );
}
export default Shoes;
