//typeAlias:별칭, 별명

type TTest = string | string[];

//const test: = string | string[]; 와 같은 의미
const test3: TTest = "디카페인 아아";

//원두
type Bean = {
  shot: number;
  hasDecaffien: boolean;
};
//음료
type Liquid = {
  name: string;
  kcal: string | number;
  ingredients: string[];
};
//탄산
type Carbonated = {
  isZero: boolean;
};

//Beverage : name, kcal, ingredients

// type TBeverage = {
//   name: string;
//   kcal: number | string;
//   ingredients: string[];
//   isZero: boolean;
// };

//위에랑 같은 의미
type TBevarage = Liquid & Carbonated;

//Coffee: name,kcal,shot,hasDecaffien,ingredients
type TCoffee = Bean & Liquid;

const coffee1: TCoffee = {
  name: "아메리카노",
  kcal: "2400",
  shot: 2,
  hasDecaffien: false,
  ingredients: ["시럽", "원두"],
};

type MyTypograph = {
  font: string;
  fontWeight: number;
  color: string;
};

type Mybutton = {
  border: string;
  borderRadius: number;
  backgroundColor: string;
  click: () => void;
};

//const newButton: MyTypograph & Mybutton={}
