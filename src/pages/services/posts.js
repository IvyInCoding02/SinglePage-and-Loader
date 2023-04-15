// We should create a function which returns a promise 
import axios from "axios";

const URL = "https://gentle-ridge-36337.herokuapp.com/api/posts";

// Get all posts 
const getPosts = () => {
    return axios.get(URL);
};

// Get only one post 
const getPost = (id) => {
    return axios.get(`${URL}/${id}`);
}

export default {
    get: getPosts,
    getPost: getPost
}
