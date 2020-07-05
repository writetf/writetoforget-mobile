import { StyleSheet } from 'react-native';
import globalStyles, {deviceHeight} from '~/styles/globalStyle';

const styles = StyleSheet.create({
    appContainer: {
        padding: globalStyles.gap.md,
        flex: 1,
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: globalStyles.color.white,
    },
    modalLayout: {
        position: 'absolute',
        flex: 1,
        height: deviceHeight,
        backgroundColor: globalStyles.color.text,
        opacity: 0.8,
    },
    modalContainer: (modalVisible) => ({
        opacity: modalVisible ? 1 : 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: globalStyles.borderRadius,
        height: deviceHeight / 3,
        margin: globalStyles.gap.md,
        padding: globalStyles.gap.lg,
    }),
    headerContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 42,
    },
    bodyContainer: {
        flex: 1,
    },
    footerContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    buttonText: {
        color: globalStyles.color.white,
        ...globalStyles.fontSize.md,
    },
    credText: {
        ...globalStyles.fontSize.md,
        color: globalStyles.color.gray500,
        marginLeft: globalStyles.gap.sm,
    },
    credContainer: {
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default styles;