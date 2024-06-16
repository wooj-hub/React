import { CSSProperties } from "react";
const CircleButton = () => {
  //backgroundColor : 내가 좋아하는 색깔

  //CSSProperties => CSS 설정을 위한 타입
  const buttonStyle: CSSProperties = {
    backgroundColor: "#205BF3",
    padding: "10px 45px",
    borderRadius: "50px",
  };

  return <button style={buttonStyle}>Button</button>;
};

//다른 곳에서 사용할 수 있도록
export default CircleButton;
