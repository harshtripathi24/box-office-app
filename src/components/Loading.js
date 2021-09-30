import React from 'react';
import styled from 'styled-components';
import loadingIMG from '../images/newLoading.svg';

const LoadingWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  img {
    width: 100vw;
    height: 100vh;
    display: flex;
    margin-left: auto;
    margin-right: auto;
  }
`;

const Loading = () => {
  return (
    <LoadingWrapper>
      <img src={loadingIMG} alt="loadingImg" />
    </LoadingWrapper>
  );
};

export default Loading;
