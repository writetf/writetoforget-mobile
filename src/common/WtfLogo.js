import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import LogoImageSource from './img/logo.png';
import globalStyle from '~/styles/globalStyle';

function WtfLogo() {
    return (
        <View style={styles.logoContainer}>
            <Image
                style={styles.logoImage}
                source={LogoImageSource}
            />
        </View>
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
