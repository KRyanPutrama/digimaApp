import { ApiResponseError } from '../api/_prototype';

export interface ReducerState {
  token: string | null;

  authData: PostAuthRes | null;
  authState: '' | 'loading' | 'success' | 'error';
  authError: ApiResponseError | null;
}

export type PostAuthReq = {
  username: string;
  password: string;
};

export type PostAuthRes = {
  email: 'yusuf@digimasia.com';
  firstname: 'Yusuf';
  is_recover_pass: 0;
  last_login: 1;
  lastname: 'Faisal Agus Saputro';
  user: {
    brand: 'Xiaomi';
    model: 'MiA1';
    platform: 'Android';
    serial_number: '786423749234';
    token: '$2y$10$plVdOFUnmuaMi3.vPsXiyeFfQpGmqp2CKZ.fdIzS2mgmoz6PLfnm.';
    user_id: 32019;
    version: '7.0';
  };
  username: 'yusuf@digimasia.com';
};
