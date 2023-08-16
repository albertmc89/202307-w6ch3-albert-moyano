import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Given an App component", () => {
  describe("When it's rendered", () => {
    test("Then it should show 'List of ToDos' inside a heading", () => {
      const title = "List of ToDos";

      render(<App />);

      const headingTitle = screen.getByRole("heading", { name: title });

      expect(headingTitle).toBeInTheDocument();
    });
  });
});
