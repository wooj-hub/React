import { ERROR } from "../constants/errorMessage";

export const alarm = () => alert(ERROR.NOFUNCTION);

export const userInput = (msg: string) => prompt(msg) || ERROR.NOCONTENT;
