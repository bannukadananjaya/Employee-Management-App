import api from "./api";

export const login = async (email,password) => {
    try{
        const response = await api.post('user/login',{email,password});
        if(response){
            localStorage.setItem('name',JSON.stringify(response.data.email))
        }
        response.data();
    }catch(err){
        console.log(err)
    }
}