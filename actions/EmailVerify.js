import { FETCHING, FETCHING_SUCCESS, FETCHING_FAILURE } from '../utils/ActionTypes'

export function EmailVerify(email) {
	return dispatch => {
		dispatch({type: FETCHING});
		fetch('http://139.59.87.248:8000/api/email/register', {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			"email" : email
		})
		})
		.then(resp => resp.json())
		.then((resp) => {
			if(!resp.status) {
				dispatch({type: FETCHING_FAILURE, payload: resp.error});
			}
			else {
				dispatch({type: FETCHING_SUCCESS, payload: resp.data.message});
			}
		})
		.catch(err => {
			dispatch({type: FETCHING_FAILURE, payload: err});
		});
	}
}
