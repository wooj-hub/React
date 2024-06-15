//태그사용하려면 import 필수
import LargeButton from "./LargeButton";
import LunchButton from "./LunchButton";

function App() {
  return (
    <div className="App">
      <LunchButton />
      <LunchButton />

      <LargeButton />
      <LargeButton />
    </div>
  );
}

export default App;
