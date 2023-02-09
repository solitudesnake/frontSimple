import axios from 'axios';

export default axios.create({
//     baseURL: 'http://localhost:9090/soldiers'
    baseURL: 'https://mgsoldiergenserver.onrender.com/soldiers'
});
