import { createReducer, on } from '@ngrx/store';
import { decreement, increement, reset } from './counter.action';
import { intialState } from './couter.state';
const _couterReducer = createReducer(
  intialState,
  on(increement, (state) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),
  on(decreement, (state) => {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }),
  on(reset, (state) => {
    return {
      ...state,
      counter: state.counter,
    };
  })
);
export function counterReducer(state: any, action: any) {
  return _couterReducer(state, action);
}
