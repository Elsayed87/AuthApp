import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const HeaderTitle = () => {
  return (
    <View style={styles.headerTittle}>
      <Text style={styles.blackText}>FOX</Text>
      <Text style={styles.blueText}>HUB</Text>
    </View>
  );
};
export default HeaderTitle;
