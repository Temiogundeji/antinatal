import { user } from '../shared/constants';

const initialState = {
    loading: false,
    isRegistered: false
};

export const registerReducer = (state = initialState, action) => {
    switch(action.type){
        case user.REGISTER_REQUEST:
            return {
                ...state,
                ...action.payload,
                loading: true
            }
        case user.REGISTER_SUCCESS:
            return {
                loading: false
            }
        case user.REGISTER_FAILURE:
            return {
                loading: false
            }
        default:
            return state
    }
}