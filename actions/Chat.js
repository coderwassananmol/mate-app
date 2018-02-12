import { SEND_MESSAGE, RECEIVE_ALL_MESSAGES, RECEIVE_MESSAGE } from '../utils/ActionTypes'

export function sendMessage(message,sender) {
	return dispatch => {
		fetch("http://192.168.42.141:4000/send", {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "message" : message,
                    "sender" : sender
                })
            })
		    .then(resp => {
                dispatch({
                    type : SEND_MESSAGE,
                    message : message
                })
            })
		.catch(err => {
			console.log(err);
		});
	}
}
