import { CSSProperties } from "react";
import Circle from "./Circle";
import CircleWithX from "./CircleWithX";

function App() {
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
    <div className="App">
      <div style={style}>
        <Circle backgroundColor="red" />
        {/* 밑에처럼 단독으로 css 줄수 있음. 글자 위치 조정 */}
        <span style={{ lineHeight: "2px" }}>XML</span>
        <CircleWithX />
      </div>

      <div style={style}>
        <Circle backgroundColor="yellow" />
        {/* 밑에처럼 단독으로 css 줄수 있음 */}
        <span style={{ lineHeight: "2px" }}>Javascript</span>
        <CircleWithX />
      </div>

      <div style={style}>
        <Circle backgroundColor="blue" />
        {/* 밑에처럼 단독으로 css 줄수 있음 */}
        <span style={{ lineHeight: "2px" }}>UI</span>
        <CircleWithX />
      </div>
    </div>
  );
}

export default App;
