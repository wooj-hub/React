import { ERROR } from "../../constants/errorMessage";
import { TEXTSTYLE } from "../../styles/textStyle";

export type CheckedLabelProps = {
  isChecked?: boolean;
  contents?: string;
};

const CheckedLabel = ({
  isChecked = false,
  contents = ERROR.NOCONTENT,
}: CheckedLabelProps) => {
  return (
    //TEXTSTYLE 에서 폰트스타일 가져오기
    <span className={isChecked ? TEXTSTYLE.DONE : TEXTSTYLE.TODO}>
      {contents}
    </span>
  );
};

export default CheckedLabel;
