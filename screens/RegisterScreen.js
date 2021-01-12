import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Platform, Alert, Image, ScrollView, TouchableWithoutFeedback } from 'react-native';

import { Layout, Input, Button, Icon, Spinner, Avatar, Select, SelectItem, IndexPath } from '@ui-kitten/components';
import { StyleSheet } from "react-native";

import { pregRegister } from "../actions/pregRegisterAction"
import { Formik } from 'formik';
import * as yup from 'yup';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';

import "react-native-gesture-handler";
import { useDispatch, useSelector } from 'react-redux';
import { globalStyles } from '../shared/global';
import {Picker} from '@react-native-picker/picker';


const RegisterScreen = ({ navigation }) => {

    const dispatch = useDispatch();
    const [secureTextEntry, setSecureTextEntry] = React.useState(true);
 
    // const [image, setImage] = useState(null);

    const toggleSecureEntry = () => {
        setSecureTextEntry(!secureTextEntry);
    };  

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passportUri, setPassport] = useState(null);
    const [imageError, setImageError] = useState(false);
    const [genotype, setGenotype] = useState('');
    const [bloodGroup, setBloodGroup] = useState('');
    const [freqAilment, setFreqAilment] = useState('');
    const [pweight, setPweight] = useState(0);
    const [height, setHeight] = useState(0);

    const edt = null;
    const pvc_test_result = null;
    const hiv_test_result = null;
    const sugar_level_test_result = null;

    const renderIcon = (props) => (
        <TouchableWithoutFeedback onPress={toggleSecureEntry}>
          <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'}/>
        </TouchableWithoutFeedback>
      );
   ;
    const getPermissionAsync = async () => {
        if(Constants.platform.ios){
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if(status !== "granted"){
                Alert.alert("Sorry, we need camera roll permission to make this work!");
                const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            }

            await Permissions.askAsync(Permissions.CAMERA);
        }
    }

    const pickImage = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [1, 1],
                quality: 1
            });

            if(!result.cancelled){
                setPassport(result.uri)
            }
            else{
                setImageError(true);
            }
        }
        catch(err){
            setImageError(true);
            console.log(err);
        }
    }

    const triggerImagePicker = () => {
        getPermissionAsync();
        pickImage();
    }

    const successResponsecallback = () => {
        setSpin(false);
        // navigation.navigate('HomeScreen');
    }

    const registerPatient = () => {
       dispatch(pregRegister({ 
            firstName,
            lastName,
            email,
            passportUri,
            password,
            genotype,
            bloodGroup,
            freqAilment,
            pweight,
            height,
            edt,
            pvc_test_result,
            hiv_test_result,
            sugar_level_test_result,
        }
    ))
        setFirstName('');
        // console.log(firstName);
    }
   
    return (
        
        <Layout style={{flex:1, justifyContent: 'flex-start' }}>
            <ScrollView>
            <Layout style={{ padding: 30, backgroundColor: 'transparent'}}>
                <View>
                    <Text style={styles.header}>The Easiest way to schedule an appointment with a doctor.</Text>
                </View>
                <View>
                    <Text>First Name</Text>
                    <Input
                        style={styles.input}
                        value={firstName}
                        placeholder='Eve'
                        onChangeText={nextValue => setFirstName(nextValue)}
                    />
                </View>
                <View>
                    <Text>Weight</Text>
                    <Input
                        style={styles.input}
                        value={pweight}
                        placeholder='Eve'
                        onChangeText={nextValue => setPweight(nextValue)}
                    />
                </View>
                <View>
                    <Text>Height</Text>
                    <Input
                        style={styles.input}
                        value={height}
                        placeholder='Eve'
                        onChangeText={nextValue => setHeight(nextValue)}
                    />
                </View>
                <View>
                    <Text>Last Name</Text>
                    <Input
                        style={styles.input}
                        value={lastName}
                        placeholder='Adam'
                        onChangeText={nextValue => setLastName(nextValue)}
                    />
                </View> 
                <View>
                    <Text>Email</Text>
                    <Input
                        style={styles.input}
                        value={email}
                        placeholder='adam@eve.com'
                        onChangeText={nextValue => setEmail(nextValue)}
                    />
                </View>
                <View>
                    <Text>Password</Text>
                    <Input
                        value={password}
                        placeholder='adameve'
                        accessoryRight={renderIcon}
                        secureTextEntry={secureTextEntry}
                        onChangeText={nextValue => setPassword(nextValue)}
                    />
                </View>
                <View>
                    <Button
                    size="small"
                            style={[{backgroundColor: '#000', color: '#FF7F36'},
                            imageError ? globalStyles.borderDanger : null,
                            {
                                alignItems: 'center',
                                marginVertical: 10,
                                justifyContent: "flex-start",
                                borderColor:'none'
                            }
                        ]
                        }
                        onPress={triggerImagePicker}
                    >
                    {!passportUri && (
                                // <UserIcon />
                                <Text>No Image</Text>
                            )}
                            {passportUri && (
                            <>
                                <Avatar
                                source={{ uri: passportUri }}
                                style={{ width: 40, height: 40 }}
                                />
                            </>
                            )}
                            <Text>Select an Image</Text>
                    </Button>
                </View>
                <View>
                    <Text>Genotype</Text>
                    <Picker
                        selectedValue={genotype}
                        onValueChange={
                            (newGenotype, itemIndex) => {
                                setGenotype(newGenotype)
                            }
                        }
                    >                            
                        <Picker.Item label='AA' value='AA'></Picker.Item>
                        <Picker.Item label='AS' value='AS'></Picker.Item>
                        <Picker.Item label='AC' value='AC'></Picker.Item>
                        <Picker.Item label='CS' value='CS'></Picker.Item>
                        <Picker.Item label='CC' value='CC'></Picker.Item>
                    </Picker>
                </View>
                <View>
                    <Text>Blood Group</Text>
                    <Picker
                        selectedValue={bloodGroup}
                        onValueChange={(newBloodGroup, itemIndex) => setBloodGroup(newBloodGroup)}
                    >                            
                        <Picker.Item label='O+' value='O+'></Picker.Item>
                        <Picker.Item label='O-' value='O-'></Picker.Item>
                        <Picker.Item label='B+' value='B-'></Picker.Item>
                    </Picker>
                </View>
                <View>
                    <Text>Frequent Ailment</Text>
                    <Input
                        value={freqAilment}
                        placeholder='Malaria'
                        onChangeText={nextFreqAilment => setFreqAilment(nextFreqAilment)}
                    />
                </View> 
                <Button onPress={() =>{ 
                   registerPatient()
                }} style={styles.submitButton}>Register</Button>
            </Layout>
            </ScrollView>
        </Layout> 
    );         
}

export default RegisterScreen;

const styles = StyleSheet.create({
    input: {
      marginVertical: 2,
    },
    fieldStyle:{ 
      marginBottom: 5,
      fontSize:20,
      borderColor: '#FF7F36'
    },
    labelText:{
      fontSize: 14,
      color: '#fff',
      fontWeight: '500',
      marginBottom: 10
    },
    submitButton:{
        backgroundColor: '#FF7F36',
        borderColor: '#FF7F36',
        marginTop: 30
    },
    label: {
        marginBottom:5,
        fontWeight: '700'
    },
    icon: {
        width: 32,
        height: 32,
    },
    layout: {
      flex: 1,
      flexDirection:'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 10,
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: { 
      marginBottom: 30,
       fontSize: 21,
       color: '#FF7F36',
       fontWeight:'700',
       lineHeight:31,
       marginTop: 30
    }
  });
  
  