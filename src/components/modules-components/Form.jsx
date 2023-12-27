import React, { useEffect } from "react";
import styled from "styled-components";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormControl, TextField, Button, FormLabel } from "@mui/material";
import formValidationSchema from "@/schemas/form-validation-schema";
import CpfInput from "./CpfInput";
import RgRneInput from "./RgRneInput";
import CepInput from "./CepInput";
import { handleInputChange } from "./utils";
import PhoneInput from "./PhoneInput";
import SelectInput from "./SelectInput";
import BirthInput from "./birthInput";
import breakpoint from "@/styles/breakpoint";
import FileInputComponent from "./FileInput";
import { useFileContext } from "../../contexts/FileContext";
import FileRow from "./fileRow.jsx";
import colors from "@/constants/colors";

export default function MyForm({ allowFiles }) {
  const { files } = useFileContext();

  const handleSubmit = (values, { setSubmitting }) => {
    console.log("Formulário enviado:", { values, files });
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{
        username: "",
        cpf: "",
        rg: "",
        cep: "",
        city: "",
        state: "",
        neighborhood: "",
        issuingState: "",
        phone: "",
        street: "",
        birthDate: "",
        classPerson: "",
      }}
      validationSchema={formValidationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, handleChange, setValues, values }) => (
        <Main>
          <FormWrapper autoComplete="off">
            <FormContainer>
              <FormControlStyled>
                <FormLabel>Nome completo</FormLabel>
                <Field name="username" as={TextField} variant="outlined" />
                <Warn name="username" component="p" />
              </FormControlStyled>
              <FormControlStyled>
                <FormLabel>CPF</FormLabel>
                <Field name="cpf" as={CpfInput} type="cpf" />
                <Warn name="cpf" component="p" />
              </FormControlStyled>
              <FormControlStyled>
                <FormLabel>RG/RNE</FormLabel>
                <Field name="rg" as={RgRneInput} variant="outlined" />
                <Warn name="rg" component="p" />
              </FormControlStyled>
              <FormControlStyled>
                <FormLabel>CEP</FormLabel>
                <Field
                  name="cep"
                  as={CepInput}
                  variant="outlined"
                  onChange={(e) =>
                    handleInputChange(e, handleChange, setValues, values)
                  }
                />
                <Warn name="cep" component="p" />
              </FormControlStyled>
              <FormControlStyled>
                <FormLabel>Cidade</FormLabel>
                <Field name="city" as={TextField} variant="outlined" />
                <Warn name="city" component="p" />
              </FormControlStyled>
              <FormControlStyled>
                <FormLabel>Bairro</FormLabel>
                <Field name="neighborhood" as={TextField} variant="outlined" />
                <Warn name="neighborhood" component="p" />
              </FormControlStyled>
              <FormControlStyled>
                <FormLabel>Estado</FormLabel>
                <Field name="state" as={TextField} variant="outlined" />
                <Warn name="state" component="p" />
              </FormControlStyled>
              <FormControlStyled>
                <FormLabel>Estado emissor</FormLabel>
                <Field name="issuingState" as={TextField} variant="outlined" />
                <Warn name="issuingState" component="p" />
              </FormControlStyled>
              <FormControlStyled>
                <FormLabel>Telefone</FormLabel>
                <Field name="phone" as={PhoneInput} variant="outlined" />
                <Warn name="phone" component="p" />
              </FormControlStyled>
              <FormControlStyled>
                <FormLabel>Rua/N</FormLabel>
                <Field name="street" as={TextField} variant="outlined" />
                <Warn name="street" component="p" />
              </FormControlStyled>
              <FormControlStyled>
                <FormLabel>Data de nascimento</FormLabel>
                <Field name="birthDate" as={BirthInput} variant="outlined" />
                <Warn name="birthDate" component="p" />
              </FormControlStyled>
              <FormControlStyled>
                <FormLabel>Classificação do indivíduo</FormLabel>
                <Field name="classPerson" as={SelectInput} variant="outlined" />
                <Warn name="classPerson" component="p" />
              </FormControlStyled>
              {allowFiles ? (
                <FileContainer>
                  <FileInputComponent />
                  <Caption>
                    <div>Nome</div>
                    <InfosCaption>
                      <div>Tipo</div>
                      <div>Formato</div>
                    </InfosCaption>
                  </Caption>
                  <InfoFiles>
                    {files.map((file, index) => {
                      return (
                        <FileRow
                          key={index}
                          name={file.name}
                          type={"type"}
                          extension={file.type}
                        />
                      );
                    })}
                  </InfoFiles>
                </FileContainer>
              ) : null}
            </FormContainer>
            <Button variant="contained" type="submit" disabled={isSubmitting}>
              Salvar
            </Button>
          </FormWrapper>
        </Main>
      )}
    </Formik>
  );
}
const Main = styled.div`
  width: 100dvw;
  padding: 10px;
`;
const Warn = styled(ErrorMessage)`
  font-size: 10px;
  color: #f80000;
  position: absolute;
  right: 30px;
  bottom: 10px;
`;

const FormWrapper = styled(Form)`
  max-width: 1200px;
  width: 90vw;
  padding: 20px;
  border-radius: 5px;

  width: fit-content;
  margin: auto;
  display: flex;
  flex-direction: column;

  background-color: #ffff;
  box-shadow: 3px 3px 9px #0000002f;
`;

const FormControlStyled = styled(FormControl)`
  margin: 30px 0px;
  padding: 0px 5px;
  width: 33%;
  div {
    width: calc(100% - 10px);
  }
  @media (max-width: ${breakpoint}) {
    width: 100%;
  }
`;

const FormContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
`;

const FileContainer = styled.div`
  margin: 10px 0px 0px 0px;
  width: 100%;

  padding: 10px;
  margin: 10px 0px;
`;

const InfoFiles = styled.div`
  width: 100%;
`;

const Caption = styled.div`
  height: 30px;
  width: 100%;
  margin-top: 10px;
  border-radius: 5px 5px 0px 0px;
  padding: 0px 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${colors.fifty};
  div {
    color: white;
  }
`;

const InfosCaption = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 30%;
`;
