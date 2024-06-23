//+버튼 누를때마다 숫자 바꾸기
import { useState } from "react";

const Mybutton = () => {
  //컴포넌트에서 상태[state] 바뀐다
  //const [바꾸려는 값, 어떻게 바꿀건지의 함수] = useState(바꾸려는 값의 초기값);
  //   const [num, setNum] = useState(0);

  //   const Plushandle = () => {
  //     // num을 v라고 써도됨
  //     setNum((num) => (num < 10 ? num + 1 : num));
  //   };

  //   const Minushandle = () => {
  //     // num을 v라고 써도됨
  //     setNum((num) => (num > -10 ? num - 1 : num));
  //   };

  //quiz
  //0이하로는 안내려가고, 숫자 10 이상은 안되고, 숫자 10이 되면 글씨가 빨간색
  const [num, setNum] = useState(0);
  // setIsTen 함수는 isTen은 10이 되면 true 로 바뀜
  const [isTen, setIsTen] = useState(false);

  const Plushandle = () => {
    // num을 v라고 써도됨
    setNum((v) => {
      if (v === 10) {
        return 10;
      } else {
        v === 9 ? setIsTen((v1) => true) : setIsTen((v1) => false);
        return v + 1;
      }
    });
  };

  const Minushandle = () => {
    // num을 v라고 써도됨
    setNum((num) => (num === 0 ? 0 : num - 1));
    setIsTen((v) => false);
  };
  return (
    <div>
      <button onClick={Minushandle}>-</button>
      <span className={isTen == true ? "text-red-600" : "text-sky-600"}>
        {num}
      </span>
      {/* 버튼 클릭할때마다 handle함수=이벤트 실행 */}
      {/*<button onClick={Plushandle()}>+</button> Plushandle()이렇게 전달하면 안됨 */}
      <button onClick={Plushandle}>+</button>
    </div>
  );
};

export default Mybutton;
