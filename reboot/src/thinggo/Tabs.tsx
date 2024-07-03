import { useState } from "react";
import CategoryButton from "./CategoryButton";

const Tabs = () => {
  //tab이 2개 일 때
  // <boolean> 으로 active 타입 명시해주기
  //   const [active, setActive] = useState<boolean>(true);

  //   const clickFirst = () => {
  //     setActive((active) => true);
  //   };
  //   const clickSecond = () => {
  //     setActive((active) => false);
  //   };

  //   const selected = "px-8 py-6 text-center border-b-4 border-black";
  //   const notSelected = "px-8 py-6 text-center";

  //tab이 여러개 일때
  const selected = "px-8 py-6 text-center border-b-4 border-black";
  const notSelected = "px-8 py-6 text-center";

  const [tabList, setTabList] = useState([
    {
      name: "무비",
      isSelect: true,
      categories: [
        { imagesrc: "netflix.png", name: "넷플릭스" },
        { imagesrc: "watcha.png", name: "왓챠" },
      ],
    },
    {
      name: "캐릭터",
      isSelect: false,
      categories: [
        { imagesrc: "disney.png", name: "디즈니" },
        { imagesrc: "aven.jpeg", name: "어벤져스" },
      ],
    },
    {
      name: "만화",
      isSelect: false,
      categories: [
        { imagesrc: "tooni.png", name: "투니버스" },
        { imagesrc: "ghibli.jpeg", name: "지브리" },
      ],
    },
  ]);

  const click = (i: number) => {
    setTabList((prev) => {
      const newTabList = prev.map((v, index) =>
        i === index ? { ...v, isSelect: true } : { ...v, isSelect: false }
      );
      return newTabList;
    });
  };

  return (
    <>
      <nav className="flex justify-center">
        {/* tab이 두개일때 */}
        {/* px-8 py-6은 패딩 */}
        {/* <div onClick={clickFirst} className={active ? selected : notSelected}>
        <button className="text-black">Tab 1</button>
      </div>
      <div onClick={clickSecond} className={active ? notSelected : selected}>
        <button className="text-black">Tab 2</button>
      </div> */}

        {/* tab이 여러개일때 */}
        {tabList.map((v, i) => {
          return (
            <div
              onClick={() => click(i)}
              className={v.isSelect ? selected : notSelected}
            >
              <button className="text-black">{v.name} </button>
            </div>
          );
        })}
      </nav>
      {tabList.map((v) => {
        // v.isSelect가 true라면 뒤에꺼 실행
        return (
          v.isSelect && v.categories.map((v1) => <CategoryButton {...v1} />)
        );
      })}
    </>
  );
};

export default Tabs;
