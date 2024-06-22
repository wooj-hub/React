import { CSSProperties } from "react";

type RectangleProbs = {
  color: string;
  backgroundColor: string;
  text: string;
};

const Rectangle = ({ color, text, backgroundColor }: RectangleProbs) => {
  const style: CSSProperties = {
    width: "50px",
    height: "30px",
    backgroundColor,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "10px",
    color,
  };

  return <div style={style}>{text}</div>;
};

export default Rectangle;
