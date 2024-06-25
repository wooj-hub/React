import { CSSProperties } from "react";

export type ObjPriceProbs = {
  discount?: string;
  price: string;
};

const ObjPrice = ({ discount, price }: ObjPriceProbs) => {
  const discountStyle: CSSProperties = {
    color: "red",
  };
  return (
    <div>
      {!!discount && <span style={discountStyle}>{discount}%</span>}{" "}
      <span>{Number(price).toLocaleString()}원</span>
    </div>
  );
};

export default ObjPrice;
