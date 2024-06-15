//generic.ts :  generalize[일반화하다]

// type a = {
//   first: string;
//   second: number;
// };

// type b = {
//   first: boolean;
//   second: number;
// };

// type c = {
//   first: number;
//   second: number;
// };

// type d = {
//   first: { name: string; price: number };
//   second: number;
// };

//위에 거를 일반화. <>에는 변수명도 가능. 두개 이상도 가능
type G<T> = {
  first: T;
  second: number;
};

//first에 문자열 값.
const test4: G<string> = {
  first: "문자열",
  second: 1234,
};

//first에 number 값.
const test6: G<number> = {
  first: 1234,
  second: 1234,
};

//제네릭이 두개 일때
type H<T, L> = {
  first: T;
  second: L;
};

const test7: H<string, number> = {
  first: "문자열",
  second: 1234,
};

//quiz
//type HamburgerSet<> = {main,side,drink}

type HambergerSet<A, B, C> = {
  main: A;
  side: B;
  drink: C;
};

type Morning = "머핀";
type NotMorning = "참깨빵";

type hambuger<T> = {
  bread: T;
  content: "불고기" | "쉬림프" | "치킨" | "토마토에그";
};

type Side = "감자튀김" | "코우슬로" | "맥너겟" | "소프트아이스크림";

type Coffee = "드립커피" | "아메리카노" | "디카페인" | "라떼";
type Beverage = "콜라" | "스프라이트" | "제로콜라" | "환타";

const MacMorning: HambergerSet<hambuger<Morning>, Side, Coffee | Beverage> = {
  main: {
    bread: "머핀", //hambuger<Morning> 이라서 머핀밖에 안뜸
    content: "토마토에그",
  },
  side: "감자튀김",
  drink: "드립커피",
};

// const a = fetch("https").then((v)=>v.json())

type Success<T> = {
  result: "success";
  value: T;
};

type Failure = {
  result: "fail";
  value: "error";
};

//Response_에도 <T>써줘야 함
type Response_<T> = Success<T> | Failure;

const getResponse = (a: Response_<string[]>) => {
  if (a.result == "success") {
    a.value.forEach((v) => console.log(v)); //a.value === stirng[]타입임
  } else {
    console.log(a.value); // error임
  }
};

getResponse({ result: "success", value: ["냉면", "고기", "불닭", "마라탕"] });
console.log(getResponse); //냉면 고기 불닭 마라탕 출력

getResponse({ result: "fail", value: "error" });
console.log(getResponse); //error 출력
