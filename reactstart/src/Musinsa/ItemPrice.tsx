import { CSSProperties } from "react";
import { changeToCurrency } from "../util";

export type ItemPriceProps = {
  discount?: string;
  price: string;
};

const ItemPrice = ({ discount, price }: ItemPriceProps) => {
  const discountStyle: CSSProperties = {
    color: "red",
    marginRight: "5px",
  };

  return (
    <div>
      {/* 맨 뒤에 {" "}는 할인율과 가격간에 공백을 표시 */}
      {!!discount && <span style={discountStyle}>{discount}%</span>}{" "}
      <span>{changeToCurrency(price, "korea")}</span>
    </div>
  );
};

export default ItemPrice;
