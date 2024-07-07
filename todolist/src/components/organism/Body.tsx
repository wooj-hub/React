import { useState } from "react";
import AddButton from "../atom/AddButton";
import TodoItem, { TodoItemProps } from "../molecule/TodoItem";
import { userInput } from "../../utils/util";
import { INFO } from "../../constants/infoMessage";

const Body = () => {
  const [id, setId] = useState<number>(0);
  const [todoitems, setTodoitems] = useState<TodoItemProps[]>([
    // id를 미리 입력하면 새로 입력하는 거랑 충돌안됨???????
    { id: 0, contents: "잠자기" },
    { id: 1, contents: "축구" },
    { id: 2, contents: "놀기" },
  ]);

  const addItem = () => {
    // const todo = prompt("오늘 할일 추가") || "입력 오류";
    // setTodoitems((prev) => {
    //   //배열에 새로운 객체 추가하는법
    //   return [...prev, { contents: todo }];
    //코드 단순화. 위에랑 같은 의미
    const newData = { id, contents: userInput(INFO.TODO) };
    setTodoitems((prev) => {
      return [...prev, newData];
    });

    setId((prev) => prev + 1);

    //JSON.stringify(): obj ->string
    localStorage.setItem(String(id), JSON.stringify(newData));
  };

  const deleteItem = (id: number) => {
    // id가 삭제할 id와 같지 않은 경우에만 true를 반환합니다.
    // 따라서 true들만 유지 => 삭제할 거 삭제하고 나머지 요소만 유지
    setTodoitems((prev) => prev.filter((value) => value.id !== id));
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
