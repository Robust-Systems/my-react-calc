import React from "react";
import { Equals } from "./enumFunction";

type FunctionCellProps = {
  callbackFunc: (f: typeof Equals) => void;
};

const EqualsCell = ({ callbackFunc }: FunctionCellProps) => (
  <div onClick={() => callbackFunc(Equals)}>{Equals}</div>
);

export default EqualsCell;
