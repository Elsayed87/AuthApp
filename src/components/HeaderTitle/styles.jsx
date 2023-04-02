import {StyleSheet} from 'react-native';
import COLORS from '../../const/Colors';
const styles = StyleSheet.create({
    headerTittle: {
        flexDirection: 'row',
        marginTop: 30,
      },
      blackText: {
        color: COLORS.dark,
        fontSize: 20,
        fontWeight: 'bold',
      },
      blueText: {
        color: COLORS.secondary,
        fontSize: 20,
        fontWeight: 'bold',
      },

});
export default styles;
