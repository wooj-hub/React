import { TEXTSTYLE } from "../../styles/textStyle";

export type LabelProbs = {
  isChecked?: boolean;
  contents?: string;
};

const Label = ({ isChecked = false, contents = "내용 없음" }: LabelProbs) => {
  return (
    //TEXTSTYLE 에서 폰트스타일 가져오기
    <span className={isChecked ? TEXTSTYLE.DONE : TEXTSTYLE.TODO}>
      {contents}
    </span>
  );
};

export default Label;
