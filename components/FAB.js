import React from 'react';
import { Button } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';
import { Icon } from '@ui-kitten/components';

export const Plus = () => (
  <Icon
    style={styles.icon}
    fill='#fff'
    name='plus'
  />
);


const FAB = ({ onPress }) =>{
    return <Button onPress={onPress} accessoryLeft={Plus} style={styles.button}></Button>
}
    


export default FAB;

const styles = StyleSheet.create({
    icon: {
      width: 22,
      height: 22,
      fontWeight: 'bold'
    },
    button: {
        position: 'absolute',
        margin: 5,
        right: 150,
        bottom: 0,
        width: 55,
        height: 55,   
        borderRadius:  100,
        backgroundColor: '#FF7F36',
        borderColor: '#FF7F36',
        shadowColor: "black",
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.7,
        elevation: 6,
        shadowRadius: 15 ,
        shadowOffset : { width: 1, height: 13},
    }
});