import { Action } from '@ngrx/store';

export const INCREASE_COUNT = 'count/increase';
export const DECREASE_COUNT = 'count/decrease';

export class IncreaseCountAction implements Action {
  readonly type = INCREASE_COUNT;
}

export class DecreaseCountAction implements Action {
  readonly type = DECREASE_COUNT;
}

export type CountActions = IncreaseCountAction | DecreaseCountAction;
