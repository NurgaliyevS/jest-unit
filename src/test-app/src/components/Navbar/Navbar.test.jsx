import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithRouter } from "../../test/helpers/renderWithRouter";
import Navbar from "./Navbar";

describe("NAVBAR TEST", () => {
  test("Test about link", () => {
    render(renderWithRouter(<Navbar />));
    const aboutLink = screen.getByTestId("about-link");
    userEvent.click(aboutLink);
    expect(screen.getByTestId("about-page")).toBeInTheDocument();
  });

  test("Test users link", () => {
    render(renderWithRouter(<Navbar />));
    const usersLink = screen.getByTestId("users-link");
    userEvent.click(usersLink);
    expect(screen.getByTestId("users-page")).toBeInTheDocument();
  });

  test("Test main link", () => {
    render(renderWithRouter(<Navbar />));
    const mainLink = screen.getByTestId("main-link");
    userEvent.click(mainLink);
    expect(screen.getByTestId("main-page")).toBeInTheDocument();
  });
});
