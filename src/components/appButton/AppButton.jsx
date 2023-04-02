import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const AppButton = props => {
  const navigation = useNavigation();
  return (
    <View style={styles.btn}>
      <TouchableOpacity onPress={() => navigation.navigate('Sign up page')}>
        <Text style={styles.btnText}>{(name = props.name)}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default AppButton;
