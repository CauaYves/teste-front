import api from "./api"

export async function login(loginCredentials) {
    const body = loginCredentials
    try{
        const response = await api.post("/access", body)
    
        return {
            status: response.status,
            response
        }
    }catch(error){
        return {
            status: error.response.status,
            error
        }
        
    }
}