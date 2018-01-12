import {FETCHING_USER, FETCHING_USER_SUCCESS, FETCHING_USER_FAILURE} from '../utils/ActionTypes';

const initialState = {
  isFetching : null,
  data : [],
  hasError : false,
  errorMessage : null
}

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCHING_USER:
      return Object.assign({},state, {
        isFetching: true,
        error: null,
        data: []
      });
      break;

    case FETCHING_USER_SUCCESS:
      return Object.assign({},state, {
        isFetching : false,
        error: null,
        data: action.payload
      });
      break;

    case FETCHING_USER_FAILURE:
      return Object.assign({},state, {
        isFetching : true,
        error: null,
        data: []
      });
      break;

    default:
      return state;
  }
}
