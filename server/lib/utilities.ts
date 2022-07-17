//server/lib/utilities.ts
import * as jwt from "jsonwebtoken";
import { IGenerateToken } from "./utilities.spec";
const SECRET_KEY =
  "3+RXNc3lowCXXZULzCQn20ri2jnVAo5uxOtMIV/nvT7vaF04WCCg+hVVndC6NV5Qn+hNz0yWnkYORnNF2id/8VW4cCAGLwCSOfB3PKWGeCYVYSE1Yrm7+1+zsTUlv0DNTu/BePJ2hqAUHouhKwkqypFB+6oCs9sxYGQqEoOkRP2cYsXzMw4+BEYop4t/omfKigIQy8932KYMh2nCj9TtM7KrKuCDcRkYXG+rCRNHQ5cfnfUQERHr6cNGMI83HXKxYAF8yGyobXoIizDxl4gI4NvQuMnIYBhXvnAfxMaEVsadjCe9pGOzObV46B9xRRLGaiHUvAJ0gqm520H9yji7qQ==";

//fonction permettant de générer un token
export function generateToken(infos: IGenerateToken) {
  let token = jwt.sign(infos, SECRET_KEY, { expiresIn: "2h" });
  return token;
}
//Fonction permettant de générer un ID unique
export function create_UUID() {
  var dt = new Date().getTime();
  var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
    /[xy]/g,
    function (c) {
      var r = (dt + Math.random() * 16) % 16 | 0;
      dt = Math.floor(dt / 16);
      return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
    }
  );
  return uuid;
}

export function getUser(token: string) {
    let payload = null;
    if (token) {
      try {
        payload = jwt.verify(token, SECRET_KEY);
      } catch (e: any) {
        payload = null;
      }
    }
    return payload;
  }
  