import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const OrWithHorizontalLine = () => {
  return (
    <View style={styles.headerTittle1}>
      <View style={styles.lineseparation} />

      <Text style={styles.orText}>OR</Text>

      <View style={styles.lineseparation} />
    </View>
  );
};
export default OrWithHorizontalLine;
