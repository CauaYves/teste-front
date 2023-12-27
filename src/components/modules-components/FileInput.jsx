import React, { useContext } from "react";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import { useFileContext } from "@/contexts/fileContext";

export default function FileInputComponent() {
  const { files, setFiles } = useFileContext();

  const handleFileChange = (event) => {
    const selectedFiles = event.target.files;
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
  };

  return (
    <div>
      <Input
        type="file"
        onChange={handleFileChange}
        style={{ display: "none" }}
        id="fileInput"
        multiple
      />
      <label htmlFor="fileInput">
        <Button variant="contained" component="span">
          Escolher arquivo
        </Button>
      </label>
    </div>
  );
}
