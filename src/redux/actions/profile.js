import { LOAD_REQUEST, CLEAR_STATE_REQUEST } from '../constants/profile';

export function loadProfile(payload) {
  return {
    type: LOAD_REQUEST,
    payload
  }
}

export function clearProfile() {
  return {
    type: CLEAR_STATE_REQUEST
  }
}
