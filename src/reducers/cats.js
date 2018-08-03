import { cats } from '../actions';

const initialState = {
  data: null,
  error: null,
  loading: false
};

export default function cat(state = initialState, action) {
  switch (action.type) {
    case cats.FETCH_CAT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.cat
      }
    default: return state;
  }
}