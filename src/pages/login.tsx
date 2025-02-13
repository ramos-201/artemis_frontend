import { JSX } from "react";

function LoginPage(): JSX.Element {
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
          />
        </div>
        <div>
          <label htmlFor="password-form">Password</label>
          <input
            id="password-form"
            type="password"
            required
          />
        </div>
        <button type="submit">Iniciar Sesión</button>
      </form>
    </>
  )
}

export default LoginPage;
