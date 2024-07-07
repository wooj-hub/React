import { useEffect, useState } from "react";
import AddButton from "../atom/AddButton";
import TodoItem, { TodoItemProps } from "../molecule/TodoItem";
import { userInput } from "../../utils/util";
import { INFO } from "../../constants/infoMessage";

const Body = () => {
  const [id, setId] = useState<number>(0);
  const [todoitems, setTodoitems] = useState<TodoItemProps[]>([
    // id를 미리 입력하면 새로 입력하는 거랑 충돌안됨???????
  ]);

  const addItem = () => {
    // const todo = prompt("오늘 할일 추가") || "입력 오류";
    // setTodoitems((prev) => {
    //   //배열에 새로운 객체 추가하는법
    //   return [...prev, { contents: todo }];
    //코드 단순화. 위에랑 같은 의미
    const newData = { id, contents: userInput(INFO.TODO) };
    setTodoitems((prev) => {
      //storage에 값들 저장하기. storage에 값이 저장되어야 새로고침했을 때 값들이 유지됨.
      const updatedData = [...prev, newData];
      // 배열은 storage에 못들어가서 문자화 시켜줘야 함 JSON.stringify
      localStorage.setItem("TodoList", JSON.stringify(updatedData));
      return [...prev, newData];
    });

    setId((prev) => prev + 1);
  };

  //새로고침했을때 ???
  useEffect(() => {
    // storage에 저장된 값(문자) 밖으로 출력하기. null 값이면 "[]". 그냥 []이렇게 하면 문자가 아니라서 JSON.parse에서 오류남
    const todolist = localStorage.getItem("TodoList") || "[]";
    // 문자에서 배열로 바꾸기 =>JSON.parse(todolist)
    const ArrayTodolist = JSON.parse(todolist);

    //?????? 새로 고침했을 때 id를 다시 순서대로 정렬해줌
    const mappedArray = ArrayTodolist.map((v: any, i: number) => ({
      id: i,
      contents: v.contents,
    }));
    ///??????새로 고침했을 때 id를 다시 순서대로 정렬해줌
    localStorage.setItem("TodoList", JSON.stringify(mappedArray));
    setTodoitems(mappedArray);
    // . 했을때 length 안나와??? 타입이 명시적이지 않아서 그렇대. 사용은 가능
    setId(ArrayTodolist.length);
  }, []);

  const deleteItem = (id: number) => {
    // id가 삭제할 id와 같지 않은 경우에만 true를 반환합니다.
    // 따라서 true들만 유지 => 삭제할 거 삭제하고 나머지 요소만 유지
    // setTodoitems((prev) => prev.filter((value) => value.id !== id));

    setTodoitems((prev) => {
      const updatedData = prev.filter((value) => value.id !== id);
      //데이터를 삭제했을 때 id도 알맞게 줄여져야 함
      //이걸 안하면 id 값은 줄어들지 않음 . 근데 delete 했을 때 에러가 있음.
      //그래서 새로 고침했을 때 다시 정렬하도록 수정
      // const mappedData = updatedData.map((v, i) => {
      //   return { id: i, contents: v.contents };
      // });
      localStorage.setItem("TodoList", JSON.stringify(updatedData));
      return updatedData;
    });
  };

  return (
    <div className="flex flex-col items-center max-w-lg">
      {/* w-fit? */}
      <div className="w-full bg-white p-16 border shadow-lg ">
        {todoitems.map((v) => (
          //인덱스 번호로하면 오류가 있어서 고유의 id 번호를 줘야함
          //id 번호를 키로 받아 id번호 순서대로 contents props를 전달받음
          //키 값은 없어도 되긴하는데 있으면 구분이 더 쉬움
          <TodoItem key={v.id} {...v} onDelete={() => deleteItem(v.id)} />
        ))}
        {/* 버튼 누르면 할일 추가하기 */}
      </div>
      {/* relative? absolute? */}
      <div className="relative bottom-5">
        <AddButton handleClick={addItem} />
      </div>
    </div>
  );
};
export default Body;
