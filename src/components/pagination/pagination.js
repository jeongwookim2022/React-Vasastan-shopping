import React, { useEffect, useState } from "react";
import Pagination from "react-js-pagination";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import { changePageNum } from "../../store/pageState";
import Loading from "../Loading/Loading";

const Paging = () => {
  let pageState = useSelector((state) => state.pageState);
  const [page, setPage] = useState(pageState[0]);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const handlePageChange = (clickedPage) => {
    setPage(clickedPage);

    setLoading(true);
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    dispatch(changePageNum(page));

    setLoading(false);
  }, [page, loading]);

  return (
    <>
      {loading && <Loading />}
      <PaginationBox>
        <Pagination
          activePage={page}
          itemsCountPerPage={8}
          totalItemsCount={40}
          pageRangeDisplayed={3}
          prevPageText="‹"
          nextPageText="›"
          onChange={handlePageChange}
        />
      </PaginationBox>
    </>
  );
};
export default Paging;

const PaginationBox = styled.div`
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 15px;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  ul.pagination li {
    display: inline-block;
    width: 30px;
    height: 30px;
    border: 1px solid #e2e2e2;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
  }
  ul.pagination li:first-child {
    border-radius: 5px 0 0 5px;
  }
  ul.pagination li:last-child {
    border-radius: 0 5px 5px 0;
  }
  ul.pagination li a {
    text-decoration: none;
    // color: #337ab7;
    color: black;
    font-size: 1rem;
  }
  ul.pagination li.active a {
    color: white;
  }
  ul.pagination li.active {
    // background-color: #337ab7;
    background-color: black;
  }
  // ul.pagination li a:hover,
  ul.pagination li a.active {
    color: black;
  }
`;
