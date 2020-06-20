import React, { useState, useRef } from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import { Text, Button } from '~/common/index';
import DeleteIcon from '~/common/WtfIcon/DeleteIcon';
import RecycleIcon from '~/common/WtfIcon/RecycleIcon';
import AnonymousIcon from '~/common/WtfIcon/AnonymousIcon';
import globalStyles from '~/styles/globalStyle';

import TextEditor from '~/container/TypePage/TextEditor/index';
import AudioPlayer from '~/container/TypePage/AudioPlayer';


function App() {
    const [contentToForget, setContentToForget] = useState('');
    const inputRef = useRef(null);
    return (
        <SafeAreaView flex={1}>
            <View style={styles.appContainer}>
                <View style={styles.headerContainer}>
                    {/* <Logo /> */}
                    <View style={styles.credContainer}>
                        <AnonymousIcon color={globalStyles.color.gray500} />
                        <Text weight='bold' style={styles.credText}>
                            Anonymous
                        </Text>
                    </View>
                    <Button
                        onPress={() => {
                            setContentToForget('');
                            inputRef.current.blur();
                        }}
                        width={108}
                        height={40}
                    >
                        <DeleteIcon color={globalStyles.color.white} />
                        <Text weight='bold' style={styles.buttonText}>
                            Forget..
                        </Text>
                    </Button>
                </View>
                <View style={styles.bodyContainer}>
                    <TextEditor inputRef={inputRef} value={contentToForget} setValue={setContentToForget} />
                </View>
                {/* <View style={styles.footerContainer}>
                    <View style={styles.recycleContainer}>
                        <RecycleIcon color={globalStyles.color.darkPurple}/>
                        <Text style={styles.recycleText}>10</Text>
                    </View>
                    <AudioPlayer />
                </View> */}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        padding: globalStyles.gap.md,
        flex: 1,
        display: 'flex',
        justifyContent: 'space-between',
        // backgroundColor: '#ffe5cb',
    },
    headerContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    bodyContainer: {
        flex: 1,
    },
    footerContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    recycleContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    recycleText: {
        marginLeft: globalStyles.gap.sm,
        ...globalStyles.fontSize.md,
        color: globalStyles.color.darkPurple,
    },
    buttonText: {
        color: globalStyles.color.white,
        ...globalStyles.fontSize.md,
    },
    credText: {
        ...globalStyles.fontSize.md,
        color: globalStyles.color.gray500,
        marginLeft: globalStyles.gap.sm,
    },
    credContainer: {
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default App;
