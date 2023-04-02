import React from 'react';
import {TouchableOpacity, View, Text,TextInput} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../const/Colors';

const AppTextInput = props => {
  return (
    <View style={styles.input}>
      <Icon name={props.iconName} size={22} style={styles.iconStyle} />
      <TextInput
        placeholder={props.placeholderName}
        style={styles.inputText}
        placeholderTextColor={COLORS.dark}
      />
    </View>
  );
};
export default AppTextInput;
//
