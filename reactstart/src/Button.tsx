import { CSSProperties } from "react";
//ts에서 Colors, obj import
import { Colors, obj } from "./styles";

type ButtonProbs = {
  content: string;
  bgColor: keyof Colors;
  //border_raduis  string으로도 가능
  border_radius: 0 | 10 | 50;
  color: string;
};

const Button = ({ content, bgColor, border_radius, color }: ButtonProbs) => {
  //bgColor//main,side,deactive

  //CSSProperties => CSS 설정을 위한 타입
  const buttonStyle: CSSProperties = {
    fontSize: "32px",
    padding: "10px 45px",
    border: `1px solid ${bgColor}`,
    //backgroundColor: bgColor 랑 뭔차이임??? keyof 사용하면 밑에 줄 처럼 해주기
    backgroundColor: obj[bgColor],
    borderRadius: border_radius + "px",
    //key 와 value가 같으면 한줄로 가능
    color,
  };
  return <button style={buttonStyle}>{content}</button>;
};

//다른 곳에서 사용할 수 있도록
export default Button;
