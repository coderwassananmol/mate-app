import client from '../client';
import { getRetailer } from './graphql/queries';
import { FETCHING_USER, FETCHING_USER_SUCCESS, FETCHING_USER_FAILURE } from '../utils/ActionTypes'

export function FetchUser(email,password) {
	return dispatch => {
		dispatch({type: FETCHING_USER});
		fetch('http://192.168.1.105:8000/api/login', {
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
				dispatch({type: FETCHING_USER_FAILURE, payload: resp.error});
			}
			else {
				dispatch({type: FETCHING_USER_SUCCESS, payload: resp.data});
			}
		})
		.catch(err => {
			dispatch({type: FETCHING_USER_FAILURE, payload: err.error.message});
		});
	}
}
