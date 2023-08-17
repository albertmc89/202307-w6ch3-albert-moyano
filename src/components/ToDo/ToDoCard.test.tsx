import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { toDosMock } from "../../mocks/mockData";
import { store } from "../../store";
import ToDoCard from "./ToDoCard";

describe("Given a ToDoCard component", () => {
  describe("When it's rendered", () => {
    test("Then it should show 'sport' as heading", () => {
      const expectedHeadingText = "sport";

      render(
        <Provider store={store}>
          <ToDoCard toDo={toDosMock[0]} />
        </Provider>,
      );

      const textHeading = screen.getByRole("heading", {
        name: expectedHeadingText,
      });

      expect(textHeading).toBeInTheDocument();
    });
  });
});
