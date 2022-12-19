import React, { Component } from "react";
import ThemeContext from "../contexts/ThemeContext";
import UserContext from "../contexts/UseContext";

import "../assets/css/style.css";

export default class Headers extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {({ user, login, isLoggedIn, logOut, isLoading }) => (
          <ThemeContext.Consumer>
            {theme => (
              <div
                className="box"
                style={{
                  ...theme,
                  display: "flex",
                  justifyContent: "space-between"
                }}
              >
                <h2>Header</h2>
                <div>
                  {!isLoading &&
                    (isLoggedIn ? (
                      <span>
                        <span>{user.name}</span>
                        <span className="logOut" onClick={logOut}>
                          logout
                        </span>
                      </span>
                    ) : (
                      <button onClick={login}>Login</button>
                    ))}
                </div>
              </div>
            )}
          </ThemeContext.Consumer>
        )}
      </UserContext.Consumer>
    );
  }
}
//first way to use context in class component is to use contextType property
//second way is to use Consumer component nested inside the component that needs to consume the context
//third way is to use useContext hook which is a function that takes a context object and returns the current context value for that context
