import { useMediaQuery } from "react-responsive";
import { useStore } from "./Store";

const Second = () => {
  //useStore은 주스탄드에서 가져오는게 아니라 store.ts에서 가져와야함
  const { count } = useStore();

  //반응형 웹. 자식 그 자체에서 하는 방법
  //800px 보다 줄어들면 true 가 나와서 색깔 바꾸기
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 800px)",
  });

  const tablet = "w-28 h-28 bg-blue-500";
  const desktop = "w-28 h-28 bg-red-500";
  return <div className={isDesktopOrLaptop ? desktop : tablet}>{count}</div>;
};

export default Second;
