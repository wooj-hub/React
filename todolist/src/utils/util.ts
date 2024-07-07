import { APIKEY } from "../constants/apikey";
import { ERROR } from "../constants/errorMessage";

export const alarm = () => alert(ERROR.NOFUNCTION);

export const userInput = (msg: string) => prompt(msg) || ERROR.NOCONTENT;
export const localSet = (value: any) =>
  localStorage.setItem(APIKEY.LOCAL, JSON.stringify(value));

export const localGet = () => localStorage.getItem(APIKEY.LOCAL) || "[]";
