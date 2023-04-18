// We should create a function which returns a promise 
import axios from "axios";
import { rootApi } from "../../api";



// Get all posts 
const getPosts = () => {
    return axios.get(rootApi + "/posts");
};

// Get only one post 
const getPost = (id) => {
    return axios.get(`${rootApi}/posts/${id}`);
}

export default {
    get: getPosts,
    getPost: getPost
}
