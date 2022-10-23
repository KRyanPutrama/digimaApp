import { AxiosPromise } from 'axios';

export type ApiRequest<Res> = {
  label: string;
  action: (accessToken: string) => AxiosPromise;
  fulfilled: (res: ApiResponse<Res>) => Res | null | {} | [];
  rejected: (err: ApiResponseError) => ApiResponseError;
};

export type ApiResponse<T = any> = {
  data: T | null | Record<string, any>; // | any[]
  success: boolean;
  error: Record<string, any> | null;
  msg: string;
};

export type ApiResponseError = {
  data?: null | Record<string, any>; // | any[]
  success?: boolean;
  error?: Record<string, any> | null;
  msg?: string;
  status?: number;
  status_text?: string;
};

export type CallbackResult<T = any> =
  | ApiResponse<T>
  | ApiResponseError
  | undefined
  | null;
