import { useContext } from "react";
import { DisplayContext } from "./DisplayContext";

const DisplayWindow = () => {
  const result = useContext(DisplayContext);
  const resultStr = `${blankIfNull(result.number1)} ${blankIfNull(
    result.funcAction
  )} ${blankIfNull(result.number2)} ${result.result ? "=" : ""} ${blankIfNull(
    result.result
  )} `;

  return <div className="cell">&nbsp;{resultStr}</div>;
};

const blankIfNull = (value: any) => {
  if (value === null) {
    return "";
  }

  return `${value}`;
};

export default DisplayWindow;
