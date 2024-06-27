import { ChangeEvent, useState } from "react";

const InputForm = () => {
  //onClick이면 ClickEvent
  const handle = (e: ChangeEvent<HTMLInputElement>) => {
    // quiz text에 입력한 값 개수만큼 숫자 늘어나기
    //e.target.value 는 입력한 값
    // setTextLength((v) => e.target.value.length);

    // quiz 제한된 숫자까지만 입력할 수 있게 하기
    // if (e.target.value.length <= 15) {
    //   setTextLength(() => e.target.value.length);
    //   setValue(() => e.target.value);
    // }

    //quiz +버튼으로 제한된 숫자늘리면서 거기까지 입력하기
    if (e.target.value.length <= length) {
      setTextLength(() => e.target.value.length);
      setValue(() => e.target.value);
    }
  };

  //quiz
  //text에 입력한 값 개수만큼 숫자 늘어나기
  // const [textLength, setTextLength] = useState(0);

  //quiz
  //제한된 숫자까지만 입력할 수 있게 하기
  // const [value, setValue] = useState("슬픔아");
  // const [textLength, setTextLength] = useState(0);

  //quiz +버튼으로 제한된 숫자늘리면서 거기까지 입력하기
  const [value, setValue] = useState("슬픔아");
  const [textLength, setTextLength] = useState(0);
  const [length, setLength] = useState(15);
  const increase = () => {
    // length를 v로 써도됨
    setLength((length) => length + 1);
  };

  return (
    // div태그로 태그 여러개 가능
    <div className="border border-slate-300 rounded-md">
      {/* quiz text에 입력한 값 개수만큼 숫자 늘어나기 */}
      {/* <input onChange={handle} type="text " />
      <span>{textLength}</span> */}

      {/* quiz 제한된 숫자만큼 입력하기 */}
      {/* <input value={value} onChange={handle} type="text " className="border" />
      <span className="text-gray-700">{textLength}</span>
      <span className="text-gray-400">/15</span> */}

      {/* quiz +버튼을 누르면 제한된 숫자 늘어나기 */}
      <input value={value} onChange={handle} type="text " className="border" />
      <span className="text-gray-700">{textLength}</span>
      <span className="text-gray-400">/{length}</span>
      <button onClick={increase} className="border border-red-400 p-1">
        +
      </button>
    </div>
  );
};

export default InputForm;
