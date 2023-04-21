// Create a function with a request for registration 
import axios from "axios";
import { rootApi } from "../../api";

export const authService = () => {
    const registration = (userData) => {
        return axios.post(
            `${rootApi}/auth/register`, userData)
    }

    const login = (loginData)  => {
        return axios.post
        (`${rootApi}/auth/login`, loginData);
    }
    return {
        registration,
        login
    }
    }


