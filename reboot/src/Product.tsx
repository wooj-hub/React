import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  // 동적라우팅을 위한
  //abc 는 App.tsx 에서 쓴거와 일치해야 함. abc말고 아무거나 상관없음
  //홈페이지 뒤에 숫자 개수와는 상관없음
  const { id } = useParams();

  useEffect(() => {}, []);

  return <div>프로덕트{id}</div>;
};

export default Product;
