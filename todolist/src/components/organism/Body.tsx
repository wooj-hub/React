import { useState } from "react";
import AddButton from "../atom/AddButton";
import TodoItem, { TodoItemProps } from "../molecule/TodoItem";

const Body = () => {
  const [todoitems, setTodoitems] = useState<TodoItemProps[]>([
    { contents: "축구하기" },
    { contents: "유로2024 보기" },
    { contents: "유튜브하기" },
  ]);

  const addItem = () => {
    const todo = prompt("오늘 할일 추가") || "입력 오류";
    setTodoitems((prev) => {
      //배열에 새로운 객체 추가하는법
      return [...prev, { contents: todo }];
    });
  };

  const deleteItem = (index: number) => {
    // 인덱스 i가 삭제할 인덱스 index와 같지 않은 경우에만 true를 반환합니다.
    // 따라서 true들만 유지 => 삭제할 거 삭제하고 나머지 요소만 유지
    setTodoitems((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div>
      {todoitems.map((v, i) => (
        //인덱스 번호를 키로 받아 인덱스 순서대로 contents props를 전달받음
        <TodoItem key={i} {...v} onDelete={() => deleteItem(i)} />
      ))}
      {/* 버튼 누르면 할일 추가하기 */}
      <AddButton handleClick={addItem} />
    </div>
  );
};
export default Body;
