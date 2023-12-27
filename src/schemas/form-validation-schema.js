import * as Yup from "yup";
const messageError = "Campo obrigatório"
const validationSchema = Yup.object({
  username: Yup.string().matches(/^[^\d]+$/, "Não é permitido inserir números").required(messageError), 
  cpf: Yup.string().matches(/^[^_]*$/, messageError).required(messageError), 
  rg: Yup.string().matches(/^[^_]*$/, messageError).required(messageError),
  cep: Yup.string().matches(/^[^_]*$/, messageError).required(messageError),
  city: Yup.string().required(messageError),
  state: Yup.string().min(4, "Insira o nome completo do estado").matches(/^[^\d]+$/, "Não é permitido inserir números").required(messageError),
  neighborhood: Yup.string().required(messageError),
  issuingState: Yup.string().matches(/^[^\d]+$/, "Não é permitido inserir números").required(messageError),
  phone: Yup.string().required(messageError),
  street: Yup.string().required(messageError),
  classPerson: Yup.string().required(messageError),
  birthDate: Yup.string().required(messageError),
});

export default validationSchema
