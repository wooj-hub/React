import ItemImage, { ItemImageProps } from "./ItemImage";
import ItemInfo, { ItemInfoProps } from "./ItemInfo";
import ItemPrice, { ItemPriceProps } from "./ItemPrice";

type ItemProps = {
  itemImage: ItemImageProps;
  itemInfo: ItemInfoProps;
  itemPrice: ItemPriceProps;
};

const Item = ({ itemImage, itemInfo, itemPrice }: ItemProps) => {
  return (
    <div>
      {/* <ItemImage {...itemImage} /> 와 같은의미*/}
      <ItemImage imageSrc={itemImage.imageSrc} />
      <ItemInfo {...itemInfo} />
      <ItemPrice {...itemPrice} />
    </div>
  );
};
export default Item;
