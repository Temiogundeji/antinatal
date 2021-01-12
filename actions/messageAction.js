import AsyncStorage from '@react-native-community/async-storage';
import * as t from '../shared/constants';
import { api } from '../shared/constants';
import { Alert } from 'react-native';

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
 
  const getCurrentUserID = async () => {
      let userId = 0;
      try{
        let jsonData = await AsyncStorage.getItem('loginData')
        let ObjData = JSON.parse(jsonData);
        
        userId = ObjData['id'];
      }
      catch(err){
          console.log(err);
      }

      return userId;
  }

//   const patientId = getCurrentUserID();

const FETCH_MESSAGES_BY_PATIENT_ID = `http://192.168.43.248:3000/api/v1/pregs/messages/4`;

console.log(getLoginData("loginData"));

const setMessages = (messages) => {
    return {
        type:t.user.FETCH_ALL_MESSAGES_BY_PID,
        payload: messages
    };
}

export const fetchMessages = () => {
    return function (dispatch) {
        return fetch(FETCH_MESSAGES_BY_PATIENT_ID)
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                // Alert.alert(json);
                const { data, status } = json;
                if(status === 'success'){
                    // console.log(data);
                    return(dispatch(setMessages(data)));
                }
            })
            .catch(err => {
                console.log(err);
            });
    }
}

const setMessageState = (messages) => {
    return {
        type: t.user.SEND_MESSAGE,
        payload: messages
    }
}

export const postMessage = (messageData, callback = () => {}) => {
    const { body, pregID, doctorID, title } = messageData;

    return function (dispatch){
        return fetch('http://192.168.43.248:3000/api/v1/pregs/messages', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                message_body: body,
                preg_id: pregID,
                doctor_id: doctorID,
                message_title: title            
            })
        })
        .then((response) => response.json())
        .then((json) => {
            const { status, data, message } = json;
            if(status === "success"){
                console.log(data);
                setMessageState(data);
                Alert.alert(message);
                dispatch(setMessageState(data));
                Alert.alert(`Message has been sent successfully!`);
            }
        })
        .catch(err => {
            Alert.alert('Failed', 'Some error occured, please retry', err);
        })
    }
}