import React, { Dispatch, SetStateAction } from "react";
import { TodoItemProps } from "../components/molecule/TodoItem";
import { APIKEY } from "../constants/apikey";
import { ERROR } from "../constants/errorMessage";

export const alarm = () => alert(ERROR.NOFUNCTION);

export const userInput = (msg: string) => prompt(msg) || ERROR.NOCONTENT;
export const localSet = (value: any) =>
  localStorage.setItem(APIKEY.LOCAL, JSON.stringify(value));

export const localGet = () => localStorage.getItem(APIKEY.LOCAL) || "[]";

type inititializeTodoListParams = {
  //   setTodoList: React.Dispatch<React.SetStateAction<TodoItemProps[]>>;
  //   setTodoId: React.Dispatch<React.SetStateAction<number>>;
  setTodoitems: Dispatch<SetStateAction<TodoItemProps[]>>;
  setId: Dispatch<SetStateAction<number>>;
};

export const inititializeTodoList = ({
  setTodoitems,
  setId,
}: inititializeTodoListParams) => {
  const mappedArray = JSON.parse(localGet()).map((v: any, i: number) => ({
    id: i,
    contents: v.contents,
  }));
  localSet(mappedArray);
  setTodoitems(mappedArray);
  setId(mappedArray.length);
};
