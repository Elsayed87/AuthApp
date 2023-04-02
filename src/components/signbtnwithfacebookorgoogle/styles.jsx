import {StyleSheet} from 'react-native';
import COLORS from '../../const/Colors';
const styles = StyleSheet.create({
  imgstyle: {
    height: 25,
    width: 25,
  },
  twobtnText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: COLORS.dark,
  },
  twobtns: {
    flexDirection: 'row',

    marginTop: 30,
  },
  twobtnsStyles: {
    borderColor: COLORS.light,
    borderWidth: 1,
    flex: 1,
    backgroundColor: COLORS.white,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',

    flexDirection: 'row',
  },
  viewWidth: {
    width: 10,
  },
});
export default styles;
