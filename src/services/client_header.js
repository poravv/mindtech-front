import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL+'/client_header';

export const getClientHeader = async () => {
    const { data } = await axios.get(`${baseURL}/get`)
    return data;
};

export const getAllClientHeader = async () => {
    const { data } = await axios.get(`${baseURL}/getall`)
    return data;
};

export const getClientHeaderOne = async () => {
    const { data } = await axios.get(`${baseURL}/getone`)
    return data;
};


export const deleteClientHeader  = async ({token,param}) => {
    //CONFIGURACION DE TOKEN
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`,
        }
    };
    const { data } = await axios.delete(`${baseURL}/del/${param}`, config)
    return data;
};

export const updateClientHeader  = async ({token,param,json}) => {
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`,
        }
    };
    const { data } = await axios.put(baseURL + "/put/" + param, json, config)
    return data;
};

export const createClientHeader  = async ({token,json}) => {
    //console.log(json)
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`,
        }
    };

    await axios.post(baseURL + "/post/", json, config)
    return true;
};