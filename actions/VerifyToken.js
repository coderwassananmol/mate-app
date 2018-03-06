import { FETCHING, FETCHING_SUCCESS, FETCHING_FAILURE } from '../utils/ActionTypes'

export function VerifyToken(token) {
	return dispatch => {
		dispatch({type: FETCHING});
		fetch('http://139.59.87.248:8000/api/company/verify/', {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body : JSON.stringify({
			"email_token" : token
		})
		})
		.then(resp => resp.json())
		.then((resp) => {
			if(!resp.status) {
				dispatch({type: FETCHING_FAILURE, payload: resp.error.message});
			}
			else {
				dispatch({type: FETCHING_SUCCESS, payload: JSON.stringify(resp.data)});
			}
		})
		.catch(err => {
			dispatch({type: FETCHING_FAILURE, payload: err});
		});
	}
}
