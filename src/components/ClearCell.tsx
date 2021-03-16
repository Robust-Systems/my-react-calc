import React from "react";
import { Clear } from "./enumFunction";

type FunctionCellProps = {
  callbackFunc: (f: typeof Clear) => void;
};

const ClearCell = ({ callbackFunc }: FunctionCellProps) => (
  <div onClick={() => callbackFunc(Clear)} className="cell">{Clear}</div>
);

export default ClearCell;
