// import axios from '../api/axios';
import axiosPrivate from '../api/axios';
import axios from '../api/axios';
import useAuth from './useAuth';

const useRefreshToken = () => {
    const { setAuth } = useAuth();

    const refresh = async () => {
        //const response = await axios.get('/refresh', {
        const response = await axios.get(`http://localhost:8080/refresh`, {
            withCredentials: true
        });
        setAuth(prev => {
            console.log(JSON.stringify(prev));
            console.log("from useRefreshToken " + response.data.accessToken);
            return { ...prev, accessToken: response.data.accessToken }
        });
        console.log("useRT: " + response.data.accessToken)
        return response.data.accessToken;
    }
    return refresh;
};

export default useRefreshToken;