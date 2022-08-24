import { fireEvent, render, screen } from "@testing-library/react";
import Login from "./Login";

it("username input should be rendered", () => {
  render(<Login />);
  const userInputEl = screen.getByPlaceholderText(/username/i);
  expect(userInputEl).toBeInTheDocument();
});

it("password input should be rendered", () => {
  render(<Login />);
  const userInputEl = screen.getByPlaceholderText(/password/i);
  expect(userInputEl).toBeInTheDocument();
});

it("button input should be rendered", () => {
  render(<Login />);
  const userButtonEl = screen.getByRole("button");
  expect(userButtonEl).toBeInTheDocument();
});

// username input is empty

it("username input should be empty", () => {
  render(<Login />);
  const userInputEl = screen.getByPlaceholderText(/username/i);
  expect(userInputEl.value).toBe("");
});

it("password input should be empty", () => {
  render(<Login />);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);
  expect(passwordInputEl.value).toBe("");
});

it("button to be disabled", () => {
  render(<Login />);
  const buttonEl = screen.getByRole("button");
  expect(buttonEl).toBeDisabled();
});

it("error should not be visible", () => {
  render(<Login />);
  const errorEl = screen.getByTestId("error");
  expect(errorEl).not.toBeVisible();
});

it("username input should change", () => {
  render(<Login />);
  const inputEl = screen.getByPlaceholderText(/username/i);
  const testValue = "test";
  fireEvent;
  expect(inputEl).not.toBeVisible();
});

it("password input should change", () => {
  render(<Login />);
  const inputEl = screengetByPlaceholderText(/password/i);
  expect(inputEl).not.toBeVisible();
});
