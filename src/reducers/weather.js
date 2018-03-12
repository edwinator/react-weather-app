import {FETCH_WEATHER} from '../actions/index';

export default function (state = [], action) {
  if (action.error) {
    return state;
  }
  // console.log('action.payload', `${action.payload}-----`);
  switch (action.type) {
    case FETCH_WEATHER:
      return [action.payload.data, ...state];
    default:
      return state;
  }
}
