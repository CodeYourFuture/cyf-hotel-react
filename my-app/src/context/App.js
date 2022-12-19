// video: lesson 5 . 2:25:00 cookie and js-cookie npm package Auth

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Contact from "./components/Contact";
import ThemeContext, { themes } from "./contexts/ThemeContext";
import UserContext from "./contexts/UseContext";
import UseAuth from "./hooks/UseAuth";

import "./assets/css/style.css";

export default function App() {
  const [theme, setTheme] = useState(themes.light);
  const { user, login, isLoggedIn, logOut, isLoading } = UseAuth();

  return (
    <div>
      <Router>
        <UserContext.Provider
          value={{ user, login, isLoggedIn, logOut, isLoading }}
        >
          <ThemeContext.Provider value={theme}>
            {theme === themes.light ? (
              <button onClick={() => setTheme(themes.dark)}>Dark</button>
            ) : (
              <button onClick={() => setTheme(themes.light)}>Light</button>
            )}
            <Header />
            <section style={{ display: "flex" }}>
              <Sidebar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
              {/* <Home /> */}
            </section>
            <Footer />
          </ThemeContext.Provider>
        </UserContext.Provider>
      </Router>
    </div>
  );
}
