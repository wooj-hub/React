import { useState } from "react";

type CounterProbs = {
  price: number;
};

const Counter = ({ price }: CounterProbs) => {
  const [num, setNum] = useState(1);

  const plus = () => {
    setNum((num) => num + 1);
  };

  const minus = () => {
    //숫자를 1밑으로 안내려가게
    setNum((prev) => (prev == 1 ? 1 : prev - 1));
    //{
    //if(prev==1){
    //     return 1;
    // }
    // else{
    //     return prev -1;
    // }} 와 같은 의미
  };

  return (
    <>
      <div>
        <button onClick={minus} className="border border-red-500 text-black">
          -
        </button>
        <span className="text-2xl">{num}</span>
        <button onClick={plus} className="border border-red-500 text-black">
          +
        </button>
      </div>
      <div>{price * num}</div>
    </>
  );
};
export default Counter;
