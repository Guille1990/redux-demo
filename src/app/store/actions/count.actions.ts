import { Action } from '@ngrx/store';

export const INCREASE_COUNT = 'count/increase';
export const DECREASE_COUNT = 'count/decrease';
export const LOAD_COUNT = 'count/load';
export const LOAD_COUNT_SUCCESS = 'count/loadSuccess';
export const LOAD_COUNT_ERROR = 'count/loadError';

export class IncreaseCountAction implements Action {
  readonly type = INCREASE_COUNT;
}

export class DecreaseCountAction implements Action {
  readonly type = DECREASE_COUNT;
}

export class LoadCountAction implements Action {
  readonly type = LOAD_COUNT;

  constructor (public val: number) {}
}

export class LoadCountSuccessAction implements Action {
  readonly type = LOAD_COUNT_SUCCESS;

  constructor (public val: number) {}
}

export class LoadCountErrorAction implements Action {
  readonly type = LOAD_COUNT_ERROR;

  constructor (public error: any) {}
}

export type CountActions =
IncreaseCountAction |
DecreaseCountAction |
LoadCountAction |
LoadCountSuccessAction |
LoadCountErrorAction;
