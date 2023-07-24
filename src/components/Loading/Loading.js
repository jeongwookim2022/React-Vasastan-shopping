import { Watch, Triangle } from "react-loader-spinner";
import styled from "styled-components";

const LoadingDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 100;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

function Loading() {
  return (
    <LoadingDiv>
      <Triangle
        height="180"
        width="180"
        color="black"
        radius="8"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="rings-loading"
      />
    </LoadingDiv>
  );
}

export default Loading;
