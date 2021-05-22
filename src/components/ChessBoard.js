import React from "react";
import styled from "styled-components";
import { FaChessQueen } from "react-icons/fa";
const ChessBoard = (props) => (
  <StyledBoardContainer>
    {props.solution.map((num, i) => (
      <div key={i}>{num === `1` ? <FaChessQueen size={30} /> : null}</div>
    ))}
  </StyledBoardContainer>
);

const StyledBoardContainer = styled.div`
  display: grid;
  grid-template-columns: 40px 40px 40px 40px 40px 40px 40px 40px;
  grid-template-rows: 40px 40px 40px 40px 40px 40px 40px 40px;
  color: #9b7e46;
  border: 8px solid #9b7e46;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  div:nth-child(-2n + 8),
  div:nth-child(8) ~ div:nth-child(-2n + 15),
  div:nth-child(16) ~ div:nth-child(-2n + 24),
  div:nth-child(24) ~ div:nth-child(-2n + 31),
  div:nth-child(32) ~ div:nth-child(-2n + 40),
  div:nth-child(40) ~ div:nth-child(-2n + 47),
  div:nth-child(48) ~ div:nth-child(-2n + 56),
  div:nth-child(56) ~ div:nth-child(-2n + 63) {
    background-color: #1e212b;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default ChessBoard;
