import {FETCHING, FETCHING_SUCCESS, FETCHING_FAILURE} from '../utils/ActionTypes'
const initialState = {
  isFetching : null,
  data : null,
  hasError : false,
  errorMessage : null
}

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCHING:
      return Object.assign({},state, {
        isFetching : true,
        data : null,
        hasError : false,
        errorMessage : null
      });
      break;

    case FETCHING_SUCCESS:
      return Object.assign({},state, {
        isFetching : false,
        data : action.payload,
        hasError : false,
        errorMessage : null
      });
      break;

    case FETCHING_FAILURE:
      return Object.assign({},state, {
        isFetching : false,
        data : [],
        hasError : true,
        errorMessage : action.payload
      });
      break;

    default:
      return state;
  }
}
