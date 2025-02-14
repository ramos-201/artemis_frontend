import {ChangeEvent, JSX, useState} from "react";

function LoginPage(): JSX.Element {
  const [emailForm, setEmailForm] = useState<string>("");
  const [passwordForm, setPasswordForm] = useState<string>("");

  return (
    <>
      <form data-testid="login-form">
        <h2>Iniciar Sesión</h2>
        <div>
          <label htmlFor="username-form">Email</label>
          <input
            id="username-form"
            type="text"
            required
            value={emailForm}
            onChange={(e: ChangeEvent<HTMLInputElement>): void => setEmailForm(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password-form">Password</label>
          <input
            id="password-form"
            type="password"
            required
            value={passwordForm}
            onChange={(e: ChangeEvent<HTMLInputElement>): void => setPasswordForm(e.target.value)}
          />
        </div>
        <button type="submit">Iniciar Sesión</button>
      </form>
    </>
  )
}

export default LoginPage;
