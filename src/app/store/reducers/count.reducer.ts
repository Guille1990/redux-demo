import * as fromCountAction from '../actions';

export interface CountState {
  counter: number;
  loading: boolean;
  error: any;
}

const initialState: CountState = {
  counter: 0,
  loading: false,
  error: null
};

export function countReducer (state = initialState, action: fromCountAction.CountActions): CountState {
  switch (action.type) {
    case fromCountAction.INCREASE_COUNT:
      return {
        ...state,
        counter: state.counter + 1
      };
    case fromCountAction.DECREASE_COUNT:
      return {
        ...state,
        counter: state.counter - 1
      };
    case fromCountAction.LOAD_COUNT:
      return {
        ...state,
        loading: true,
        error: null
      };
    case fromCountAction.LOAD_COUNT_SUCCESS:
      return {
        counter: action.val,
        loading: false,
        error: null
      };
    case fromCountAction.LOAD_COUNT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
}
