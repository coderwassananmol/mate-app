import { FETCHING_EMAIL, FETCHING_EMAIL_SUCCESS, FETCHING_EMAIL_FAILURE } from '../utils/ActionTypes'

export function EmailVerify(email) {
	return dispatch => {
		dispatch({type: FETCHING_EMAIL});
		fetch('http://192.168.0.16:8000/api/emailRegister', {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			"email" : email
		})
		})
		.then(resp => resp.json())
		.then((resp) => {
			if(!resp.status) {
				dispatch({type: FETCHING_EMAIL_FAILURE, payload: resp.error.message});
			}
			else {
				dispatch({type: FETCHING_EMAIL_SUCCESS, payload: resp.data.message});
			}
		})
		.catch(err => {
			dispatch({type: FETCHING_EMAIL_FAILURE, payload: err.error.message});
		});
	}
}
