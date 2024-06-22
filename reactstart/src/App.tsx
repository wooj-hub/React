import { CSSProperties } from "react";
import Rectangle from "./Palette/Rectangle";

function App() {
  const style: CSSProperties = {
    width: "50px",
    display: "flex",
    flexDirection: "column",
    border: "0.2px solid purple",
    gap: "2px",
  };

  const arr = [
    { color: "black", text: "50", backgroundColor: "#E1F5FE" },
    { color: "black", text: "100", backgroundColor: "#B3E5FC" },
    { color: "white", text: "150", backgroundColor: "#81D4FA" },
    { color: "white", text: "200", backgroundColor: "#4FC3F7" },
    { color: "white", text: "250", backgroundColor: "#29B6F6" },
  ];
  return (
    <div className="App">
      <div style={style}>
        <Rectangle color="black" text="light blue" backgroundColor="white" />
        {arr.map((v) => (
          <Rectangle {...v} />
        ))}
      </div>
    </div>
  );
}

export default App;
