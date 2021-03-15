import React from "react";
import { Clear } from "./enumFunction";

type FunctionCellProps = {
  callbackFunc: (f: typeof Clear) => void;
};

const ClearCell = ({ callbackFunc }: FunctionCellProps) => (
  <div onClick={() => callbackFunc(Clear)}>{Clear}</div>
);

export default ClearCell;
