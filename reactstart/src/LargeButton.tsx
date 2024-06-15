import { CSSProperties } from "react";

const LargeButton = () => {
  //backgroundColor : 내가 좋아하는 색깔
  //padding: 10px 20px
  //borderRadius: 8px
  //버튼

  //CSSProperties => CSS 설정을 위한 타입
  const buttonStyle: CSSProperties = {
    backgroundColor: "skyblue",
    padding: "10px, 20px",
    borderRadius: "8px",
  };

  return <button style={buttonStyle}>버튼입니다.</button>;
};

//다른 곳에서 사용할 수 있도록
export default LargeButton;
