import { useState } from "react";

const Queue = () => {
  const [num, setNum] = useState<number>(1);

  const click = () => {
    // setNum(num + 1);
    // setNum(num + 1);
    // setNum(num + 1);
    // //이 결과값은 +1씩 더해져서 나옴

    //microtask queue
    setNum((n) => n + 1);
    setNum((n) => n + 1);
    setNum((num) => num + 1); //위에 num과는 다른 num임. 아무거나 써도 됨.
    //이 결과값은 +3씩 더해져서 나옴
  };

  return <div onClick={click}>{num}</div>;
};

export default Queue;
