import { CalcFunction } from "./enumFunction";

export interface FunctionResult {
  number1: number | null;
  number2: number | null;
  funcAction: CalcFunction | null;
  result: number | null;
}
