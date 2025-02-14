import { ChangeEvent, JSX, useState } from "react";
import {Box, Button, TextField, Typography} from "@mui/material";

function LoginPage(): JSX.Element {
  const [usernameForm, setUsernameForm] = useState<string>("");
  const [passwordForm, setPasswordForm] = useState<string>("");

  return (
    <>
      <form data-testid="login-form">
        <Typography component="h2">Iniciar Sesión</Typography>
        <Box>
          <TextField
            id="username-form"
            label="Nombre de usuario"
            type="text"
            variant="outlined"
            fullWidth
            required
            value={usernameForm}
            onChange={ (e: ChangeEvent<HTMLInputElement>): void => setUsernameForm(e.target.value) }
          />
        </Box>
        <Box>
          <TextField
            id="password-form"
            label="Contraseña"
            type="password"
            variant="outlined"
            fullWidth
            required
            value={ passwordForm }
            onChange={ (e: ChangeEvent<HTMLInputElement>): void => setPasswordForm(e.target.value) }
          />
        </Box>
        <Button type="submit" variant="contained">Iniciar Sesión</Button>
      </form>
    </>
  )
}

export default LoginPage;
