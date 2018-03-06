import { FETCHING, FETCHING_SUCCESS, FETCHING_FAILURE } from '../utils/ActionTypes'
import {AsyncStorage} from 'react-native';

export function Register(data) {
	return async dispatch => {
		dispatch({type: FETCHING});
		var token = await AsyncStorage.getItem('access_token');
		fetch('http://139.59.87.248:8000/api/company', {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'Authorization' : 'Bearer ' + token
		},
		body: data
		})
		.then(resp => resp.json())
		.then((resp) => {
			console.log(resp);
		})
		.catch(err => {
			dispatch({type: FETCHING_FAILURE, payload: err.error.message});
		});
	}
}
