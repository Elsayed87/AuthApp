import {Rect} from 'react';
import {SafeAreaView, View, Text, TextInput, Image} from 'react-native';
import styles from './styles';
import AppButton from '../../components/appButton/AppButton';
import RowText from '../../components/twoTextWithpress/RowText';
import {useNavigation} from '@react-navigation/native';
import HeaderTitle from '../../components/HeaderTitle/HeaderTitle';
import WelcomeMessage from '../../components/WelcomeMessage/WelcomeMessage';
import AppTextInput from '../../components/input/TextInput';
import OrWithHorizontalLine from '../../components/ORSepartion/OrSplit';
import SignWithFaceBookOrGoogle from '../../components/signbtnwithfacebookorgoogle/SignWithFacebookOrGoggle';

const SignUpScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.mainContainer}>
      <HeaderTitle />
      <WelcomeMessage messagecontent="Sign up to Continue" />
      <AppTextInput iconName="person-outline" placeholderName="Name" />
      <AppTextInput iconName="mail-outline" placeholderName="Email" />
      <AppTextInput iconName="lock-outline" placeholderName="Password" />
      <AppButton name="Sign up" />
      <OrWithHorizontalLine />
      <SignWithFaceBookOrGoogle
        FaceName="Sign up With"
        GoogleName=" Sign up With"
      />
      <RowText
        nameTextOne="Already have an account? "
        nameTextTwo="Sign In"
        onPress={() => {
          navigation.navigate('login page');
        }}
      />
    </SafeAreaView>
  );
};
export default SignUpScreen;
