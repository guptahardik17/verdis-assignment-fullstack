import React from "react";
import { render } from "@testing-library/react";
import StackVisual from "./index";

describe("StackVisual component", () => {
  test("renders stack items correctly", () => {
    const stack = {
      items: ["Item 1", "Item 2", "Item 3"]
    };
    const { getByText } = render(<StackVisual stack={stack} />);

    expect(getByText("Item 1")).toBeInTheDocument();
    expect(getByText("Item 2")).toBeInTheDocument();
    expect(getByText("Item 3")).toBeInTheDocument();
  });

  test("renders stack title", () => {
    const stack = {
      items: []
    };
    const { getByText } = render(<StackVisual stack={stack} />);

    expect(getByText("Stack")).toBeInTheDocument();
  });
});
