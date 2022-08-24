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
  const userInputEl = screen.getByPlaceholderText(/username/i);
  const testValue = "test";

  fireEvent.change(userInputEl, { target: { value: testValue } });
  expect(userInputEl.value).toBe(testValue);
});

it("password input should change", () => {
  render(<Login />);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);
  const testValue = "test";

  fireEvent.change(passwordInputEl, { target: { value: testValue } });
  expect(passwordInputEl.value).toBe(testValue);
});

it("button should not be disabled when input exists", () => {
  render(<Login />);
  const buttonEl = screen.getByRole("button");
  const usernameInputEl = screen.getByPlaceholderText(/username/i);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);

  const testValue = "test";

  fireEvent.change(usernameInputEl, { target: { value: testValue } });
  fireEvent.change(passwordInputEl, { target: { value: testValue } });

  expect(buttonEl).not.toBeDisabled();
});

it("loading should ot be rendered", () => {
  render(<Login />);
  const buttonEl = screen.getByRole("button");
  expect(buttonEl).not.toHaveTextContent(/please wait/i);
});

it("loading should be rendered when clicked", () => {
  render(<Login />);
  const buttonEl = screen.getByRole("button");
  const usernameInputEl = screen.getByPlaceholderText(/username/i);
  const passwordInputEl = screen.getByPlaceholderText(/password/i);

  const testValue = "test";

  fireEvent.change(usernameInputEl, { target: { value: testValue } });
  fireEvent.change(passwordInputEl, { target: { value: testValue } });
  fireEvent.click(buttonEl);
  expect(buttonEl).toHaveTextContent(/please wait/i);
});
