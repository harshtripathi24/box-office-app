import styled from 'styled-components';

import { SearchCard } from '../styled';

export const StyledShowCard = styled(SearchCard)`
  padding: 0.3em;

  border-radius: 25px;
  box-shadow: 0 20px 10px rgb(71 68 68 / 30%);
  .btns {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
      margin: 1em;
      font-weight: bold;

      text-decoration-color: #000;
      color: blue;
      &:hover {
        text-decoration-color: blue;
        color: orangered;
      }
    }
    button {
      outline: none;
      border: 1px solid #8e8e8e;
      border-radius: 15px;
      padding: 5px 20px;
      background-color: blue;
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        cursor: pointer;
      }
    }
  }
`;
