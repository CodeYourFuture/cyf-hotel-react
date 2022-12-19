import { useState, useEffect } from "react";
// import Cookies from "js-cookie";
import { getTokens, setTokens, removeTokens } from "../tools/utils";
// import axios from "axios";
import request from "../tools/request";

export default function useAuth() {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    // const token = Cookies.get("token");
    const token = getTokens();
    if (token) {
      getUser(token);
    } else {
      setIsLoading(false);
    }
  }, []);

  function getUser(token) {
    // fetch("https://jsonplaceholder.typicode.com/users", {
    //   headers: {
    //     authorization: `Bearer ${getTokens()}`,
    //   },
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     const user = data.find(user => user.email === token);
    //     setUser(user);
    //     setIsLoggedIn(true);
    //   })
    //   .finally(() => setIsLoading(false));
    request("/users", {
      //   headers: {
      //     authorization: `Bearer ${getTokens()}`, },
    })
      .then(response => {
        const user = response.data.find(user => user.email === token);
        setUser(user);
        setIsLoggedIn(true);
      })
      .finally(() => setIsLoading(false));
  }

  function login() {
    request("/users/1").then(({ data }) => {
      setUser(data);
      setIsLoggedIn(true);
      // Cookies.set("token", data.email);
      setTokens(data.email);
    });
  }
  function logOut() {
    setUser({});
    setIsLoggedIn(false);
    // Cookies.remove("token");
    removeTokens();
  }
  return { user, login, isLoggedIn, isLoading, logOut };
}
