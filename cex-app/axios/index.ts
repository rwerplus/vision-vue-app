import axios from 'axios';
import { uuid } from 'vue-uuid';

let BASE_URL = '';
let HOST = process.env.NODE_ENV;

switch (HOST) {
  case 'development':
    // BASE_URL = 'http://localhost:3000';
    BASE_URL = 'https://www.v2ex.com/api/v2/';
    break;
  case 'production':
    BASE_URL = 'https://xxx.com';
    break;
  default:
    BASE_URL = 'ftp://';
}
const getAuthorize = () => {
  if (typeof window !== 'undefined') {
    return sessionStorage.getItem('x-csrf-token') || '';
  } else {
    return '';
  }
};
const instance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    'psd-usr-csrf-token': getAuthorize(),
  },
  timeout: 60000,
});

//  request请求拦截器
instance.interceptors.request.use(
  (config) => {
    if (config.data instanceof FormData) {
      //TODO FormData类型增加特别处理
      // Object.assign(config.headers, config.data.getheaders());
    }
    if (config.method === 'GET') {
      config.params = {
        __timezone__: uuid.v1(),
        ...config.params,
      };
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// response响应拦截器
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    let { response } = error;
    if (response) {
      let errormsg = '';
      switch (response.status) {
        case 400:
          errormsg = '错误请求';
          break;
        case 401:
          errormsg = '未登录,请重新登录';
          break;
        case 403:
          errormsg = '拒绝访问';
          break;
        case 404:
          errormsg = '请求错误，未找到该资源';
          break;
        case 405:
          errormsg = '请求方法未允许';
          break;
        case 408:
          errormsg = '请求超时';
          break;
        case 500:
          errormsg = '服务器出错';
          break;
        case 501:
          errormsg = '网络未实现';
          break;
        case 502:
          errormsg = '网络错误';
          break;
        case 503:
          errormsg = '服务不可用';
          break;
        case 504:
          errormsg = '网络超时';
          break;
        case 505:
          errormsg = 'http版本不支持该请求';
          break;
        default:
          errormsg = '连接错误';
      }
      return Promise.reject(errormsg);
    } else {
      //服务器连结果都没有返回  有可能是断网或者服务器奔溃
      if (typeof window !== 'undefined') {
        if (window.navigator.onLine) {
          //断网处理
          return Promise.reject(error);
        } else {
          return Promise.reject(error);
        }
      }
    }
  }
);
export const CancelToken = axios.CancelToken;
export const _axios = instance;
