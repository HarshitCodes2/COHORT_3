import { atom } from "recoil";

export const username = atom({
  key: "username",
  default: "",
});

export const password = atom({
  key: "password",
  default: "",
});

export const role = atom({
  key: "role",
  default: "user",
});
