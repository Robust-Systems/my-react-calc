import React from "react";
import { CalcFunction } from "./enumFunction";

type FunctionCellProps = {
  cellFunction: CalcFunction;
  callbackFunc: (f: CalcFunction) => void;
};

const FunctionCell = ({ cellFunction, callbackFunc }: FunctionCellProps) => (
  <div onClick={() => callbackFunc(cellFunction)}>{cellFunction}</div>
);

export default FunctionCell;
