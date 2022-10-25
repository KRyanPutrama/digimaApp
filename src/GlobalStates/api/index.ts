import { AxiosResponse, AxiosError } from 'axios';
import { ActionReducer } from '../_prototype';
import { ApiRequest, ApiResponse, ApiResponseError } from './_prototype';
import { Dispatch } from 'react';

import { ReducerState as AuthReducerState } from '../auth/';
import { AnyAction } from 'redux';

export const fetchApi =
  <Res>({ label, action, fulfilled, rejected }: ApiRequest<Res>) =>
  async (
    dispatch: Dispatch<ActionReducer<Res>> | Dispatch<AnyAction>,
    getState: () => any,
  ) => {
    dispatch({ type: `${label}_LOADING` });

    const { token }: AuthReducerState = await getState().auth;

    return {
      type: label,
      payload: action(token || '')
        .then((response: AxiosResponse<ApiResponse<Res>>) => {
          // console.log('success', JSON.stringify(response,));
          const { data } = response || {};
          const { status } = data || null;
          if (status === 200) {
            dispatch({
              type: `${label}_SUCCESS`,
              payload: fulfilled(data, dispatch),
            });
          } else {
            dispatch({
              type: `${label}_FAILED`,
              payload: rejected(data as ApiResponseError),
            });
          }
        })
        .catch((responseError: AxiosError<ApiResponseError>) => {
          const errorData = responseError.response?.data;
          dispatch({
            type: `${label}_FAILED`,
            payload: rejected(errorData as ApiResponseError),
          });
        }),
    };
  };
