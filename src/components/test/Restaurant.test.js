import React from "react";
// import ReactDOM from "react-dom";
import { render, screen } from "@testing-library/react";
import TouristInfoCards from "../TouristInfoCards";
describe("TouristInfo", () => {
  it("render the child of class name ", async () => {
    render(<TouristInfoCards />);
    const classChild = screen.getByTestId("header-1");
    expect(classChild);
  });
  it("render the child of class name ", async () => {
    render(<TouristInfoCards />);
    const classChilds = screen.getAllByRole("article");
    expect(classChilds.length).toBe(3);
  });
});
