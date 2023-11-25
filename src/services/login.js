
import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL+'/usuario/login';

export const Login = async (credentials) => {
    const { data } = await axios.post(baseURL, credentials);
    window.localStorage.setItem('loginAppMindTech', JSON.stringify(data));
    window.location.href = '/';
    return data;
}

export const Logout = () => {
    window.localStorage.removeItem('loginAppMindTech');
    // eslint-disable-next-line
    //window.location.href = '/';
    window.location.href = '/';
}
 