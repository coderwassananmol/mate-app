import { MESSAGE, CODE, POLL, GRAPH } from '../utils/ActionTypes'

export function sendMessage(message,type,sender) {
	return dispatch => {
		fetch("http://192.168.42.96:4000/send/"+sender, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "message" : message,
                    "type" : type
                })
            })
		    .then(resp => {
                dispatch({
                    message : message,
                    type : type,
                    sender : sender
                })
            })
		.catch(err => {
			console.log(err);
		});
	}
}
