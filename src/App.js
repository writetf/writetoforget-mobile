import React, { useState, useRef, useEffect } from 'react';
import {SafeAreaView, View, StyleSheet, StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { getUniqueId, getManufacturer, getPhoneNumber, getModel } from 'react-native-device-info';

import { Text, Button } from '~/common/index';
import DeleteIcon from '~/common/WtfIcon/DeleteIcon';
import RecycleIcon from '~/common/WtfIcon/RecycleIcon';
import AnonymousIcon from '~/common/WtfIcon/AnonymousIcon';
import globalStyles from '~/styles/globalStyle';

import TextEditor from '~/container/TypePage/TextEditor/index';

import AudioPlayer from '~/container/TypePage/AudioPlayer';
import { asyncTryCatchReq, api } from '~/util/request';




async function sendForgetToServer(content) {
    const uniqueId = getUniqueId();
    const phoneNumber = await getPhoneNumber();
    const manufacturer = await getManufacturer();
    const model = await getModel();
    const stringifiedDevice = JSON.stringify({
        uniqueId,
        phoneNumber,
        manufacturer,
        model,
    });
    asyncTryCatchReq({
        method: 'post',
        url: api.postForget,
        data: {
            data: content,
            device: stringifiedDevice,
        },
    }).then();
}


function App() {
    const [contentToForget, setContentToForget] = useState('');
    const inputRef = useRef(null);
    useEffect(() => {
        SplashScreen.hide();
        console.log('id may: ',getUniqueId(), );
        getManufacturer().then(rs => console.log(rs));
    }, []);
    return (
        <SafeAreaView flex={1}>
            <StatusBar
                barStyle='dark-content'
                backgroundColor={globalStyles.color.white} 
            />
            <View style={styles.appContainer}>
                <View style={styles.headerContainer}>
                    {/* <Logo /> */}
                    <View style={styles.credContainer}>
                        <AnonymousIcon color={globalStyles.color.gray500} />
                        <Text weight='bold' style={styles.credText}>
                            Anonymous
                        </Text>
                    </View>
                    {
                        (contentToForget.length > 10) && <Button
                        onPress={() => {
                            sendForgetToServer(contentToForget);
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
                    }
                </View>
                <View style={styles.bodyContainer}>
                    <TextEditor inputRef={inputRef} value={contentToForget} setValue={setContentToForget} />
                </View>
                <View style={styles.footerContainer}>
                    <View style={styles.recycleContainer}>
                        <RecycleIcon color={globalStyles.color.darkPurple}/>
                        <Text style={styles.recycleText}>10</Text>
                    </View>
                    <AudioPlayer />
                </View>
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
        backgroundColor: globalStyles.color.white,
    },
    headerContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 42,
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
