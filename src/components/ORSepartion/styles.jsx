import {StyleSheet} from 'react-native';
import COLORS from '../../const/Colors';
const styles = StyleSheet.create({
  lineseparation: {
    height: 2,
    backgroundColor: COLORS.light,

    width: 30,
  },
  headerTittle1: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  orText: {
    color: COLORS.dark,
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 5,
  },
});
export default styles;
