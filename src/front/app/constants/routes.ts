const API_URL = 'http://localhost:8080/api';

const ROUTES = {
    signup: `${API_URL}/users/register`,
    signin: `${API_URL}/users/login`,
    createBook: `${API_URL}/books/create`  
};

export default ROUTES;