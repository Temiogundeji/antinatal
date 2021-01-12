import { Alert, StyleSheet } from 'react-native';
import AsyncStorage from "@react-native-community/async-storage";

export const storeUserData = async (title, data) => {
  try {
    return await AsyncStorage.setItem(title, JSON.stringify(data))
  }
  catch(err){
    Alert.alert("Opps!", "Something went wrong.");
    console.log("Something went wrong.", err);
  }
}


export const getUserData = async (storageKey) => {
  try {
    const jsonValue = await AsyncStorage.getItem(storageKey)
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch(e) {
    // error reading value
    Alert.alert("Opps!", "Something went wrong.");
    console.log("Something went wrong", err);
  }
}

export const deleteData = async (title) => {
  try {
    await AsyncStorage.removeItem(title);
  } catch (err){
    Alert.alert("Opps!", "Something went wrong.");
    console.log("Something went wrong", err);
  }
}

export const catchApiRequestError = (error) => {
  console.log(error);
};


export const globalStyles = StyleSheet.create({
    bgPrimary: {
        backgroundColor: "#2196FF"
    },
    bgSecondary:{
        backgroundColor: "gold"
    },
    bgTransparent: {
        backgroundColor: "transparent"
    },
    textWhite:{
        color: "#fff"
    },
    textJustify: {
        textAlign: "justify"
      },
      textCenter: {
        textAlign: "center"
      },
      textBold: {
        fontWeight: "900"
      },
      textCenter: {
        textAlign: "center"
      },
      textDanger: {
        color: '#ff0000'
      },
      borderWhite: {
        borderColor: "#fff",
        borderStyle: "solid",
        borderWidth: 1
      },
      justifycenter: {
        justifyContent: "center"
      },
      justifySpaceAround: {
        justifyContent: "space-around"
      },
      alignCenter: {
        alignItems: "center"
      },
      centerCenter: {
        justifyContent: "center",
        alignItems: "center"
      },
      flexRow: {
        flexDirection: "row"
      },
      roundBorder: {
        borderRadius: 50
      },
      borderDanger: {
        borderColor: '#ff0000'
      }
});