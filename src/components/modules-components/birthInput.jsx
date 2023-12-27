import InputMask from "react-input-mask";
import { TextField } from "@mui/material";

export default function BirthInput(props) {
  return (
    <>
      <InputMask mask="99/99/99" {...props}>
        {(inputProps) => <TextField {...inputProps} />}
      </InputMask>
    </>
  );
}
