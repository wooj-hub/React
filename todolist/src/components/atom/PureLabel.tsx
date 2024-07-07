import { ERROR } from "../../constants/errorMessage";

export type PureLabeProps = {
  contents?: string;
};

const PureLabel = ({ contents = ERROR.NOCONTENT }: PureLabeProps) => {
  return (
    //TEXTSTYLE 에서 폰트스타일 가져오기
    <span className="text-white font-bold text-lg">{contents}</span>
  );
};

export default PureLabel;
