import { alarm } from "../../utils/util";

export type RoundCheckBoxProps = {
  isChecked?: boolean;
  //handleCheck 전달받아서 checkbox prev => !prev 값으로 변경해주기
  handleCheck?: () => void;
};

const RoundCheckBox = ({
  isChecked = false,
  handleCheck = alarm,
}: RoundCheckBoxProps) => {
  //react는 무조건 단방향이기 때문에 자식들끼리 서로 영향을 끼칠수 없음. ex) 버튼을 눌렀을때 쓰레기 통 아이콘 없애기
  //버튼과 쓰레기통 아이콘은 둘다 자식임.
  //따라서 무조건 부모에서 자식으로 영향을 끼쳐야함.(probs를 전달 받아야함)
  return (
    <div>
      <input
        //onChange 체크박스의 상태를 변경하고 싶을 때는 onclick보단 onChange 이벤트 핸들러를 사용하는 것이 올바른 방법입니다.
        onChange={handleCheck}
        checked={isChecked}
        className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded"
        type="checkbox"
      />
    </div>
  );
};

export default RoundCheckBox;
