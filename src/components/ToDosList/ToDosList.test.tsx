import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { toDosMock } from "../../mocks/mockData";
import { setupStore, store } from "../../store";
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

  describe("When it's rendered with the toDo 'sport' and toDo 'study'", () => {
    test("Then it should show the toDo 'sport' and toDo 'study inside headings", () => {
      const store = setupStore({
        toDosState: {
          toDos: toDosMock,
        },
      });

      render(
        <Provider store={store}>
          <ToDosList />
        </Provider>,
      );

      toDosMock.forEach((toDo) => {
        const toDosHeadings = screen.getByRole("heading", { name: toDo.name });
        expect(toDosHeadings).toBeInTheDocument();
      });
    });
  });
});
