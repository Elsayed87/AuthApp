import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

const SignWithFaceBookOrGoogle = props => {
  return (
    <View style={styles.twobtns}>
      <View style={styles.twobtnsStyles}>
        <Text style={styles.twobtnText}>{(name = props.FaceName)} </Text>
        <Image
          source={require('../../assets/imgs/facebook.png')}
          style={styles.imgstyle}
        />
      </View>

      <View style={styles.viewWidth} />

      <View style={styles.twobtnsStyles}>
        <Text style={styles.twobtnText}>{(name = props.GoogleName)} </Text>
        <Image
          source={require('../../assets/imgs/google.png')}
          style={styles.imgstyle}
        />
      </View>
    </View>
  );
};
export default SignWithFaceBookOrGoogle;
