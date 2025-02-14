import { ChangeEvent, JSX } from "react";
import { TextField } from "@mui/material";

interface InputFieldProps {
  id: string;
  name: string;
  label: string;
  type: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function InputFieldComponent({
    id,
    name,
    label,
    type,
    value,
    onChange
}: InputFieldProps):  JSX.Element {
  return (
    <TextField
      id={id}
      name={name}
      label={label}
      type={type}
      variant="outlined"
      fullWidth
      required
      value={value}
      onChange={onChange}
    />
  )
}

export default InputFieldComponent;
