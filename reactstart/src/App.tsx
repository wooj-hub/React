import { CSSProperties } from "react";
import Rectangle from "./Rectangle";

function App() {
  const style: CSSProperties = {
    width: "50px",
    flexDirection: "column",
    border: "0.2px solid purple",
    gap: "5px",
  };
  return (
    <div className="App">
      <div style={style}>
        <Rectangle color="black" text="light blue" backgroundColor="white" />
        <Rectangle color="black" text="50" backgroundColor="#E1F5FE" />
        <Rectangle color="black" text="100" backgroundColor="#B3E5FC" />
        <Rectangle color="black" text="200" backgroundColor="#81D4FA" />
        <Rectangle color="white" text="300" backgroundColor="#4FC3F7" />
        <Rectangle color="white" text="400" backgroundColor="#29B6F6" />
        <Rectangle color="white" text="500" backgroundColor="#03A9F4" />
        <Rectangle color="white" text="600" backgroundColor="#039BE5" />
        <Rectangle color="white" text="700" backgroundColor="#0288D1" />
        <Rectangle color="white" text="800" backgroundColor="#0277BD" />
        <Rectangle color="white" text="900" backgroundColor="#01579B" />
      </div>
    </div>
  );
}

export default App;
