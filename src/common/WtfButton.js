import React from 'react';
import { TouchableWithoutFeedback, View, StyleSheet } from 'react-native';

import globalStyles from '~/styles/globalStyle';

function WtfButton({ children, width, height, onPress }) {
    const [isBeingPressed, setIsBeingPressed] = React.useState(false);
    return (
        <TouchableWithoutFeedback
            onPress={onPress}
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
const borderRadius = globalStyles.borderRadius;
const styles = StyleSheet.create({
    buttonContainer: ({ width, height }) => ({
        position: 'relative',
        width,
        height,
    }),
    primaryContainer: ({ width, height, isBeingPressed }) => ({
        position: 'absolute',
        top: isBeingPressed ? globalStyles.gap.xss : 0,
        left: 0,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: globalStyles.color.lightPurple,
        borderRadius,
        width,
        height,
    }),
    rearShadow: ({ width, height }) => ({
        position: 'absolute',
        borderRadius,
        top: globalStyles.gap.xs,
        left: 0,
        backgroundColor: globalStyles.color.darkPurple,
        width,
        height,
    }),
});

export default WtfButton;


