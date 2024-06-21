import { CSSProperties } from "react";
import StatusIcon, { StatusIconProps } from "./StatusIcon";
import MessageText, { MessageTextProps } from "./MessageText";
import ActionButton from "./ActionButton";

type SnackbarProps = {
  statusIcon: StatusIconProps;
  messageText: MessageTextProps;
};

const Snackbar = ({ statusIcon, messageText }: SnackbarProps) => {
  const style: CSSProperties = {
    backgroundColor: "black",
    padding: "12px",
    width: "240px",
    borderRadius: "16px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  return (
    <div style={style}>
      <div style={{ display: "flex" }}>
        {/* <StatusIcon color = {statusIcon.color} Icon = {statusIcon.Icon} 와 같은의미/> */}
        <StatusIcon {...statusIcon} />
        <MessageText {...messageText} />
      </div>
      <ActionButton />
    </div>
  );
};

export default Snackbar;
