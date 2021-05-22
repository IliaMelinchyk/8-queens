import React, { useRef } from "react";
import styled from "styled-components";
import ChessBoard from "./components/ChessBoard";

const eightQueensCalculate = () => {
  const board = Array(8)
    .fill(0)
    .map(() => Array(8).fill(0));
  const columnsUsed = Array(8).fill(false);
  const diagonal135Used = Array(15).fill(false);
  const diagonal45Used = Array(15).fill(false);
  const answer = [];

  const queenPut = (i, j) => {
    const indexOfDiagonal135 = i + 8 - j - 1;
    const indexOfDiagonal45 = i + j;

    // Если ферзя не поставить
    if (
      columnsUsed[j] ||
      diagonal135Used[indexOfDiagonal135] ||
      diagonal45Used[indexOfDiagonal45]
    )
      return;

    // Если ферзя можно поставить
    board[i][j] = 1;
    columnsUsed[j] = true;
    diagonal135Used[indexOfDiagonal135] = true;
    diagonal45Used[indexOfDiagonal45] = true;

    // Последний ферзь поставлен
    if (i === 7) {
      answer.push(board.map((row) => row.join("").split("")));
    } else {
      for (let k = 0; k < 8; k++) {
        queenPut(i + 1, k);
      }
    }

    board[i][j] = 0;
    columnsUsed[j] = false;
    diagonal135Used[indexOfDiagonal135] = false;
    diagonal45Used[indexOfDiagonal45] = false;
  };

  for (let k = 0; k < 8; k++) queenPut(0, k);

  return answer.map((solution) => solution.flat());
};

const App = () => {
  const solutions = useRef(eightQueensCalculate());
  return (
    <>
      <StyledAppHeader>
        Приложение находящее все возможные положения 8 ферзей на шахматной доске
        при которых они не бьют друг друга - все {solutions.current.length}{" "}
        решения предоставлены ниже.
      </StyledAppHeader>
      <StyledAppContainer>
        {solutions.current.map((solution, i) => (
          <ChessBoard key={i} solution={solution} />
        ))}
      </StyledAppContainer>
    </>
  );
};

const StyledAppHeader = styled.div`
  font-family: "Old Standard TT", serif;
  color: #1e212b;
  font-size: 40px;
  margin: 20px;
`;
const StyledAppContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

export default App;
