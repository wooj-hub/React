//Store.ts
//상태관리 관련 라이브러리
//probs지옥을 막기위함
import { create } from "zustand";

type Store = {
  count: number;
  //inc는 함수형
  inc: () => void;
};

export const useStore = create<Store>()((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
}));
