import ObjImage, { ObjImageProbs } from "./ObjImage";
import ObjInfo, { ObjInfoProbs } from "./ObjInfo";
import ObjPrice, { ObjPriceProbs } from "./ObjPrice";

type ObjAllProbs = {
  //여기서 사용하려면 원래 파일에서 Probs 들도 export 해줘야함
  image: ObjImageProbs;
  name: ObjInfoProbs;
  price: ObjPriceProbs;
};

const ObjAll = ({ image, name, price }: ObjAllProbs) => {
  return (
    <div>
      <ObjImage imagesrc={image.imagesrc} />
      <ObjInfo {...name} />
      <ObjPrice price={price.price} discount={price.discount} />
    </div>
  );
};

export default ObjAll;
