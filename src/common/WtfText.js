import React from 'react';
import { Text, StyleSheet } from 'react-native';
import globalStyles from '~/styles/globalStyle';

function WtfText({
    weight = 'medium',
    style,
    children,
}) {
    return (
        <Text
            style={[styles.defaultColor, style, styles[weight]]}
        >
            {children}
        </Text>
    );
}

const styles = StyleSheet.create({
    bold: {
        fontFamily: 'Quicksand-Bold',
    },
    regular: {
        fontFamily: 'Quicksand-Regular',
    },
    light: {
        fontFamily: 'Quicksand-Light',
    },
    medium: {
        fontFamily: 'Quicksand-Medium',
    },
    semiBold: {
        fontFamily: 'Quicksand-SemiBold',
    },
    defaultColor: {
        color: globalStyles.color.text,
    },
});

export default WtfText;

