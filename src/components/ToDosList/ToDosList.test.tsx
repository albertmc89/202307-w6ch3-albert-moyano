import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store";
import ToDosList from "./ToDosList";

describe("Given a ToDosList component", () => {
  describe("When it's rendered", () => {
    test("Then it should show 'ToDo list:' as heading", () => {
      const expectedHeadingText = "ToDo list:";

      render(
        <Provider store={store}>
          <ToDosList />
        </Provider>,
      );

      const textHeading = screen.getByRole("heading", {
        name: expectedHeadingText,
      });

      expect(textHeading).toBeInTheDocument();
    });
  });
});
