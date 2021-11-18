import axios from 'axios';

export const login = (data: any) => axios.create({
  method: 'POST',
  data: data,
  url: '/api/login'
})
export const getUserinfo = (data: any) => axios.create({
  method: 'POST',
  data: data,
  url: '/api/userinfo'
})