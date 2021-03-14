import { createContext } from "react";
import { FunctionResult } from "./FunctionResult";

export const DisplayContext = createContext<FunctionResult>({
  number1: null,
  number2: null,
  funcAction: null,
  result: null,
});
