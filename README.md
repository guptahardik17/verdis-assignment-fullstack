# Stack Visualizer - Verdis Fullstack Assignment

## Git Repo URL
- https://github.com/guptahardik17/verdis-assignment-fullstack.git

## Live Instance (temporary)
Currently this react service is deployed on Github Pages.
```sh
BASE URL:  https://guptahardik17.github.io/verdis-assignment-fullstack/
```

## How to run
```sh
$ git clone https://github.com/guptahardik17/verdis-assignment-fullstack.git
$ cd verdis-assignment-fullstack
$ npm install
$ npm start
```

## Features -
```sh
- Implemented the stack data structure
- Created UI to play with the stack visualization
- Currently I kept the stack size as 100, which we can make configurable also through UI in future if needed
- Alerts for Success and Error Messages
- Unbreakable UI to take care of overflow conditions or large input data
- Mobile screen size compatible, can be easily used in any device
```

## Brief Explanation of Choices -
```sh
- I chose react since it is light weight and flexible for such apps.
- Used React Components: StackVisual, StackOperation, and Stats. This modular approach helps to organize the codebase and maintain separation of concerns. Each component focuses on a specific aspect of the stack visualization: displaying the stack visually, providing operations like push and pop, and showing statistics like the top element and stack size.
- Used useState Hook: This allows for dynamic updates to the stack's data, triggering re-renders of the components whenever the stack is modified. By using state management, the UI remains in sync with the underlying stack data.
- Utilities: The Stack utility class provides the underlying data structure for the stack. It encapsulates the stack operations like push, pop, peek, isEmpty, isFull, and size providing a clean interface for manipulating the stack data. This separation of concerns ensures that the stack logic is decoupled from the presentation layer.
- Visual Representation: The StackVisual component visually represents the stack using simple HTML elements styled with CSS. Each item in the stack is rendered as a separate div element, allowing for easy customization and styling. The stack items are displayed in reverse order to reflect the LIFO (Last In, First Out) nature of the stack.
- User Interaction: The StackOperation component provides user interaction for pushing and popping items from the stack. It includes an input field for entering values to push and buttons for performing push and pop operations. User input triggers state updates, which in turn update the visualization of the stack.
- Stats Display: The Stats component displays statistics about the stack, such as the top element and stack size. It retrieves this information from the stack state and renders it in the UI. This component provides users with important insights into the current state of the stack.

Additional Points -
- The whole architecture is made using TDD (Test Driven Development) where each component have its own unit test file which keeps the product safe from unpredictable errors.
- This architecture is very extensible to incorporate more features easily.
- This code is deployed on github pages, so that you can easily play around with it.
- Covered edge cases and improved UX like getting the focus directly on the text box, you can just write anything and keep pressing enter to add to stack. If this was not handled then used had to click on text box everytime to write something.
- UI is mobile friendly also.
```

## Screenshots
![Initial UI][1]
![UI with data][2]
![UI with overflow data][8]
![Stack Empty Condition][3]
![Stack Overload Condition][4]
![Extended UI][5]
![Mobile Friendly Design][6]
![Mobile Friendly Extended Design][6]

[1]: https://imgur.com/15S0rC8.png
[2]: https://imgur.com/hfcAbte.png
[3]: https://imgur.com/MwnBiF4.png
[4]: https://imgur.com/q4d1mlS.png
[5]: https://imgur.com/kOqZ0q8.png
[6]: https://imgur.com/4APnRVA.png
[7]: https://imgur.com/qlWoyNc.png
[8]: https://imgur.com/erb31Gx.png
