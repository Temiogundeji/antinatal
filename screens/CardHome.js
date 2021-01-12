import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Card, Layout } from '@ui-kitten/components';
import * as Fa from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/AntDesign';
import Appointments from './Appointments';
import Notifications from './Notifications';
import Profile from '../screens/Profile';
import Videos from '../screens/Videos';
import { Directions, ScrollView } from 'react-native-gesture-handler';
import { getLoginData } from '../actions/loginAction';

const VideoIcon = (props) => (
    <Icon {...props} name='youtube'/>
);
    
const PersonIcon = (props) => (
    <Icon {...props} name='user'/>
);

const BookIcon = (props) => (
    <Icon {...props} name='book'/>
);

const BellIcon = (props) => (
    <Icon {...props} name='notification'/>
);

  const FoodIcon = (props) => (
    <Icon {...props} name='heart'/>
  );
  const HomeIcon = (props) => (
    <Icon {...props} name='home'/>
  );

//   const PowerIcon = (props) => 
//     <Fa {...props} name='home'/>

  const Header = ({ title, subtitle}) => {
    return (
        <View style={{ padding: 30, backgroundColor: '#FF7F36', display: 'flex', flexDirection: 'row'}}>
            <View>
                <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#fff', marginTop: 20 }}>{title}</Text>
                <Text style={{ fontSize: 15, fontStyle: 'italic', color: '#fff' }}>{subtitle}</Text>
            </View>
        </View>
    );
  }

const CardHome = ({ navigation }) => {

    const [firstName, setFirstName] = useState('');

    getLoginData('loginData').then(data => {
        setFirstName(data.fname);
    });

    return (
        <ScrollView>
            <Header title="Welcome" subtitle={firstName} />
                    <View style={{ flexDirection: "column", padding: 24 }}>
                        <Animatable.View animation="pulse" iterationCount="infinite" easing="ease-out" style={{ flexDirection: "row", marginBottom: 20}}>
                            <Card onPress={() => { navigation.navigate('Notifications')}} style={{ display: 'flex', justifyContent:'center', alignItems: 'center', height: 200, flex: 1, borderRadius: 10,  borderColor:'#FF7F36', marginRight: 10 }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 12, color: '#FF7F36'}}>
                                    <BellIcon size={45} />
                                </Text>
                                <Text style={{fontSize: 16, fontWeight: 'bold',  marginTop: 10}}>Notifications</Text>
                            </Card>
                            <Card onPress={() => { navigation.navigate('Appointments')}} style={{ display: 'flex', justifyContent:'center', alignItems: 'center', height: 200, flex: 1, borderRadius: 10,  borderColor:'#FF7F36', marginRight: 10 }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 12, color: '#FF7F36'}}>
                                    <BookIcon size={45} />
                                </Text>
                                <Text style={{fontSize: 16, fontWeight: 'bold',  marginTop: 10}}>Appointments</Text>
                            </Card>
                        </Animatable.View>
                        <Animatable.View  animation="pulse" easing="ease-out" iterationCount="infinite" style={{ flexDirection: "row", marginBottom: 20}}>
                            <Card onPress={() => { navigation.navigate('Videos')}} style={{ display: 'flex', justifyContent:'center', alignItems: 'center', height: 200, flex: 1, borderRadius: 10,  borderColor:'#FF7F36', marginRight: 10 }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 12, color: '#FF7F36'}}>
                                    <VideoIcon size={45} />
                                </Text>
                                <Text style={{fontSize: 16, fontWeight: 'bold',  marginTop: 10}}>Visual Instructions</Text>
                            </Card>
                            <Card onPress={() => { navigation.navigate('BMICalculator')}} style={{ display: 'flex', justifyContent:'center', alignItems: 'center', height: 200, flex: 1, borderRadius: 10,  borderColor:'#FF7F36', marginRight: 10 }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 12, color: '#FF7F36'}}>
                                    <FoodIcon size={45} />
                                </Text>
                                <Text style={{fontSize: 16, fontWeight: 'bold',  marginTop: 10}}>BMI Calculator</Text>
                            </Card>
                        </Animatable.View>
                        <Animatable.View  animation="pulse" easing="ease-out" iterationCount="infinite" style={{ flexDirection: "row", marginBottom: 20}}>
                            <Card onPress={() => { navigation.navigate('Profile')}} style={{ display: 'flex', justifyContent:'center', alignItems: 'center', height: 200, flex: 1, borderRadius: 10,  borderColor:'#FF7F36', marginRight: 10 }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 12, color: '#FF7F36'}}>
                                    <PersonIcon size={45} />
                                </Text>
                                <Text style={{fontSize: 16, fontWeight: 'bold',  marginTop: 10}}>Profile</Text>
                            </Card>
                            <Card onPress={() => { navigation.navigate('DietAdvice')}} style={{ display: 'flex', justifyContent:'center', alignItems: 'center', height: 200, flex: 1, borderRadius: 10,  borderColor:'#FF7F36', marginRight: 10 }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 12, color: '#FF7F36'}}>
                                    <HomeIcon size={45} />
                                </Text>
                                <Text style={{fontSize: 16, fontWeight: 'bold',  marginTop: 10}}>Diet Advice</Text>
                            </Card>
                        </Animatable.View>
                </View>
            </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        flexDirection: 'column'
    },
    fieldContainer: {
        padding: 20
    },
    cardContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
      },
    card: {
        margin: 2,
    },
});

export default CardHome;