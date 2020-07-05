import React from 'react';
import { StyleSheet, View } from 'react-native';
import globalStyles, {deviceHeight, deviceWidth} from '~/styles/globalStyle';
import CheckedIcon from '~/common/WtfIcon/CheckedIcon';

import { Text, Button } from '~/common/index';

function Modal({ isVisible, setModalVisible }) {
    if (!isVisible) {
        return null;
    }
    return (
        <View
            style={styles.modalOverlay(isVisible)}
        >
            {renderConfirmModal({setModalVisible})}
        </View>
    );
}

function renderConfirmModal({setModalVisible}) {
    return (
    <View style={styles.confimModalContainer}>

        <CheckedIcon height={64} width={64} color={globalStyles.color.lightPurple} />
        <Text>Congratulations on successfully deleting what you don't want to remember.</Text>
        <Button
            onPress={() => setModalVisible(false)}
            style={styles.modalButton}
            width={81}
            height={40}
        >
            <Text style={styles.modalButtonText} weight='bold'>
                Got it!
            </Text>
        </Button>
    </View>);
}

const styles = StyleSheet.create({
        modalOverlay: isVisible => ({
        display: isVisible ? 'flex' : 'none',
        position: 'absolute',
        zIndex: 1,
        flex: 1,
        height: deviceHeight,
        width: deviceWidth,
        backgroundColor: globalStyles.color.modalOverlay,
        alignItems: 'center',

        justifyContent: 'center',
    }),
    confimModalContainer: {
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
    modalButton: {
        marginTop: globalStyles.gap.md,
    },
    modalButtonText: {
        color: globalStyles.color.white,
    },
}
);

export default Modal;

