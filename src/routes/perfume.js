import { useEffect, useState } from "react";
import LoadData from "../components/common/LoadData";
import Loading from "../components/Loading/Loading";
import Paging from "../components/pagination/pagination";
import { useSelector } from "react-redux";
import MappingProductsAll from "./MappingProductsAll";

function Accessory() {
  const [accessoryAll, setAccessoryAll] = useState([]);
  const [loading, setLoading] = useState(true);
  let page = useSelector((state) => state.pageState);

  useEffect(() => {
    LoadData(
      "https://jeongwookim2022.github.io/perfumes.json",
      setAccessoryAll,
      setLoading
    );
  }, [loading, page]);
  return (
    <>
      {loading && <Loading />}
      <div>
        {accessoryAll.length > 0 && (
          <MappingProductsAll best={accessoryAll[page]} />
        )}
      </div>
      {accessoryAll.length > 0 && <Paging />}
    </>
  );
}
export default Accessory;
