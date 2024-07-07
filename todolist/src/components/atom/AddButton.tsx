import { alarm } from "../../utils/util";

type AddButton = {
  handleClick?: () => void;
};

const AddButton = ({ handleClick = alarm }: AddButton) => {
  return (
    <button
      onClick={handleClick}
      className="h-10 py-5 px-8 rounded-3xl bg-purple-500 text-white font-bold text-lg flex  items-center "
    >
      + New Task
    </button>
  );
};

export default AddButton;
