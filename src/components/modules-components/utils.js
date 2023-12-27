import { getCep } from "@/pages/api/cep";


const handleInputChange = async (e, handleChange, setValues, values) => {
    const { value } = e.target;
    handleChange(e);
if (!value.includes("_")) {
    try {
        const cep = await getCep(value);
        const {issuingState, cpf, rg, username, phone, street, classPerson, birthDate} = values
        setValues({
            cep: value,
            city: cep.cidade,
            state: cep.uf,
            neighborhood: cep.bairro,
            issuingState,
            cpf,
            rg,
            username, 
            phone,
            street,
            classPerson,
            birthDate,
        });
    } catch (error) {
        console.error("Erro ao obter informações do CEP", error);
    }
}
};

  export {handleInputChange}

