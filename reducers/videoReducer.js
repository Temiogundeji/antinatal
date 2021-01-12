import { user } from '../shared/constants';

const initialState = {
    messages:[]
}

export const videoReducer = (state = initialState, action) => {
    switch(action.type){
        case user.SEND_MESSAGE:
            return Object.assign({}, state, {
                messages: action.messages.concat(action.payload)
            });
        case user.FETCH_ALL_MESSAGES_BY_PID:
            return {
                ...state,
                messages: action.payload
            }
        default:
            return state; 
    }
}