import { CSSProperties } from "react";
import { IconType } from "react-icons";

type Status = {
  info: "#27437C";
  check: "#284D30";
  warning: "#7A2A32";
};

export type StatusIconProps = {
  color: keyof Status;
  //아이콘은 아이콘타입
  Icon: IconType;
};

const StatusIcon = ({ color, Icon }: StatusIconProps) => {
  //keyof 에 관한 object를 변수로 정의 해주기.
  //type에다가는 [키값] 사용 불가능 ex)Status[color] 불가능
  const statusObj: Status = {
    check: "#284D30",
    info: "#27437C",
    warning: "#7A2A32",
  };

  const style: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: statusObj[color],
    border: "50%",
    fontSize: "20px",
  };

  return (
    <span style={style}>
      {/* 아이콘 생성 */}
      <Icon />
    </span>
  );
};
export default StatusIcon;
