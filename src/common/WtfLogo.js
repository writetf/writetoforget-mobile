import React from 'react';
import { View, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import LogoImageSource from './img/logo.png';
import globalStyle from '~/styles/globalStyle';

function WtfLogo({
    onPress,
}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logoImage}
                    source={LogoImageSource}
                />
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    logoImage: {
        height: 36,
        width: 36,
    },
    logoContainer: {
        borderRadius: 18,
        backgroundColor: globalStyle.color.text,
    },
});

export default WtfLogo;
