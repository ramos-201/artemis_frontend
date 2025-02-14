import { render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import LoginPage from "../../src/pages/loginPage";
import userEvent from "@testing-library/user-event";

describe("Login Page", () => {
  beforeEach((): void => {
    render(<LoginPage />);
  });

  test("It should correctly display the form elements", () => {
    const form: HTMLElement = screen.getByTestId("login-form");
    expect(within(form).getByRole("heading", { level: 2 })).toHaveTextContent(/^Iniciar Sesión$/);
    expect(within(form).getByRole("textbox", { name: /Nombre de usuario/i })).toBeInTheDocument();
    expect(within(form).getByLabelText(/Contraseña/i)).toBeInTheDocument();
    expect(within(form).getByRole("button", { name: /Iniciar Sesión/i })).toBeInTheDocument();
  });

  test("Must allow data entry into the form", async () => {
    const usernameInput: HTMLElement = screen.getByLabelText(/Nombre de usuario/i);
    const passwordInput: HTMLElement = screen.getByLabelText(/Contraseña/i);

    await userEvent.type(usernameInput, "jhon.smith@example.com");
    await userEvent.type(passwordInput, "password_example");

    expect(usernameInput).toHaveValue("jhon.smith@example.com");
    expect(passwordInput).toHaveValue("password_example");
  });
})
