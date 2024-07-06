import { useState } from "react";
import AddButton from "../atom/AddButton";
import TodoItem, { TodoItemProbs } from "../molecule/TodoItem";

const Body = () => {
  const [todoitems, setTodoitems] = useState<TodoItemProbs[]>([
    { contents: "축구하기" },
    { contents: "유로2024보기" },
    { contents: "유튜브하기" },
  ]);

  return (
    <div>
      {todoitems.map((v, i) => (
        <TodoItem key={i} {...v} />
      ))}
      <AddButton />
    </div>
  );
};

export default Body;
