import React from "react";
import { render, fireEvent } from "@testing-library/react";
import StackOperation from "./index";
import Stack from "../../utilities/Stack";

describe("StackOperation component", () => {
  test("allows user to enter value and push to stack", () => {
    const setStackMock = jest.fn();
    const { getByPlaceholderText, getByText } = render(
      <StackOperation stack={new Stack()} setStack={setStackMock} />
    );

    const inputElement = getByPlaceholderText(
      "Enter a value to push to the stack"
    );
    const pushButton = getByText("Push");

    fireEvent.change(inputElement, { target: { value: "Item 1" } });
    fireEvent.click(pushButton);

    expect(setStackMock).toHaveBeenCalledWith(
      expect.objectContaining({
        items: ["Item 1"]
      })
    );
  });

  test("allows user to pop from stack", () => {
    const mockStack = new Stack();
    mockStack.push("Item 1");
    const setStackMock = jest.fn();
    const { getByText } = render(
      <StackOperation stack={mockStack} setStack={setStackMock} />
    );

    const popButton = getByText("Pop");

    fireEvent.click(popButton);

    expect(setStackMock).toHaveBeenCalledWith(
      expect.objectContaining({
        items: []
      })
    );
  });

});
