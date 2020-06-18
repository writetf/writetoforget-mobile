import React, { useState } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import SoundWaveIcon from '~/common/WtfIcon/SoundWaveIcon';
import PlayIcon from '~/common/WtfIcon/PlayIcon';
import { Text } from '~/common/index';
import globalStyles from '~/styles/globalStyle';


function AudioPlayer() {
    const [playing, setPlaying] = useState(false);
    const playerColor = playing ? globalStyles.color.darkPurple : globalStyles.color.gray500;
    return (
        <TouchableWithoutFeedback
            onPress={() => setPlaying(!playing)}
        >
            <View style={styles.audioPlayerContainer}>
                <PlayIcon
                    color={playerColor}
                />
                <Text style={styles.trackText(playerColor)}>
                    Kiss the rain..
                </Text>
                <SoundWaveIcon
                    color={playerColor}
                />
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    audioPlayerContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    trackText: (playerColor) => ({
        ...globalStyles.fontSize.sm,
        marginHorizontal: globalStyles.gap.sm,
        color: playerColor,
    }),
});

export default AudioPlayer;
