import {
  LOAD_SUCCESS,
  CLEAR_STATE_SUCCESS
} from '../constants/profile';

const initialState = {
  profile: undefined
};

export default function profileReducer(state = initialState, { type, payload }) {
  switch (type) {
    case LOAD_SUCCESS:
      return {
        ...state,
        profile: payload
      };
    case CLEAR_STATE_SUCCESS:
      return initialState;
    default:
      return state;
  }
}
