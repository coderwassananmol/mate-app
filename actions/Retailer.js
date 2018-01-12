import client from '../client';
import { getRetailer } from './graphql/queries';
import { FETCHING_RETAILER, FETCHING_RETAILER_SUCCESS, FETCHING_RETAILER_FAILURE } from '../utils/ActionTypes'

export function fetchRetailer() {
	return dispatch => {
		dispatch({type: FETCHING_RETAILER})
		client.query({
			query: getRetailer,
			variables : {
				licensenumber: "abcde123"
			}
		})
		.then((resp) => {
			if(resp.data) {
				dispatch({type: FETCHING_RETAILER_SUCCESS, payload: resp.data.Retailer});
			}
		})
		.catch(err => {
			console.log(err);
			dispatch({type: FETCHING_RETAILER_FAILURE, payload: null});
		});
	}
}
