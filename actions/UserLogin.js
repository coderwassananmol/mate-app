import { getRetailer } from './graphql/queries';
import { FETCHING, FETCHING_SUCCESS, FETCHING_FAILURE } from '../utils/ActionTypes'

export function LoginUser(email,password) {
	return dispatch => {
		dispatch({type: FETCHING});
		fetch('http://139.59.87.248:8000/api/login', {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			"email" : email,
			"password" : password
		})
		})
		.then(resp => resp.json())
		.then((resp) => {
			if(!resp.status) {
				dispatch({type: FETCHING_FAILURE, payload: resp.error.message});
			}
			else {
				dispatch({type: FETCHING_SUCCESS, payload: resp.data});
			}
			console.log(resp);
		})
		.catch(err => {
			dispatch({type: FETCHING_FAILURE, payload: err.error.message});
		});
	}
}
