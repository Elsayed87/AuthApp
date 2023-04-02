import {SafeAreaView} from 'react-native';
import styles from './styles';
import AppButton from '../../components/appButton/AppButton';
import RowText from '../../components/twoTextWithpress/RowText';
import {useNavigation} from '@react-navigation/native';
import HeaderTitle from '../../components/HeaderTitle/HeaderTitle';
import WelcomeMessage from '../../components/WelcomeMessage/WelcomeMessage';
import AppTextInput from '../../components/input/TextInput';
import OrWithHorizontalLine from '../../components/ORSepartion/OrSplit';
import SignWithFaceBookOrGoogle from '../../components/signbtnwithfacebookorgoogle/SignWithFacebookOrGoggle';

const SignInScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.mainContainer}>
      <HeaderTitle />
      <WelcomeMessage messagecontent="Sign In to Continue" />
      <AppTextInput iconName="mail-outline" placeholderName="Email" />
      <AppTextInput iconName="lock-outline" placeholderName="Password" />
      <AppButton name="Sign In " />
      <OrWithHorizontalLine />
      <SignWithFaceBookOrGoogle FaceName="Sign In With"  GoogleName=" Sign In With" />
      <RowText
        nameTextOne="Don't have an account? "
        nameTextTwo="Sign up"
        onPress={() => {
          navigation.navigate('Sign up page');
        }}
      />
    </SafeAreaView>
  );
};
export default SignInScreen;
