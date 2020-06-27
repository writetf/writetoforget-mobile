import React, { useState, useRef, useEffect } from 'react';
import {SafeAreaView, View, StyleSheet, StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { getUniqueId, getManufacturer, getPhoneNumber, getModel } from 'react-native-device-info';
import AsyncStorage from '@react-native-community/async-storage';

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

function parsePostsFromLocalStorage() {
    return AsyncStorage.getItem('@storage_posts').then(stringifiedPostsArr => {
        if (stringifiedPostsArr) {
            const stringifiedPosts = stringifiedPostsArr.split('~~~');
            const jsonPosts = stringifiedPosts.map(jsonPost => JSON.parse(jsonPost));
            return jsonPosts.filter(jsonPost => !!jsonPost);
        }
    });
}

function TypePage() {
    const [contentToForget, setContentToForget] = useState('');
    const [postNumber, setPostNumber] = useState(0);
    const [posts, setPosts] = useState([]);

    const inputRef = useRef(null);
    useEffect(() => {
        SplashScreen.hide();
        AsyncStorage.getItem('@storage_post_number').then(storagePostNumber => {
            if (isNaN(Number(storagePostNumber))) {
                AsyncStorage.setItem('@storage_post_number', '0');
            }
            if (storagePostNumber) {
                setPostNumber(Number(storagePostNumber));
            }
        });

        parsePostsFromLocalStorage().then(storagePosts => setPosts(storagePosts));
    }, []);

    return (
    <View style={styles.appContainer}>
        <StatusBar
            barStyle='dark-content'
            backgroundColor={globalStyles.color.white}
        />
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
                onPress={async () => {
                    sendForgetToServer(contentToForget);
                    setPostNumber(postNumber + 1);
                    AsyncStorage.setItem('@storage_post_number', (postNumber + 1).toString());
                    const postsStorage = await AsyncStorage.getItem('@storage_posts');
                    const postToSave = {
                        id: Date.now(),
                        deviceId: getUniqueId(),
                        content: contentToForget,
                    };
                    AsyncStorage
                        .setItem('@storage_posts', postsStorage + '~~~' + JSON.stringify(postToSave))
                        .then(async () => {
                            setPosts(await parsePostsFromLocalStorage());
                        });
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
                <Text style={styles.recycleText}>{postNumber}</Text>
            </View>
            <AudioPlayer />
        </View>
    </View>
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

export default TypePage;
