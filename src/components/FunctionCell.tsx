import React from "react";
import { CalcFunction } from "./enumFunction";

type FunctionCellProps = {
  cellFunction: CalcFunction;
  callbackFunc: (f: CalcFunction) => void;
};

const FunctionCell = ({ cellFunction, callbackFunc }: FunctionCellProps) => (
  <div onClick={() => callbackFunc(cellFunction)} className="cell">{cellFunction}</div>
);

export default FunctionCell;
