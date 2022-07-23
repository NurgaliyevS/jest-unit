import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

describe("App file", () => {
  test("Router test", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const mainLink = screen.getByTestId("main-link");
    const aboutLink = screen.getByTestId("main-about");
    userEvent.click(aboutLink);
    expect(screen.getByTestId("about-page")).toBeInTheDocument();
    userEvent.click(mainLink);
    expect(screen.getByTestId("main-page")).toBeInTheDocument();
  });

  test("Error Page", () => {
    render(
      <MemoryRouter initialEntries={["/erererqeqwdsaa"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByTestId("error-page")).toBeInTheDocument();
  });
});
