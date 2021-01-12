import * as t from '../shared/constants';
import { api } from '../shared/constants';
import { Alert } from 'react-native';
import { getUserData, storeUserData } from '../shared/global';

const setRegisterState = (userData) => {
    return {
        type: t.user.SET_REGISTER_STATE,
        payload: userData
    }
}

export const pregRegister = (userData, callback = () => {}) => {
    const {
            firstName,
            lastName,
            email,
            passportUri,
            password,
            genotype,
            bloodGroup,
            freqAilment,
            pweight,
            height
     } = userData;
console.log(genotype);
     return (dispatch) => {
         return fetch(api.PREG_REGISTER_ENDPOINT, {
             method: 'POST',
             headers: {
                 Accept: 'application/json',
                 'Content-Type': 'application/json'
             },
             body: JSON.stringify({
               p_fname:  firstName,
               p_lname: lastName,
               email: email,
               p_img: passportUri,
               pwd: password,
               genotype: genotype,
               blood_group: bloodGroup,
               frequent_ailment: freqAilment,
               pweight: pweight,
               height: height
             })
         })
         .then((response) => response.json())
         .then((json) => {
            console.log(json);
            const { token, message, data, status } = json;
            if(status === 'success'){
                storeUserData('userToken', token);
                dispatch(setRegisterState(data));
                Alert.alert('Success', message);
                callback();
            }
            else {
                Alert.alert('Failed', 'Some error occured, please retry');
            }
         })
         .catch(err => {
            Alert.alert('Login Failed', 'Some error occured, please retry');
            console.log(err);
         });
    }

}
