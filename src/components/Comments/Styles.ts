import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';
import fonts from '../../themes/fonts';

export const styles = StyleSheet.create({
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  middleColumn: {
    flex: 1,
  },
  avatar: {
    height: 40,
    aspectRatio: 1,
    borderRadius: 20,
    marginRight: 10,
  },
  icon: {
    marginHorizontal: 5,
  },
  text: {
    color: colors.black,
    lineHeight: 18,
  },
  bold: {
    fontWeight: fonts.weight.bold,
  },
  commentText: {
    // flex: 1,
    color: colors.black,
    lineHeight: 18,

  },
  footer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  footerText: {
    marginRight: 10,
  },
});
