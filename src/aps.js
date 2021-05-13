import axios from "axios";

const instantAxios = axios.create({
    baseURL: 'https://reqres.in',
});

export {instantAxios}
