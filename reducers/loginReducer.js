import { user } from "../shared/constants";

const initialState = {
    loading: false,
    isLoggedIn: false,
    token: '',
    data: ''
};

export const loginReducer = (state= initialState, action) => {
    switch(action.type){
        case user.LOGIN_USER:
            return {
                ...state,
                ...action.payload,
                isLoggedIn: true,
            };
        case user.LOGIN_SUCCESS:
            return {
                isLoggedIn: false,
                loading: false
            };
        default:
                return state; 
    }
};