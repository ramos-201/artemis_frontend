import { render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import Login from "../../src/pages/login";

describe("Login Page", () => {
  test("It should correctly display the form elements", () => {
    render(<Login />);
    const form = screen.getByTestId("login-form");
    expect(within(form).getByRole("heading", { level: 2 })).toHaveTextContent(/^Iniciar Sesión$/);
    expect(within(form).getByLabelText("Email")).toBeInTheDocument();
    expect(within(form).getByLabelText("Password")).toBeInTheDocument();
    expect(within(form).getByLabelText("Password")).toBeInTheDocument();
    expect(within(form).getByRole("button", { name: /Iniciar Sesión/i })).toBeInTheDocument();
  })
})
