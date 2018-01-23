import { FETCHING_EMAIL_TOKEN, FETCHING_EMAIL_TOKEN_FAILURE, FETCHING_EMAIL_TOKEN_SUCCESS } from '../utils/ActionTypes'

export function VerifyToken(token) {
	return dispatch => {
		dispatch({type: FETCHING_EMAIL_TOKEN});
		fetch('http://192.168.1.105:8000/api/verifyCompanyEmail?email_token='+token, {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		})
		.then(resp => resp.json())
		.then((resp) => {
			if(!resp.status) {
				dispatch({type: FETCHING_EMAIL_TOKEN_FAILURE, payload: resp.error.message});
			}
			else {
				dispatch({type: FETCHING_EMAIL_TOKEN_SUCCESS, payload: resp.data.message});
			}
		})
		.catch(err => {
			dispatch({type: FETCHING_EMAIL_TOKEN_FAILURE, payload: err});
		});
	}
}
