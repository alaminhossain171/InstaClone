import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';
import fonts from '../../themes/fonts';

export const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.border,
    padding: 5,
    borderRadius: 5,
    alignItems: 'center',
    flex: 1,
    margin: 5,
  },
  text: {
    color: colors.black,
    fontWeight: fonts.weight.semi,
  },
});
