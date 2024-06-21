import { CSSProperties } from "react";
import { BorderRadius, Colors, bgColorObj, borderRadiusObj } from "./styles";

type ButtonProps = {
  content: string;
  backgroundColor: keyof Colors;
  borderRadius: keyof BorderRadius;
};

//
const Button = ({ content, backgroundColor, borderRadius }: ButtonProps) => {
  const ButtonStyle: CSSProperties = {
    fontSize: "32px",
    color: "white",
    //baColorObj 구조체 에서 bgColorObj[키 값] 은 value값을 의미
    //backgroundColor: bgColor 랑 뭔차이임??? keyof 사용하면 밑에 줄 처럼 해주기
    backgroundColor: bgColorObj[backgroundColor],
    padding: "10px 45px",
    //문자열 내에서 변수 값 사용. border: "1px solid " + bgColorObj[backgroundColor]와 같은의미
    border: `1px solid ${bgColorObj[backgroundColor]}`,
    borderRadius: borderRadiusObj[borderRadius],
  };

  return <button style={ButtonStyle}>{content}</button>;
};

export default Button;
