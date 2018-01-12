import { FETCHING_RETAILER, FETCHING_RETAILER_SUCCESS, FETCHING_RETAILER_FAILURE } from '../utils/ActionTypes';

const initialState = {
  isFetching : null,
  data : [],
  hasError : false,
  errorMessage : null
}

export default function(state=initialState,action) {
  switch(action.type) {
    case FETCHING_RETAILER:
      return Object.assign({},state, {
        isFetching : true,
        data : null,
        hasError : false,
        errorMessage : null
      });
      break;

      case FETCHING_RETAILER_SUCCESS:
        return Object.assign({},state, {
          isFetching : false,
          data : action.payload,
          hasError : false,
          errorMessage : null
        });
        break;

        case FETCHING_RETAILER_FAILURE:
          return Object.assign({},state, {
            isFetching : false,
            data : action.payload,
            hasError : false,
            errorMessage : null
          });
          break;

        default:
          return state;
  }
}
