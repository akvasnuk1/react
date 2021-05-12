import axios from "axios";
const instantAxios=axios.create({
 baseURL: 'https://api.sampleapis.com/futurama',
 });
const getharacters=()=>instantAxios.get('/cast');
const getinventory=()=>instantAxios.get('/inventory');
export {getharacters,getinventory}
