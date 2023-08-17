import { render, screen } from "@testing-library/react";
import { toDosMock } from "../../mocks/mockData";
import ToDoCard from "./ToDoCard";

describe("Given a ToDoCard component", () => {
  describe("When it's rendered", () => {
    test("Then it should show 'sport' as heading", () => {
      const expectedHeadingText = "sport";

      render(<ToDoCard toDo={toDosMock[0]} />);

      const textHeading = screen.getByRole("heading", {
        name: expectedHeadingText,
      });

      expect(textHeading).toBeInTheDocument();
    });
  });
});
