import { CSSProperties } from "react";

//차이점은 probs
type CircleProps = {
  backgroundColor: string;
};

//함수
const Circle = ({ backgroundColor }: CircleProps) => {
  const style: CSSProperties = {
    width: "16px",
    height: "16px",
    borderRadius: "50%",
    //같으면 생략 가능. backgroundColor: backgroundColor
    backgroundColor,
  };
  return <div style={style}></div>;
};

export default Circle;
