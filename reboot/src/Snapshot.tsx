import { useState } from "react";

function Snapshot() {
  const [num, setNum] = useState<number>(0);

  //snapshot:
  //set~ 함수는 비동기
  //비동기: loop가 끝나고 함수가 실행된다
  //0일때 클릭하면 1로 올라가지만 콘솔 로그는 0을출력함.

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

export default Snapshot;
