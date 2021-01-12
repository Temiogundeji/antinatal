import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {View, Platform, Alert, StyleSheet} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Layout, Input, Select, SelectItem , Text, Button} from '@ui-kitten/components';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Picker } from '@react-native-picker/picker';
import { postMessage } from '../actions/messageAction';
import { useDispatch } from 'react-redux';
import { getLoginData } from '../actions/loginAction';
import Icon from 'react-native-vector-icons/FontAwesome';


const SendMessage = ({navigation}) => {

    const dispatch = useDispatch();

    const [title, setMessageTitle]= useState('');
    const [body, setBody] = useState('');
    const [pregID, setPregId] = useState(0);
    const [doctorID, setDoctorId] = useState(0);
        
    getLoginData('loginData').then(data => {
        setPregId(data.id);
        // console.log(data.id);
    })
    .catch(err => {
        console.log(err);
    });
    
    const SendIcon = (props) => (
        <Icon style={{marginLeft: 10}} {...props} name='send'/>
    );
        
    

    const textDoctor = () => {
        dispatch(
            postMessage(
                {
                    title,
                    body,
                    pregID,
                    doctorID
                }
            ));
    }
    
    return(
        <ScrollView>
            <Layout style={styles.container}>
                <Layout style={styles.fieldContainer}>
                <Text style={styles.label}>Title:</Text>
                <Input
                    value={title}
                    onChangeText={newTitle => setMessageTitle(newTitle)}>
                </Input>
                <View>
                <Text style={styles.label}>Select a doctor:</Text>
                    <Picker
                        selectedValue={doctorID}
                        onValueChange={(newDoctorId, itemIndex) => {
                            setDoctorId(newDoctorId)
                        }}
                    >
                        <Picker.Item label='Dr Ogunsina' value={1}></Picker.Item>
                        <Picker.Item label='Gbenga' value={2}></Picker.Item>
                        <Picker.Item label='Olayinka' value={3}></Picker.Item>
                    </Picker>
                    </View>
                    <View>
                        <Text style={styles.label}>Message Body:</Text>
                        <Input
                            multiline={true}
                            numberOfLines={8}
                            value={body}
                            onChangeText={nextValue => setBody(nextValue)}>
                        </Input>
                    </View>
                    <View>
                        <Button style={styles.Button} onPress={() => textDoctor()}>
                            {/* Post Message */}
                            <SendIcon size={25} />
                        </Button>
                    </View>
                </Layout>
            </Layout>
        </ScrollView>
    )

} 

export default SendMessage;

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
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 15
    },
    datetime: {
        color:'#FF7F36',
        marginBottom: 30,
        marginTop: 20
    }
});

