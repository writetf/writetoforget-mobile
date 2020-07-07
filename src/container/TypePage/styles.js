import { StyleSheet } from 'react-native';
import globalStyles, {deviceHeight, deviceWidth} from '~/styles/globalStyle';

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
    forgetModalContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: globalStyles.color.white,
        borderRadius: globalStyles.borderRadius,
        height: deviceHeight / 3,
        margin: globalStyles.gap.md,
        padding: globalStyles.gap.lg,
        opacity: 1,
    },
    ratingModalContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: globalStyles.color.white,
        borderRadius: globalStyles.borderRadius,
        height: deviceHeight / 5,
        width: deviceWidth * 0.75,
        margin: globalStyles.gap.md,
        padding: globalStyles.gap.md,
        opacity: 1,
    },
    exitRatingText: {
        marginRight: globalStyles.gap.md,
    },
    ratingtModalButtonText: {
        color: globalStyles.color.white,
    },
    rateModalText: {
        ...globalStyles.fontSize.md,
    },
    ratingModalFooter: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: '100%',
        padding: globalStyles.gap.sm,
    },
    forgetModalButton: {
        marginTop: globalStyles.gap.md,
    },
    forgetModalButtonText: {
        color: globalStyles.color.white,
    },
});

export default styles;