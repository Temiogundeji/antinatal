import React, { useState } from 'react';
import { TouchableWithoutFeedback, Dimensions, Alert } from 'react-native';
import { View, Text, Image, ScrollView } from 'react-native';
import { Layout, Input, Button, Icon, Spinner } from '@ui-kitten/components';
import { StyleSheet } from "react-native";
import { login } from '../actions/loginAction';
import CardHome from '../screens/CardHome';

import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import { CommonActions } from "@react-navigation/native";


import "react-native-gesture-handler";
import { useDispatch } from 'react-redux';
import { globalStyles } from '../shared/global';

const useInputState = (initialValue = '') => {
  const [value, setValue] = React.useState(initialValue);
  return { value, onChangeText: setValue };
};

const LoginScreen = ({ navigation }) => {
  // navigation.navigate("CardHome");

    const dispatch = useDispatch();
    const mediumInputState = useInputState();
    
    const [secureTextEntry, setSecureTextEntry] = React.useState(true);
    const [spin, setSpin] = useState(false);
    

    const successResponsecallback = () => {
      setSpin(false);
      navigation.dispatch(CommonActions.reset({
        index: 1,
        routes: [{ name: "CardHome" }]
      }));
    }


    const AlertIcon = (props) => (
        <Icon {...props} name='alert-circle-outline'/>
    );
      
    const LoginSchema = yup.object({
      email: yup
        .string()
        .email('Invalid email')
        .required('Required'),
      password: yup.string()
      .min(8, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    })

    const toggleSecureEntry = () => {
      setSecureTextEntry(!secureTextEntry);
    };
  
    const renderIcon = (props) => (
      <TouchableWithoutFeedback onPress={toggleSecureEntry}>
        <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'}/>
      </TouchableWithoutFeedback>
    );

  
    return (
        <Layout  >
          <View>
            <Text style={styles.header}>Welcome Back!</Text>
          </View>
          <Formik
              initialValues={{
                email: '',
                password: ''
              }}
              onSubmit={(loginData) => {
                // Alert.alert("You are silly");
                setSpin(true);
                dispatch(login(loginData, successResponsecallback));
                
              }}
              validationSchema={LoginSchema}
          >
           {(props) => {
              return (
                <>
                  <View>

                      <Text style={styles.labelText}>Email</Text>
                      <Input
                      style={styles.fieldStyle, {borderColor: props.errors.email && props.touched.email ? globalStyles.borderDanger : null }}
                      size='large'
                      {...mediumInputState}
                      placeholder='adam@eve.com'
                      value={props.values.email}
                      onChangeText={props.handleChange('email')}
                      onBlur={props.handleBlur('email')}
                      >
                      </Input>
                      <Text style={styles.labelText}>Password</Text>
                      <Input
                        style={styles.fieldStyle, {borderColor:props.errors.email && props.touched.password ? globalStyles.borderDanger : null }}
                      size='large'
                      {...mediumInputState}
                      value={props.values.password}
                      placeholder='Your password'
                      accessoryRight={renderIcon}
                      secureTextEntry={secureTextEntry}
                      onChangeText={props.handleChange('password')}
                      onBlur={props.handleBlur('password')}
                      >
                      </Input>
                  </View>
                  <View style={styles.layout}>
                    <Text style={{color: '#fff'}}>New user?</Text>
                    <Button style={{backgroundColor: 'transparent', borderColor:'transparent'}} onPress={()=>{navigation.navigate('RegisterScreen')}}><Text style={{color: '#fff'}}>Create an account</Text></Button>
                  </View>
                  <View>
                    <Button style={{ 
                      marginTop: 40, borderColor: '#fff',
                     backgroundColor:'transparent'
                    }}
                    onPress={props.handleSubmit}
                    ><Text style={{ fontWeight: 'bold'}}>LOGIN</Text>
                    </Button>
                  </View>
                </>
              );
           }} 
          </Formik>
        </Layout>
      // </Layout>
    );
  };

export default LoginScreen;

const styles = StyleSheet.create({
  input: {
    marginVertical: 2,
  },
  fieldStyle:{ 
    marginBottom: 15,
    fontSize:20
  },
  labelText:{
    fontSize: 14                                                         ,
    color: '#fff',
    fontWeight: '500',
    marginBottom: 10
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
  logo: {
      height:'100',
      width: '100'
  },
  logoBox:{
      marginTop: '10',
      marginBottom: '50'
  },
  textBox: {
      marginBottom:'20'
  },
  header: { 
    marginBottom: 20,
     fontSize: 24,
     color: '#fff',
     fontWeight:'bold'
  }
});

