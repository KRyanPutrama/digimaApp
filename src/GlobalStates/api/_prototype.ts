import { AxiosPromise } from 'axios';
import { Dispatch } from 'react';

export type ApiRequest<Res> = {
  label: string;
  action: (accessToken: string) => AxiosPromise;
  fulfilled: (
    res: ApiResponse<Res>,
    dispatch: Dispatch<any>,
  ) => Res | null | {} | [];
  rejected: (err: ApiResponseError) => ApiResponseError;
};

export type ApiResponse<T = any> = {
  data: T | null | Record<string, any>; // | any[]
  message?: string;
  status?: number;
};

export type ApiResponseError = {
  data?: null | Record<string, any>; // | any[]
  messasge?: string;
  status?: number;
};

export type CallbackResult<T = any> =
  | ApiResponse<T>
  | ApiResponseError
  | undefined
  | null;
