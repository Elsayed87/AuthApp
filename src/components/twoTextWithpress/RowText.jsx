import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const RowText = props => {
  const navigation = useNavigation();
  return (
    
    <View style={styles.lastSection}>
    <Text style={styles.grayText}>{(rowOne=props.nameTextOne)}</Text>
    <TouchableOpacity  onPress={props.onPress}> 
    <Text style={styles.pinkText}>{(rowTwo=props.nameTextTwo)}</Text>
    </TouchableOpacity>
 
  </View>
  
  );
};
export default RowText;


//  <View style={styles.btn}>
// <TouchableOpacity onPress={() => navigation.navigate('Sign up page')}>
//   <Text style={styles.btnText}>{(name = props.name)}</Text>
// </TouchableOpacity>
// </View>
