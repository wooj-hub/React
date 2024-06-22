import { CSSProperties } from "react";
import Pill from "./Pill";

function App() {
  return (
    <div className="App">
      {/* 전에 했던거를 Pill로 대체 */}
      <Pill text="XML" backgroundColor="red" />
      <Pill text="Javascript" backgroundColor="yellow" />
      <Pill text="UI" backgroundColor="blue" />
    </div>
  );
}

export default App;
