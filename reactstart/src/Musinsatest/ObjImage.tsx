import { CSSProperties } from "react";

export type ObjImageProbs = {
  imagesrc: string;
};

const ObjImage = ({ imagesrc }: ObjImageProbs) => {
  const boxstyle: CSSProperties = {
    width: "180px",
    height: "200px",
    position: "relative",
  };

  const imgstyle: CSSProperties = {
    width: "100%",
    height: "100%",
  };

  const heartstyle: CSSProperties = {
    width: "20px",
    height: "20px",
    position: "absolute",
    bottom: "10px",
    right: "10px",
  };

  return (
    <div style={boxstyle}>
      <img src={imagesrc} alt="" style={imgstyle} />
      {/* 여기 안에다가 style 줘야 크기 적용됨 */}
      <svg
        style={heartstyle}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
        />
      </svg>
    </div>
  );
};

export default ObjImage;
