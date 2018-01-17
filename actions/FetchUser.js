import client from '../client';
import { getRetailer } from './graphql/queries';
import { FETCHING_USER, FETCHING_USER_SUCCESS, FETCHING_USER_FAILURE, FETCHING_EMAIL } from '../utils/ActionTypes'

export function FetchUser(licensenumber) {
	return dispatch => {
		dispatch({type: FETCHING_USER})
		dispatch({type: FETCHING_EMAIL})
		client.query({
			query: getRetailer,
			variables : {
				licensenumber: licensenumber
			}
		})
		.then((resp) => {
			if(resp.data) {
				dispatch({type: FETCHING_USER_SUCCESS, payload: resp.data.Retailer});
			}
		})
		.catch(err => {
			console.log(err);
			dispatch({type: FETCHING_USER_FAILURE, payload: null});
		});
	}
}
