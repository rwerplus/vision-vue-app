import axios from 'axios';

export const login = (data: any) => axios.post('/api/login', data);

export const getUserinfo = (data: any) => axios.post('/api/userinfo', data);
