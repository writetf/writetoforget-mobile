import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Animated } from 'react-native';
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
    const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

    React.useEffect(() => {
        function recursive() {
            fadeAnim.setValue(0);
            Animated.timing(
                fadeAnim,
                {
                    toValue: 1,
                    duration: 5000,
                    useNativeDriver: true,
                }
                ).start(() => recursive());
        }
        recursive();
    }, []);

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
                    fadeAnim.setValue(0);
                    playback.play();
                }
            }}
        >
            <View style={styles.audioPlayerContainer}>
                {
                    playing ? <PauseIcon
                    color={playerColor}
                    /> : <PlayIcon
                        color={playerColor}
                    />
                }
                <View
                    style={{
                        overflow: 'hidden',
                    }}
                >
                    <Animated.View
                        style={{
                            transform: [
                                {translateX: playing ? fadeAnim.interpolate({
                                        inputRange: [0, 0.5, 1],
                                        outputRange: [-50, 50, -50],
                                }) : 0},
                            ],
                            // opacity: fadeAnim,         // Bind opacity to animated value
                        }}
                    >
                        <Text style={styles.trackText(playerColor)}>
                            Kiss the rain..
                        </Text>
                    </Animated.View>
                </View>


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
