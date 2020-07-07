import React from 'react';
import { StyleSheet, View } from 'react-native';
import globalStyles, {deviceHeight, deviceWidth} from '~/styles/globalStyle';

function Modal({ modal }) {
    const {
        isVisible,
        modalContent,
    } = modal;

    if (!isVisible) {
        return null;
    }
    return (
        <View
            style={styles.modalOverlay(isVisible)}
        >
            {modalContent}
        </View>
    );
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
}
);

export default Modal;

