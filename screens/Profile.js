import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Layout } from '@ui-kitten/components';
import AsyncStorage from '@react-native-community/async-storage';
import { getLoginData, login } from '../actions/loginAction';
import { useSelector, useDispatch } from 'react-redux';

const Profile = ({navigation}) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [frequentAilment, setFrequentAilment] = useState('');
    const [genotype, setGenotype] = useState('');
    const [bloodGroup, setBloodGroup] = useState('');
    const [sugarLevel, setSugarLevel] = useState('');
    const [pvc, setPVC] = useState('');
    const [estimatedDeliveryDate, setEstimatedDeliveryDate] = useState('');
    const [hiv, setHIVTestResult] = useState('');

    getLoginData('loginData').then(data => {
        setFirstName(data.fname);
        setLastName(data.lname)
        setEmail(data.email);
        setFrequentAilment(data.frequent_ailment);
        setGenotype(data.genotype);
        setBloodGroup(data.blood_group);
        setSugarLevel(data.sugar_level_test_result);
        setPVC(data.pvc_test_result);
        setHIVTestResult(data.hiv_test_result);
        setEstimatedDeliveryDate(data.estimated_delivery_date);
    })

    return (
        <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 40}}>PROFILE</Text>
           
            <Layout style={{ padding: 5 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 30}}>{firstName}'s Bio Data</Text>
                <View>
                    <Text style={styles.marginBottom}><Text style={{ fontWeight: 'bold'}}> First Name: </Text> {firstName}</Text>
                    <Text style={styles.marginBottom}><Text style={{ fontWeight: 'bold'}}>last Name: </Text> {lastName}</Text>
                    <Text style={styles.marginBottom}><Text style={{ fontWeight: 'bold'}}>Email: </Text>{email}</Text>
                    <Text style={styles.marginBottom}><Text style={{ fontWeight: 'bold'}}>Genotype: </Text> {genotype}</Text>
                    <Text style={styles.marginBottom}><Text style={{ fontWeight: 'bold'}}>Blood Group: </Text>{bloodGroup}</Text>
                    <Text style={styles.marginBottom}><Text style={{ fontWeight: 'bold'}}>Frequent Ailment: </Text>{frequentAilment}</Text>
                </View>
                <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 30, marginTop: 30}}>{firstName}'s Test Results</Text>
                <View>
                <Text style={styles.marginBottom}><Text style={{ fontWeight: 'bold'}}> Sugar Level: </Text> {sugarLevel}</Text>
                    <Text style={styles.marginBottom}><Text style={{ fontWeight: 'bold'}}>PCV: </Text> {pvc}</Text>
                    <Text style={styles.marginBottom}><Text style={{ fontWeight: 'bold'}}>Estimated Delivery Date: </Text>{estimatedDeliveryDate}</Text>
                    <Text style={styles.marginBottom}><Text style={{ fontWeight: 'bold'}}>HIV: </Text> {hiv}</Text>
                </View>
            </Layout>
        </Layout>
        );
}

export default Profile;

const styles = StyleSheet.create({
    marginBottom: {
        marginBottom: 20,
        fontSize: 14
    }
});