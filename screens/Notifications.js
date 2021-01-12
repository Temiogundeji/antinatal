import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Alert } from 'react-native';
import { Layout, Card } from '@ui-kitten/components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMessages} from '../actions/messageAction';
import FAB from '../components/FAB';
import SendMessage from '../screens/AddAppointment';
const messagesFromState = state => state.messageReducer.messages;

const Notifications = ({ navigation }) => {
    const dispatch = useDispatch();
    const messages = useSelector(messagesFromState);

    console.log(messages);
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
    useEffect(()=> {
        console.log(getLoginData("loginData"));;
        dispatch(fetchMessages());
    }, []);

    const messageList = messages.map((m,i) => {
        return(
            <Card key={i} style={{ marginBottom: 20}}>
                <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 10}}>{m.message_title}</Text>
                <Text>{m.message_body}</Text>
                <Text>Dr. {m.doctor_fname}</Text>
                <Text>{m.created_at}</Text>
            </Card>
        )
   })

   return (
    <Layout  style={[{ flex: 1 }, styles.cardPadding]}>
        <ScrollView>
            <Text style={styles.heading}>Messages</Text>
            <Layout>
                { messageList }
            </Layout>
            
        </ScrollView>
        <FAB onPress={() => { navigation.navigate("SendMessage")}}></FAB>
    </Layout>
);
}


const styles = StyleSheet.create({
    cardPadding: {
        padding: 20
    },
    heading:{
        marginTop: 20,
        marginBottom: 30,
        fontSize: 22,
        fontWeight: 'bold'
    }
});
export default Notifications;
