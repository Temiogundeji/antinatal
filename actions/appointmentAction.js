import * as t from '../shared/constants';
import { api } from '../shared/constants';
import { getUserData } from '../shared/global';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { date } from 'yup';


const getLoginData = async (userData) => {
    try {
        const jsonValue = await AsyncStorage.getItem(userData);
        return jsonValue !== null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      // error reading value
      Alert.alert("Opps!", "Something went wrong.");
      console.log("Something went wrong", e);
    }
  }

  async function retrievePatientId(){

    const data = await AsyncStorage.getItem('loginData');
    console.log(data.id);
    const FETCH_APPOINTMENTS_BY_PREG_ID = `http://192.168.43.248:3000/api/v1/pregs/appointments/${data.id}`;
    return FETCH_APPOINTMENTS_BY_PREG_ID;
  }

// let app = retrievePatientId();

// let FETCH_ALL_APPOINTMENTS_BY_PREG_ID = app;

const FETCH_ALL_APPOINTMENTS_BY_PREG_ID = `http://192.168.43.248:3000/api/v1/pregs/appointments/${4}`;

const setAppointments = (appointments) => {
    return {
        type:t.user.FETCH_ALL_APPOINTMENTS_BY_ID,
        payload: appointments
    };
}

export const fetchAppointmentsByPID = () => {
    return function (dispatch) {
        return fetch(FETCH_ALL_APPOINTMENTS_BY_PREG_ID)
            .then((response) => response.json())
            .then((json) => {
                const { data, status } = json;
                if(status === 'success'){
                    return(dispatch(setAppointments(data)));
                }
            })
            .catch(err => {
                console.log(err);
            });
    }
}

const setAppointmentState = (appointmentData) => {
    return {
        type: t.user.CREATE_NEW_APPOINTMENT,
        payload: appointmentData
    }
}

export const createAppointment = (appointmentData, callback = () => {}) => {
    const { doctorId, patientId, complaint, date } = appointmentData;

    return function (dispatch){
        return fetch(api.APPOINTMENT_ENDPOINT, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                d_id: doctorId,
                p_id: patientId,
                complaint: complaint,
                appointment_date: date
            })
        })
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            const { status, data } = json;
            if(status === "success"){
                setAppointmentState(data);
                dispatch(setAppointmentState(data));
                Alert.alert(`An appointment has been scheduled with Docotor ${doctorId} at ${date}`);
                // Alert.alert('Success', 'Appointment has been scheduled successfully!');
            }
        })
        .catch(err => {
            Alert.alert('Failed', 'Some error occured, please retry');
        })
    }
}