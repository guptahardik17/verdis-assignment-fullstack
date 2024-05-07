import React from "react";
import { render } from "@testing-library/react";
import StackComponent from "./index";

describe("StackComponent", () => {
  test("renders title correctly", () => {
    const { getByText } = render(<StackComponent />);
    expect(getByText("Verdis Assignment - Stack Visualization")).toBeInTheDocument();
  });

  test("renders StackVisual component", () => {
    const { getByTestId } = render(<StackComponent />);
    expect(getByTestId("stack-visual")).toBeInTheDocument();
  });

  test("renders StackOperation component", () => {
    const { getByTestId } = render(<StackComponent />);
    expect(getByTestId("stack-operation")).toBeInTheDocument();
  });

  test("renders Stats component", () => {
    const { getByTestId } = render(<StackComponent />);
    expect(getByTestId("stack-stats")).toBeInTheDocument();
  });
});
