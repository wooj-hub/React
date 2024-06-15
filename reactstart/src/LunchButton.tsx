import { CSSProperties } from "react";

const LunchButton = () => {
  const buttonStyle: CSSProperties = {
    backgroundColor: "pink",
    padding: "10px",
  };

  //h1 태그 색깔은 하늘색, 폰트사이즈 20px
  //h1 태그 내용은 오늘 점심

  const h1Style: CSSProperties = {
    color: "blue",
    fontSize: "20px",
  };
  return (
    <>
      <button style={buttonStyle}>버튼입니다.</button>
      <h1 style={h1Style}>오늘 점심 메뉴 삼계탕</h1>
    </>
  );
};
//다른 곳에서 사용할 수 있도록
export default LunchButton;
