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
  user: {
    user_id: number;
    token: string;
    brand: string;
    model: string;
    serial_number: string;
    platform: string;
    version: string;
  };
};
