import { IoMenuSharp } from "react-icons/io5";
import { alarm } from "../../utils/util";

type MenuIconProps = {
  onClick?: () => void;
};
const MenuIcon = ({ onClick = alarm }: MenuIconProps) => {
  return <IoMenuSharp onClick={onClick} className="text-white" />;
};

export default MenuIcon;
