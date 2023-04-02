import {StyleSheet} from 'react-native';
import COLORS from '../../const/Colors';

const styles = StyleSheet.create({
  pinkText: {
    color: COLORS.pink,
    fontSize: 15,
    fontWeight: 'bold',
  },
  grayText: {
    color: COLORS.light,
    fontSize: 15,
    fontWeight: 'bold',
  },
  lastSection: {
    flexDirection: 'row',
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default styles;
