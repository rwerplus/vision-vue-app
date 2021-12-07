import { _axios } from './index';
const expireV2EX = {
  Authorization: 'c82bf83b-60b1-4491-b710-27efa6789528'
}
export const getNotificationV2EX = () => {
  return _axios({
    url: 'notifications',
    method: 'GET',
    headers: expireV2EX
  })
}
