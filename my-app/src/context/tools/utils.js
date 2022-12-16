import Cookies from "js-cookie";
import { TOKEN_NAME } from "./constant";

export function getTokens() {
  // localStorage.getItem("token");
  return Cookies.get(TOKEN_NAME);
}

export function setTokens(token) {
  // localStorage.setItem("token", token);
  Cookies.set(TOKEN_NAME, token);
}

export function removeTokens() {
  // localStorage.removeItem("token");
  Cookies.remove(TOKEN_NAME);
}
