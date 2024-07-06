import First from "./First";
import { useStore } from "./Store";

function App() {
  //zustand 는 probs 지옥 안하려고 필요함
  //inc함수 가져와서 버튼누를때마다 +1씩 해주기
  const { inc } = useStore();

  return (
    <div>
      <button onClick={inc} className="p-4 bg-green-400">
        버튼
      </button>
      <First />
    </div>
  );
}

export default App;
