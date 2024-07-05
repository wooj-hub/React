import { useEffect, useState } from "react";

const Effect = () => {
  //react 라이브러리: view만 담단하는 친구
  //view 이외 것들은 리액트에서는 부수 효과[side effect]
  //side effect
  //1. 데이터 가져오기
  //2. 다른 api 사용하기
  //3. dom 직접 조작하기

  const [num, setNum] = useState(0);

  // useEffect(() => {}, []);
  // useEffect함수는 함수와 배열[의존성 배열]을 전달받음
  // 의존성 배열: 앞에 함수가 재실행 하도록 하는 요소들
  //num을 클릭하면 +1씩 되고 data를 콘솔 로그함
  useEffect(() => {
    //side effect와 관련된것
    //https://fakerapi.it/en
    const data = fetch("https://fakerapi.it/api/v1/addresses?_quantity=1")
      .then((v) => v.json())
      .then((v) => console.log(v));
  }, [num]);

  //quiz 클릭하면 로딩중이었다가 도시이름 가져오기

  //   const [city, setCity] = useState<string>("");
  //   const [loading, setLoading] = useState<boolean>(true);
  //   //trigger는 껏다,켰다해주는 역할
  //   const [trigger, setTrigger] = useState<boolean>(false);
  //   useEffect(() => {
  //     const data = fetch("https://fakerapi.it/api/v1/addresses?_quantity=1")
  //       .then((v) => v.json())
  //       .then((v) => {
  //         setLoading(() => false);
  //         setCity((prev) => v.data[0].city);
  //       });
  //   }, [trigger]);

  //   const reload = () => {
  //     setLoading(() => true);
  //     setTrigger((prev) => !prev);
  //   };

  //quiz 위에 코드를 await를 사용해서 코드 간단화 => trigger없앰

  // const [city, setCity] = useState<string>("");
  // const [loading, setLoading] = useState<boolean>(true);

  // const fetchData = async () => {
  //   setLoading(() => true);
  //   const response = await fetch(
  //     "https://fakerapi.it/api/v1/addresses?_quantity=1"
  //   );
  //   const result = await response.json();
  //   setCity(result.data[0].city);
  //   setLoading(() => false);
  // };

  // const reload = () => {
  //   fetchData();
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <div onClick={() => setNum((prev) => prev + 1)}>effect {num}</div>
    //quiz
    // <div onClick={reload}>effect {loading ? "로딩중" : city}</div>
  );
};

export default Effect;
