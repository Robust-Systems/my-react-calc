import React from "react";

type NumberCellProps = {
  cellValue: number;
  onClick: (n: number) => void;
};

const NumberCell = ({ cellValue, onClick }: NumberCellProps) => (
   <div onClick={() => onClick(cellValue)}>{cellValue}</div>
);

export default NumberCell;
