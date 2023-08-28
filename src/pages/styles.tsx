import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../src/utils/colors';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },

    font: {
        color: colors.black
    },

    icon: {
        width: '15%',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default styles;