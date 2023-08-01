import { useEffect, useState } from "react";
import LoadData from "../components/common/LoadData";
import Loading from "../components/Loading/Loading";
import Paging from "../components/pagination/pagination";
import { useSelector } from "react-redux";
import MappingProductsAll from "./MappingProductsAll";

function Costumes() {
  const [costumesAll, setCostumesAll] = useState([]);
  const [loading, setLoading] = useState(true);
  let page = useSelector((state) => state.pageState);

  useEffect(() => {
    LoadData(
      "https://jeongwookim2022.github.io/costumes.json",
      setCostumesAll,
      setLoading
    );
  }, [loading, page]);

  return (
    <>
      {loading && <Loading />}
      <div>
        {costumesAll.length > 0 && (
          <MappingProductsAll best={costumesAll[page]} />
        )}
      </div>
      {costumesAll.length > 0 && <Paging />}
    </>
  );
}
export default Costumes;
