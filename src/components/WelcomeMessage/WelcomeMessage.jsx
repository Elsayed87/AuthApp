import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import styles from './styles';


const WelcomeMessage = props => {

  return (
    <View style={styles.secondPart}>
    <Text style={styles.blackText}>Welcome Back,</Text>
    <Text style={styles.grayText}>{name=props.messagecontent}</Text>
  </View>
  
  );
};
export default WelcomeMessage;
