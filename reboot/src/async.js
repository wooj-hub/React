//async 무조건 return을 프로미스타입 돌려줌
const hamburger = async () => {
  return "치즈버거";
};

hamburger().then((v) => console.log(v));

//fetch는 promise 타입
//await =promise 가 [fullied,rejected]될때까지 함수의 실행을 정지
const fetchData = async () => {
  const response = await fetch("www");
  const data = await response.json();
  return data;
};
