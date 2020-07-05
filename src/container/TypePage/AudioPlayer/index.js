import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import SoundWaveIcon from '~/common/WtfIcon/SoundWaveIcon';
import PauseIcon  from '~/common/WtfIcon/PauseIcon';
import PlayIcon from '~/common/WtfIcon/PlayIcon';
import { Text } from '~/common/index';
import globalStyles from '~/styles/globalStyle';
import Sound from 'react-native-sound';

Sound.setCategory('Playback');


function AudioPlayer() {
    const [playing, setPlaying] = useState(true);
    const [playback, setPlayback] = useState(null);
    const playerColor = playing ? globalStyles.color.darkPurple : globalStyles.color.gray500;

    useEffect(() => {
        const backgroundMusic = new Sound('background_music.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
              console.log('failed to load the sound', error);
              return;
            }
            backgroundMusic.setNumberOfLoops(-1);
            backgroundMusic.play((success) => {
                if (success) {
                  console.log('successfully finished playing');
                } else {
                  console.log('playback failed due to audio decoding errors: ');
                }
              });
            setPlayback(backgroundMusic);
        });
        return () => {
            if (backgroundMusic) {
                backgroundMusic.stop();
            }
        };
    }, []);

    return (
        <TouchableWithoutFeedback
            onPress={() => {
                if (playing) {
                    setPlaying(false);
                    playback.pause();
                } else {
                    setPlaying(true);
                    playback.play();
                }
            }}
        >
            <View style={styles.audioPlayerContainer}>
                {
                    playing ? <PlayIcon
                    color={playerColor}
                    /> : <PauseIcon
                        color={playerColor}
                    />
                }

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
        ...globalStyles.fontSize.md,
        marginHorizontal: globalStyles.gap.xs,
        color: playerColor,
    }),
});

export default AudioPlayer;
