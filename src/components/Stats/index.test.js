import React from "react";
import { render } from "@testing-library/react";
import Stats from "./index";

describe("Stats component", () => {
  test("renders top element correctly", () => {
    const stack = {
      peek: () => "Top Item",
      items: ["Item 1", "Item 2", "Item 3"]
    };
    const { getByText } = render(<Stats stack={stack} />);

    expect(getByText("Top Element: Top Item")).toBeInTheDocument();
  });

  test("renders stack size correctly", () => {
    const stack = {
      peek: () => "Top Item",
      items: ["Item 1", "Item 2", "Item 3"]
    };
    const { getByText } = render(<Stats stack={stack} />);

    expect(getByText("Stack Size: 3")).toBeInTheDocument();
  });
});
