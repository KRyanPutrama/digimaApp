import { ApiResponseError } from '../api/_prototype';

export interface ReducerState {
  journeyData: GetJourneyRes | null;
  journeyState: '' | 'loading' | 'error' | 'success';
  journeyError: ApiResponseError | null;
}

export type GetJourneyRes = {
  journeys: GetJourneyRes_Journey[];
  total: number;
};

export type GetJourneyRes_Journey = {
  id: number;
  name: string;
  description: string;
  thumbnail: string;
  is_leaderboard: number;
  is_reward: number;
  end_date: string;
  isOpen: number;
  is_completed: number;
  point: number;
  is_available: number;
};
