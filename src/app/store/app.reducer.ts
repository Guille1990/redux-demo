import * as reducers from './reducers';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
  count: reducers.CountState;
}

export const appReducer: ActionReducerMap<AppState> = {
  count: reducers.countReducer
};
