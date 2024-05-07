import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  test("renders without crashing", () => {
    const { getByText } = render(<App />);
    const stackElement = getByText("Stack");

    expect(stackElement).toBeInTheDocument();
  });
});
