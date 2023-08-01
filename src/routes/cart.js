import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { moreItem, lessItem, removeCart } from "../store/cartState";
import { useEffect, useState } from "react";
import Loading from "../components/Loading/Loading";
import { useNavigate } from "react-router-dom";
import { didCartClick } from "../store/isCartItem";
import { lessCount, moreCount, removeInfo } from "../store/cartItemInfo";

function Cart() {
  let cartState = useSelector((state) => state.cartState);
  let cartItemInfo = useSelector((state) => state.cartItemInfo);
  let itemIdList = [];

  let dispatch = useDispatch();
  let navigate = useNavigate();

  let [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [loading]);

  return (
    <>
      {loading && <Loading />}
      <div className="cart-table">
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>title</th>
              <th>Quantities</th>
              <th className="change">Change</th>
            </tr>
          </thead>
          <tbody className="item-group">
            {cartState.map((item, i) => {
              itemIdList.push(item.id);

              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td
                    className="td-img-box"
                    onClick={(e) => {
                      dispatch(didCartClick(item));

                      navigate(`/detail/${item.id}`);
                    }}
                  >
                    <img
                      src={`${item.url}`}
                      alt=""
                      width="60px"
                      onError={(e) => {
                        e.target.src =
                          "https://cdn.pixabay.com/photo/2016/06/03/17/35/shoes-1433925_1280.jpg";
                      }}
                    />
                    <td className="td-title">
                      <h5>{item.title}</h5>
                      <div style={{ display: "flex" }}>
                        <h6>${item.price}</h6>
                        <h6>{cartItemInfo[i].size}</h6>
                        <h6>{cartItemInfo[i].color}</h6>
                      </div>
                    </td>
                  </td>
                  <td>{cartItemInfo[i].count}</td>
                  <td>
                    <Button
                      variant="secondary"
                      className="me-2"
                      onClick={() => {
                        // dispatch(moreItem(item.id));
                        dispatch(moreCount(i));
                      }}
                    >
                      +
                    </Button>
                    <Button
                      variant="secondary"
                      className="me-3"
                      onClick={
                        () => {
                          dispatch(lessCount(i));
                        }
                        // item.count > 0 && item.count != 0
                        //   ? dispatch(lessItem(item.id))
                        //   : null
                      }
                    >
                      ㅡ
                    </Button>{" "}
                    <Button
                      variant="danger"
                      onClick={() => {
                        dispatch(removeCart(item.id));
                        dispatch(removeInfo(i));
                      }}
                    >
                      X
                    </Button>{" "}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default Cart;
