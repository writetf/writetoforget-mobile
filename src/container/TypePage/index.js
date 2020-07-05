import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, StatusBar} from 'react-native';
import { getUniqueId, getManufacturer, getPhoneNumber, getModel } from 'react-native-device-info';
import AsyncStorage from '@react-native-community/async-storage';

import { Text, Button } from '~/common/index';
import DeleteIcon from '~/common/WtfIcon/DeleteIcon';
import AnonymousIcon from '~/common/WtfIcon/AnonymousIcon';
import globalStyles from '~/styles/globalStyle';

import checkIsSubscribed from '~/util/checkIsSubscribed';
import { asyncTryCatchReq, api } from '~/util/request';
import TextEditor from './TextEditor/index';
import AudioPlayer from './AudioPlayer';
import RecycleBin from './RecycleBin';

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

function TypePage({
    navigation,
}) {
    const [contentToForget, setContentToForget] = useState('');
    const [postNumber, setPostNumber] = useState(0);

    const inputRef = useRef(null);
    useEffect(() => {
        AsyncStorage.getItem('@storage_post_number').then(storagePostNumber => {
            if (isNaN(Number(storagePostNumber))) {
                AsyncStorage.setItem('@storage_post_number', '0');
            }
            if (storagePostNumber) {
                setPostNumber(Number(storagePostNumber));
            }
        });

        parsePostsFromLocalStorage().then();
    }, []);

    return (
    <View style={styles.appContainer}>
        <StatusBar
            barStyle='dark-content'
            backgroundColor={globalStyles.color.white}
        />
        <View style={styles.headerContainer}>
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
                        content: contentToForget.trim(),
                    };
                    AsyncStorage
                        .setItem('@storage_posts', postsStorage + '~~~' + JSON.stringify(postToSave))
                        .then();
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
            <RecycleBin
                postNumber={postNumber}
                onPress={async () => {
                    const isSubscribed = await checkIsSubscribed();
                    if (!isSubscribed) {
                        navigation.navigate('Stateful');
                    } else {
                        navigation.navigate('Trash');
                    }
                }}
            />
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
