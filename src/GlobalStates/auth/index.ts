import { fetchApi } from '../api';
import customAxios from '@/Utils/api/axios';

import * as proto from './_prototype';
import * as reducerLabel from './reducer';

export * from './_prototype';
export * from './reducer';

export const postLogin = (_data: proto.PostAuthReq) =>
  fetchApi<proto.PostAuthRes>({
    label: reducerLabel.POST_LOGIN,
    action: () =>
      customAxios({
        url: '/login',
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: {
          ..._data,
          firebase_token: '78342rhksfjdfsdfsdfds',
          brand: 'Xiaomi',
          model: 'MiA1',
          serial_number: '786423749234',
          platform: 'Android',
          version: '7.0',
        },
      }),
    fulfilled(response) {
      console.log(response);
      return response;
    },
    rejected(error) {
      console.log(error);
      return error;
    },
  });
