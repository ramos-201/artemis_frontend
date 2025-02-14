import { ChangeEvent, JSX, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import InputFieldComponent from "../components/InputFieldComponent";

interface FormData {
  username: string;
  password: string;
}

function LoginPage(): JSX.Element {
  const [formData, setFormData] = useState<FormData>({ username: "", password: "" })

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
     setFormData((prev) => ({
       ...prev,
       [e.target.name]: e.target.value }
     ));
  };

  return (
    <>
      <form data-testid="login-form">
        <Typography component="h2">Iniciar Sesión</Typography>
        <Box>
          <InputFieldComponent
            id="username-form"
            name="username"
            label="Nombre de usuario"
            type="text"
            value={formData.username}
            onChange={handleChange}
          />
        </Box>
        <Box>
          <InputFieldComponent
            id="password-form"
            name="password"
            label="Contraseña"
            type="password"
            value={formData.password}
            onChange={handleChange}
          />
        </Box>
        <Button type="submit" variant="contained">Iniciar Sesión</Button>
      </form>
    </>
  )
}

export default LoginPage;
