import {StyleSheet} from 'react-native';
import COLORS from '../../const/Colors';
const styles = StyleSheet.create({
  btn: {
    backgroundColor: COLORS.primary,
    height: 50,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  btnText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
export default styles;
