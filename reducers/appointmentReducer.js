import { user } from '../shared/constants';

const initialState = {
    appointments: [],
    appointmentCount: 0
};


export const appointmentReducer = (state = initialState, action) => {
    switch(action.type) {
        case user.CREATE_NEW_APPOINTMENT:
            return Object.assign({}, state, {
                appointments: action.appointments.concat(action.payload)
            });
        case user.FETCH_ALL_APPOINTMENTS_BY_ID:
            return {
                ...state,
                appointments: action.payload
            }

        default:
            return state;
   }
}