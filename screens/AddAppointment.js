import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {View, Platform, Alert, StyleSheet} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Icon, Layout, Input, Select, SelectItem , Text, Button} from '@ui-kitten/components';
import { ScrollView } from 'react-native-gesture-handler';
import { Picker } from '@react-native-picker/picker';
import { createAppointment } from '../actions/appointmentAction';
import { useDispatch} from 'react-redux';
import * as Calendar from 'expo-calendar';
import { Permissions  } from 'expo-permissions';
import { Constants } from 'expo-constants';
import moment from 'moment';
import * as Notifications from 'expo-notifications';


// const MEDICAL_APPOINTMENT_CALENDAR_ID = 47;

// Notifications.setNotificationHandler({
//   handleNotification: async () => ({
//     shouldShowAlert: true,
//     shouldPlaySound: false,
//     shouldSetBadge: false
//   })
// });


const AddAppointment = () => {

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const dispatch = useDispatch();

    const [doctorId, setDoctorId] = useState(1);
    const [patientId, setPatientId] = useState(0);
    const [complaint, setComplaint] = useState('');
    const [status, setStatus] = useState('');
    
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

  console.log(doctorId);
//   let patient_id = 0;

//   useEffect(() => {
        getLoginData('loginData').then(data => {
                setPatientId(data.id);
                console.log(data.id);
                // Alert.alert(data.id);
                //   return patient_id; 
            // console.log(data.id);
        })
        .catch(err => {
            console.log(err);
        });
//   }, []);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    console.log(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  const CalendarIcon = (props) => (
    <Icon {...props} name='calendar'/>
  );
  
  const ClockIcon = (props) => (
    <Icon {...props} name='clock'/>
  );

const scheduleAppointment = () => {
    dispatch(createAppointment({
        doctorId,
        patientId,
        complaint,
        date                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
    }));
}



  return (
    <ScrollView>
        <Layout style={styles.container}>
            <Text style={styles.titleSize}>Schedule an appointment</Text>
            <Layout style={styles.fieldContainer}>
                <View>
                    <Text style={{ fontWeight: 'bold'}}>Doctor Name</Text>
                    <Picker
                        selectedValue={doctorId}
                        onValueChange={(newDoctorId, itemIndex) => {
                            setDoctorId(newDoctorId)
                        }}
                    >
                        <Picker.Item label='Dr Yusuff' value={1}></Picker.Item>
                        <Picker.Item label='Gbenga' value={2}></Picker.Item>
                        <Picker.Item label='Olayinka' value={3}></Picker.Item>
                    </Picker>
                </View>
                <View>
                    <Text style={[{ fontWeight: 'bold', marginBottom: 20}, styles.label]}>Complaint</Text>
                    <Input
                        multiline={true}
                        numberOfLines={8}
                        value={complaint}
                        onChangeText={nextValue => setComplaint(nextValue)}
                    ></Input>
                </View>
                <View>
                    <Button status="basic" style={[styles.textColor, styles.datetime]} accessoryLeft={CalendarIcon} appearance="outline" onPress={showDatepicker}>Set Appointment Date</Button>
                    {/* <Text>{ date }</Text> */}
                </View>
                <View>
                    <Button status="basic" style={[styles.textColor]} accessoryLeft={ClockIcon} appearance="outline" onPress={showTimepicker}>Set Appointment Time</Button>
                </View>
                {show && (
                    <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={false}
                    display="default"
                    onChange={onChange}
                    />
                )}
                <View>
                    {/* <Button style={styles.Button} onPress={() => { addAppointmentToCalendar(date)}}>Add To Calendar</Button> */}
                    <Button style={styles.Button} onPress={async() => Notifications.scheduleNotificationAsync()}>Add to Calendar</Button>
                    <Button style={styles.Button} onPress={() => {
                       scheduleAppointment()
                       Alert.alert('Appointment has been added');
                       }}>Create Appointment</Button>
                </View>
            </Layout>
        </Layout>
    </ScrollView> 
  );
};

// async function schedulePushNotification() {
//   await Notifications.scheduleNotificationAsync({
//     content: {
//       title: "You've got mail! 📬",
//       body: 'Here is the notification body',
//       data: { data: 'goes here' },
//     },
//     trigger: { seconds: 2 },
//   });
// }

// async function registerForPushNotificationsAsync() {
//   let token;
//   if (Constants.isDevice) {
//     const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
//     let finalStatus = existingStatus;
//     if (existingStatus !== 'granted') {
//       const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
//       finalStatus = status;
//     }
//     if (finalStatus !== 'granted') {
//       alert('Failed to get push token for push notification!');
//       return;
//     }
//     token = (await Notifications.getExpoPushTokenAsync()).data;
//     console.log(token);
//   } else {
//     alert('Must use physical device for Push Notifications');
//   }

//   if (Platform.OS === 'android') {
//     Notifications.setNotificationChannelAsync('default', {
//       name: 'default',
//       importance: Notifications.AndroidImportance.MAX,
//       vibrationPattern: [0, 250, 250, 250],
//       lightColor: '#FF231F7C',
//     });
//   }

//   return token;
// }


export default AddAppointment;


const styles = StyleSheet.create({
    container:{
        display: 'flex',
        flexDirection: 'column'
    },
    fieldContainer: {
        padding: 20
    },
    pickerStyle:{  
        height: 50,
        width: "100%",  
        color: '#344953',  
        justifyContent: 'center',  
    },
    titleSize: {
        fontSize: 20,
        padding: 20,
        fontWeight: 'bold'
    },
    Button:{
        backgroundColor: '#FF7F36',
        borderColor: '#FF7F36',
        marginTop: 30
    },
    label: {
        marginTop: 10,
        marginBottom: 15
    },
    datetime: {
        color:'#FF7F36',
        marginBottom: 30,
        marginTop: 20
    }
});
