import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { StyleSheet, Text, ScrollView, Alert } from 'react-native';
import { Card, Layout } from '@ui-kitten/components';
// import { FloatingAction } from 'react-native-floating-action';
import AppointmentCard from '../components/AppointmentCard';
import FAB from '../components/FAB';
import AppHeader from '../components/AppHeader';

import { useDispatch, useSelector } from 'react-redux'
import { fetchAppointmentsByPID } from '../actions/appointmentAction';

const app = state => state.appointmentReducer.appointments;

const Appointments = ({ navigation }) => {

    const dispatch = useDispatch();
    const appointments = useSelector(app);

console.log(appointments);
    useEffect(() => {
        dispatch(fetchAppointmentsByPID());
    },[]);    

    const appts = appointments.map((a,i) => {
        return(
            <AppointmentCard appointment_status={a.appointment_status} complaint={a.complaint} doctor_lname={a.doctor_lname} appointment_date={a.appointment_date} key={i} />
        )
   })
// console.log(appts);
    return (
                <Layout style={[{ flex: 1 }, styles.cardPadding]}>
                    <ScrollView>
                        <Text style={styles.heading}>My Appointments</Text>
                        <Layout>
                        {
                            appts
                        }
                        </Layout>
                    </ScrollView>
                    <FAB onPress={() => { navigation.navigate("AddAppointment")}}></FAB>
                </Layout>
                
            );
}

export default Appointments;

const styles = StyleSheet.create({
    cardPadding: {
        padding: 20
    },
    heading:{
        marginTop: 20,
        marginBottom: 50,
        fontSize: 22,
        fontWeight: 'bold'
    }
});