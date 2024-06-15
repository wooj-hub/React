//Hybrid Type
//type Coffee = Bean & Liqiud

//type Direction = string; 에서 더 세부화
//Literal Type
type Direction = "north" | "south" | "west" | "east";

const destination: Direction = "north"; //위에 저 4개만 가능

type PrimaryColor = "#05141F" | "#FFFFFF";
type SecondaryColor = "#5D7D2B" | "#4C5B35" | "#589000";
type FontSize = 11 | 12 | 13 | 14 | 16 | 20 | 24;

const component: { color: PrimaryColor; fontSize: FontSize }[] = [
  { color: "#05141F", fontSize: 16 },
  { color: "#FFFFFF", fontSize: 13 },
  { color: "#05141F", fontSize: 20 },
];

component.forEach(({ color, fontSize }) => {
  const btn = document.createElement("button");
  btn.style.color = color;
  btn.style.fontSize = fontSize + "px";
});
