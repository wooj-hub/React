import { useMediaQuery } from "react-responsive";
import First from "./First";
import { useStore } from "./Store";
import SecondPc from "./SecondPc";
import SecondTablet from "./SecondTablet";

function App() {
  //zustand 는 probs 지옥 안하려고 필요함
  //inc함수 가져와서 버튼누를때마다 +1씩 해주기
  const { inc } = useStore();

  //반응형 웹 하는 방법 두가지임. App에서하는방법, 자식 그 자체에서 하는 방법.
  //반응형 웹. App에서 하는 방법.
  //769px 보다 줄어들면 true 가 나와서 색깔 바꾸기
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 769px)",
  });

  const isTablet = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    // 반응형 웹 자식 그 자체에서 하는 방법
    // <div>
    //   <button onClick={inc} className="p-4 bg-green-400">
    //     버튼
    //   </button>
    //   <First />
    // </div>

    //반응형 웹 App에서 하는 방법
    //Fisrt 사용하는 방법 알아보기
    <div>
      {isDesktopOrLaptop && <SecondPc />}
      {isTablet && <SecondTablet />}
    </div>
  );
}

export default App;
