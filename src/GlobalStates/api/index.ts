import { AxiosResponse, AxiosError } from 'axios';
import { ActionReducer } from '../_prototype';
import { ApiRequest, ApiResponse, ApiResponseError } from './_prototype';
import { Dispatch } from 'react';

import { ReducerState as AuthReducerState } from '../auth/';

export const fetchApi =
  <Res>({ label, action, fulfilled, rejected }: ApiRequest<Res>) =>
  async (dispatch: Dispatch<ActionReducer<Res>>, getState: () => any) => {
    dispatch({ type: `${label}_LOADING` });

    const { token }: AuthReducerState = (await getState().auth) || {};

    return {
      type: label,
      payload: action(token || '')
        .then((response: AxiosResponse<ApiResponse<Res>>) => {
          console.log(response);
          const { data } = response || {};
          const { success } = data || null;
          if (success) {
            dispatch({
              type: `${label}_SUCCESS`,
              payload: fulfilled(data),
            });
          } else {
            dispatch({
              type: `${label}_FAILED`,
              payload: rejected(data as ApiResponseError),
            });
          }
        })
        .catch((responseError: AxiosError<ApiResponseError>) => {
          console.log(responseError);
          // const errorData = responseError.response?.data;
          // dispatch({
          //   type: `${label}_FAILED`,
          //   payload: rejected(errorData as ApiResponseError),
          // });
        }),
    };
  };
