// Create a function with a request for registration 
import axios from "axios";
import { rootApi } from "../../api";

export const authService = () => {
    const registration = (userData) => {
        return axios.post(
            `${rootApi}/auth/register`, userData)
    }

    return {
        registration,
    }
    }
