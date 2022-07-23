import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Users from "./Users";
import axios from "axios";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import AppRouter from "../../routes/AppRouter";

jest.mock("axios");

describe("get Users Method", () => {
  let response;
  beforeEach(() => {
    response = {
      data: [
        {
          id: 1,
          name: "Leanne Graham",
        },
        {
          id: 2,
          name: "Ervin Howell",
        },
      ],
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("axios get method", async () => {
    axios.get.mockReturnValue(response);
    render(
      <MemoryRouter>
        <Users />
      </MemoryRouter>
    );
    const users = await screen.findAllByTestId("user-item");
    expect(users.length).toBe(2);
    expect(axios.get).toBeCalledTimes(1);
    // screen.debug();
  });

  test("test redirect to details page", async () => {
    axios.get.mockReturnValue(response);
    render(
      <MemoryRouter>
        <AppRouter />
        <Users />
      </MemoryRouter>
    );
    const users = await screen.findAllByTestId("user-item");
    expect(users.length).toBe(2);
    userEvent.click(users[0]);
    expect(screen.getByTestId("user-page")).toBeInTheDocument();
  });
});
