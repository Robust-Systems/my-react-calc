import { CalcFunction, Equals } from "./enumFunction";
import { FunctionResult } from "./FunctionResult";

export default class KeyProcessor {
  number1: number | null = null;
  number2: number | null = null;
  functionType: CalcFunction | null = null;
  result: number | null = null;

  Clear() {
    this.number1 = null;
    this.number2 = null;
    this.functionType = null;
    this.result = null;
  }

  ProcessKey(key: number | CalcFunction | typeof Equals): FunctionResult {
    if (typeof key === "number" && this.functionType === null) {
      this.number1 = +`${this.blankIfNull(this.number1)}${key}`;
    } else if (typeof key === "string" && key !== Equals && this.number2 === null) {
      this.functionType = key as CalcFunction;
    } else if (typeof key === "number" && this.functionType !== null) {
      this.number2 = +`${this.blankIfNull(this.number2)}${key}`;
    }else if (key === Equals && this.number1 && this.number2 && this.functionType){
      switch (this.functionType) {
        case CalcFunction.Add:
          this.result = this.number1 + this.number2;
          break;
        case CalcFunction.Subtract:
          this.result = this.number1 - this.number2;
          break;
        case CalcFunction.Multiply:
          this.result = this.number1 * this.number2;
          break;
        case CalcFunction.Divide:
          this.result = this.number1 / this.number2;
          break;
        default:            
          break;
        }
    }

    let result: FunctionResult = {
      number1: this.number1,
      number2: this.number2,
      funcAction: this.functionType,
      result: this.result
    };

    return result;
  }

  private blankIfNull(value: any): string {
    if (value === null) {
      return "";
    }

    return `${value}`;
  }
}
