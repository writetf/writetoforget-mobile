import React from 'react';
import { Text, StyleSheet } from 'react-native';

function WtfText({
    weight = 'medium',
    style,
    children,
}) {
    return (
        <Text
            style={[style, styles[weight]]}
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
});

export default WtfText;

