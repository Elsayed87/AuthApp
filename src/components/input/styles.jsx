import {StyleSheet} from 'react-native';
import COLORS from '../../const/Colors';

const styles = StyleSheet.create({
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    backgroundColor: COLORS.light,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginTop: 30,
  },
  iconStyle: {
    paddingRight: 10,
    color: COLORS.dark,
  },
  inputText: {
    flex: 1,

    fontSize: 16,
  },
});
export default styles;
