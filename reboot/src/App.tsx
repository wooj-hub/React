import { useState } from "react";

function App() {
  const [num, setNum] = useState<number>(0);

  //snapshot:
  //set~ 함수는 비동기
  //비동기: loop가 끝나고 함수가 실행된다

  const click = () => {
    setNum((v) => v + 1);
    console.log(num);
  };

  return (
    <div onClick={click} className="App">
      {num}
    </div>
  );
}

export default App;
