//substract 함수 (a,b)
//뒤에 number는 결과값의 타입임
const substract = (a: number, b: number): number => a - b;

//optinal: ?를 붙임. undefined 일수도 있음
const substract1 = (a: number, b?: number): number => {
  if (b === undefined) {
    return 0;
  } else {
    return a - b;
  }
};

type Food = {
  name: string;
  price: number;
  kcal?: number; //optional. undefined일수도 있음
};

const lunch: Food = {
  name: "냉면",
  price: 9000,
  //kcal를 안써도 됨. ->undefined
};

//keyof
//obj {k:v}
type Course = {
  name: string;
  classroom: "A" | "B" | "C";
};

type A = keyof Course // "name" 또는 "classroom". key값들이 들어가 있음.
const test5:A = "classroom" // "name" 또는 "classroom"
