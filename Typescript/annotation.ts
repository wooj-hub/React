//annotation.ts

const coffee: string = "아메리카노";
const isicecream: boolean = false;
const cars: string[] = ["제네시스", "테슬라", "모닝"];
const lotto: number[] = [1, 2, 4, 5, 6, 8];
const cake: { name: string; price: number } = {
  name: "치즈케이크",
  price: 3000,
};

const test: null = null; //null밖에 못들어감
const test1: undefined = undefined; //undefined밖에 못들어감

const test2: any = "이것은 최후의 보루"; //모든 타입을 허용. 되도록이면 쓰지마

//quiz
//객체 student: 이름,프로그래밍 수업들, 나이, 현재재학중

const student: {
  name: string;
  classes: string[];
  age: number;
  isschool: boolean;
} = {
  name: "정우진",
  classes: ["java", "typescript", "javascript"],
  age: 24,
  isschool: true,
};

//함수생성
const add = (a: number, b: number): number => a + b;
add(1,3) // 4

//number+string = string
const add1 = (a:number, b:string):string =>a+b; //결과값 number로 선언하면 오류




