import { StyleSheet } from 'react-native'
import colors from '../../themes/colors'
import fonts from '../../themes/fonts'


export const styles = StyleSheet.create({
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
        flex: 1,
        color: colors.black,
        lineHeight: 18,
      },
      comment: {
        flexDirection: 'row',
        alignItems: 'center',
      },
})