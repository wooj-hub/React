import { CSSProperties } from "react";
import Circle from "./Circle";
import CircleWithX from "./CircleWithX";

type Pillprobs = {
  text: string;
  backgroundColor: string;
};

const Pill = ({ text, backgroundColor }: Pillprobs) => {
  //전체 박스 css
  const style: CSSProperties = {
    display: "flex",
    alignItems: "center",
    border: "1px solid #DBDBDB",
    borderRadius: "30px",
    gap: "6px",
    padding: "5px",
    width: "fit-content",
  };
  return (
    <div style={style}>
      {/* APP.tsx에서  backgroundColor 주는 것 처럼 근데 왜 대괄호? */}
      <Circle backgroundColor={backgroundColor} />
      <span style={{ lineHeight: "2px" }}>{text}</span>
      <CircleWithX />
    </div>
  );
};

export default Pill;
