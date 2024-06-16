import { CSSProperties } from "react";

type HardButtonProbs = {
  content: string;
};
//원래는 props:HardButtonProbs
const HardButton = ({ content }: HardButtonProbs) => {
  //CSSProperties => CSS 설정을 위한 타입
  const buttonStyle: CSSProperties = {
    fontSize: "32px",
    color: "white",
    backgroundColor: "blue",
    padding: "10px 45px",
    border: "1px solid #205BF3",
  };
  //원래는 porbs.content
  return <button style={buttonStyle}>{content}</button>;
};

//다른 곳에서 사용할 수 있도록
export default HardButton;
