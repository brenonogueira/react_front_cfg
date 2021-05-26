import axios from 'axios';

const login = values => { return { type: 'LOGIN', values }; }; 
const logout = values => { return { type: 'LOGOUT' }; }; 

export default { login, logout };