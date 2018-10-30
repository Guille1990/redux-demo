import * as fromCountAction from '../actions';

export interface CountState {
  counter: number;
}

const initialState: CountState = {
  counter: 0
};

export function countReducer (state = initialState, action: fromCountAction.CountActions): CountState {
  switch (action.type) {
    case fromCountAction.INCREASE_COUNT:
      return {
        counter: state.counter + 1
      };
    case fromCountAction.DECREASE_COUNT:
      return {
        counter: state.counter - 1
      };
    default:
      return state;
  }
}
