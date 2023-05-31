import { atom } from "recoil";

export const userState = atom({
  key: "userState",
  default: [],
});

export const favoriteState = atom({
  key: "favoriteState",
  default: [],
});

export const hospitalState = atom({
  key: "hospitalState",
  default: [],
});
