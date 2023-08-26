import { atom, selector } from "recoil";

export const isLoggedInState = atom({
  key: "isLoggedInState",
  default: false, // 로그인 상태의 기본값
});

export const userAuthSelector = selector({
  key: "userAuthSelector",
  get: ({ get }) => get(isLoggedInState), // 로그인 상태를 가져옴
});