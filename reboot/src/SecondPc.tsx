import { useMediaQuery } from "react-responsive";
import { useStore } from "./Store";

const SecondPc = () => {
  //useStore은 주스탄드에서 가져오는게 아니라 store.ts에서 가져와야함
  const { count } = useStore();

  return <div className="w-28 h-28 bg-red-500">{count}</div>;
};

export default SecondPc;
