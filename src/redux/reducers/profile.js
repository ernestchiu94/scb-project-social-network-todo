import {
  LOAD_REQUEST, LOAD_SUCCESS, LOAD_FAIL,
  CLEAR_STATE_REQUEST, CLEAR_STATE_SUCCESS, CLEAR_STATE_FAIL
} from '../constants/profile';

const initialState = {
  profile: undefined,
  loading: false
};

export default function profileReducer(state = initialState, { type, payload }) {
  console.log(payload);
  switch (type) {
    case LOAD_REQUEST:
      return {
        ...state,
        loading: true
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        profile: payload
      };
    case LOAD_FAIL:
      return {
        ...state,
        loading: false
      };
    case CLEAR_STATE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case CLEAR_STATE_SUCCESS:
      return initialState;
    case CLEAR_STATE_FAIL: {
      return {
        ...state,
        loading: false
      }
    }
    default:
      return state;
  }
}
