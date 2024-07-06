import { useState } from "react";
import Label from "../atom/Label";
import RoundCheckBox from "../atom/RoundCheckBox";
import TrashIcon from "../atom/TrashIcon";

export type TodoItemProps = {
  contents: string;
  onDelete?: () => void;
};
const TodoItem = ({ contents, onDelete }: TodoItemProps) => {
  const [isChecked, SetIsChecked] = useState<boolean>(false);
  //checkbox 를 check표시할수있도록 해주는 함수
  const handleCheck = () => {
    SetIsChecked((prev) => !prev);
  };

  const obj = {
    roundCheckBox: {
      isChecked: isChecked,
      handleCheck: handleCheck,
    },
    label: {
      isChecked: isChecked,
      contents: contents,
    },
    trashIcon: {
      onDelete,
    },
  };

  return (
    <div className="flex items-center gap-1">
      {/* <RoundCheckBox handleCheck={handleCheck} isChecked={isChecked} /> 와 같은 의미*/}
      <RoundCheckBox {...obj.roundCheckBox} />
      <Label {...obj.label} />
      {isChecked && <TrashIcon {...obj.trashIcon} />}
    </div>
  );
};

export default TodoItem;
