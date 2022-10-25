import * as proto from './_prototype';
import * as reducerLabel from './reducer';
import { fetchApi } from '../api';
import customAxios from '@/Utils/api/axios';

export * from './_prototype';
export * from './reducer';

export const getJourney = () =>
  fetchApi<proto.GetJourneyRes>({
    label: reducerLabel.GET_JOURNEY,
    action: auth => {
      return customAxios({
        url: '/journey',
        method: 'GET',
        headers: {
          TOKEN: `${auth}`,
          'Content-Type': 'application/x-www-form-urlencoded',
          Accept: 'application/json',
        },
      });
    },
    fulfilled(response) {
      return response.data;
    },
    rejected(error) {
      return error;
    },
  });
