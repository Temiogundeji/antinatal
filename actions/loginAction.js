import * as t from '../shared/constants';
import { api } from '../shared/constants';
import {
    storeUserData,
    getUserData,
    handleApiResponseError
} from '../shared/global';

import AsyncStorage from '@react-native-community/async-storage';

import { Alert } from 'react-native';

const setLoginState = (loginData) => {
    return {
        type: t.user.SET_LOGIN_STATE,
        payload: loginData
    }
}

export const setLoginData = async (loginData) => {
    try{
        await AsyncStorage.setItem('loginData', JSON.stringify(loginData));
    }
    catch(err){
        console.log(err);
    }
}
  
  
  export const getLoginData = async (userData) => {
    try {
        const jsonValue = await AsyncStorage.getItem(userData);
        return jsonValue !== null ? JSON.parse(jsonValue) : null;
    } catch(err) {
      // error reading value
      Alert.alert("Opps!", "Something went wrong.");
      console.log("Something went wrong", err);
    }
  }
  



export const login = (loginInput, callback = () => {}) => {
 const { email, password } = loginInput;
 return (dispatch) => {
     return fetch('http://192.168.43.248:3000/api/v1/preg-login', {
         method: 'POST',
         headers: {
             Accept: 'application/json',
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({
             email: email,
             pwd: password
         }),
     })
    .then((response) => response.json())
    .then((json) =>{
        console.log(json)
        const { status, data, message } = json;
        if(status === 'success'){
            setLoginState(data);
            setLoginData({
                id: data.id,
                fname: data.patient_fname,
                lname: data.patient_lname,
                email: data.email,
                frequent_ailment: data.frequent_ailment,
                genotype: data.genotype,
                blood_group: data.blood_group,
                estimated_delivery_date: data.edt,
                pvc_test_result:data.pvc_test_result,
                sugar_level_test:data.sugar_level_test,
                hiv_test_result:data.hiv_test_result,
                message: message
                });
            dispatch(setLoginState(data));
            // console.log(data.id);

            getLoginData('loginData').then(data => {
                console.log(data.patient_fname);
            }).catch(err => console.log(err));
            Alert.alert('Login Succesful',message);
            callback();
            
        }
        else{
            Alert.alert('Login Failed', 'Email or Password is incorrect');
            // handleApiResponseError(json);
        }
    })
    .catch(err => {
        Alert.alert('Login Failed', 'Some error occured, please retry');
        console.log(err);
    })
     
 }
}