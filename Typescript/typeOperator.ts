//Union 연산자[합집합] : |

const a1: string | number = "가나다"; //문자열과 숫자 둘다 가능
const a2: Element | null = document.querySelector(".box"); //box가 있을수도 없을수도
//??
const a3: () => number = () => 1;

//마라탕 : {재료들:string[] , 가격:string or number}
const mara: { ingredient: string[]; price: string | number } = {
  ingredient: ["감자", "마라", "버섯"],
  price: "10000원",
};

//Intersection연산자[교집합] : &
//?
const pizza: { size: string } & { toppings: string[] } & { eat: () => void } = {
  size: "L",
  toppings: ["버섯", "치즈"],
  //eat는 매개변수없고 리턴값이 없는(void) 함수
  eat: () => {
    console.log("피자꿀맛");
  },
};
