import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { Layout, Input, Button } from '@ui-kitten/components';
import { StyleSheet } from "react-native";
// import logo from '../assets/medical-appointment.png'

const IdiotScreen = () => (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text category='h1'>HOME</Text>
    </Layout>
  );
export default IdiotScreen;

const styles = StyleSheet.create({
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
    }
});

