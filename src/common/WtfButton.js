import React from 'react';
import { TouchableWithoutFeedback, View, StyleSheet } from 'react-native';

import globalStyles from '~/styles/globalStyle';

function WtfButton({ children, width, height }) {
    const [isBeingPressed, setIsBeingPressed] = React.useState(false);
    return (
        <TouchableWithoutFeedback
            onPressIn={
                () => setIsBeingPressed(true)
            }
            onPressOut={
                () => setIsBeingPressed(false)
            }

        >
            <View style={styles.buttonContainer({ width, height })}>
                <View style={styles.rearShadow({ width, height })} />
                <View style={styles.primaryContainer({ width, height, isBeingPressed })}>
                    {children}
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    buttonContainer: ({ width, height }) => ({
        position: 'relative',
        width,
        height,
    }),
    primaryContainer: ({ width, height, isBeingPressed }) => ({
        position: 'absolute',
        top: isBeingPressed ? 2 : 0,
        left: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: globalStyles.color.lightPurple,
        borderRadius: 4,
        width,
        height,
    }),
    rearShadow: ({ width, height }) => ({
        position: 'absolute',
        borderRadius: 4,
        top: 4,
        left: 0,
        backgroundColor: globalStyles.color.darkPurple,
        width,
        height,
    }),
});

export default WtfButton;


