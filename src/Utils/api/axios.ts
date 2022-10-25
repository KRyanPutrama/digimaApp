import axios, { AxiosPromise, AxiosRequestConfig } from 'axios';

export default function customAxios<TResponse = any>(
  config: AxiosRequestConfig,
): AxiosPromise<TResponse> {
  // init axios instance with init config
  const instance = axios.create({
    baseURL: 'https://app-demo.digimasia.com/api/public/index.php',
    headers: {
      ...config.headers,
      // 'Content-Type': 'application/x-www-form-urlencoded',
      Accept: '*/*',
      // Object: config.url,
      // User: stateData.user,
      // Verb: 'read',
    },
  });

  // interceptor REQUEST
  instance.interceptors.request.use(reqConfig => {
    // console.log('==Axios REQUEST==', reqConfig)
    return reqConfig;
  });

  // interceptor RESPONSE
  instance.interceptors.response.use(
    resp => {
      // console.log('==Axios SUCCESS RESPONSE==', resp)
      return Promise.resolve(resp);
    },
    err => {
      // console.log('==Axios ERROR RESPONSE==', err, err.response)
      return Promise.reject(err);
    },
  );

  // return The Axios Promise
  return instance(config);
}
