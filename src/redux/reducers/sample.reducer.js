import types from '../action_types';
import { fetchDefaultState } from './defaultStates';

const { start, success, failed } = types.sample

export default (state = { ...fetchDefaultState }, action) => {
  switch (action.type) {
    case start:
      return Object.assign({}, { fetching: true });

    case success:
      return Object.assign({}, { fetching: false, error: null, data: action.data });

    case failed:
      return Object.assign({}, { fetching: false, error: action.error, data: [] });

    default:
      return state;
  }
}