import { useMediaQuery } from "react-responsive";
import { useStore } from "./Store";

const SecondTablet = () => {
  const { count } = useStore();
  return <div className="w-28 h-28 bg-blue-500">{count}</div>;
};

export default SecondTablet;
