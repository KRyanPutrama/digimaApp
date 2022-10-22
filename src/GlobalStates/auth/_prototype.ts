export interface ReducerState {
  token: string | null;
  authState: '' | 'loading' | 'success' | 'error';
}
