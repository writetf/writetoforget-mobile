import React, { useState, useRef, useEffect } from 'react';
import { View, StatusBar} from 'react-native';
import { getUniqueId } from 'react-native-device-info';
import AsyncStorage from '@react-native-community/async-storage';
import CryptoJS from 'react-native-crypto-js';

import { Text, Button } from '~/common/index';
import DeleteIcon from '~/common/WtfIcon/DeleteIcon';
import AnonymousIcon from '~/common/WtfIcon/AnonymousIcon';

import globalStyles from '~/styles/globalStyle';

import checkIsSubscribed from '~/util/checkIsSubscribed';
import TextEditor from './TextEditor/index';
import AudioPlayer from './AudioPlayer';
import RecycleBin from './RecycleBin';
import styles from './styles';
import { sendForgetToServer } from './services';



function parsePostsFromLocalStorage() {
    return AsyncStorage.getItem('@storage_posts').then(stringifiedPostsArr => {
        if (stringifiedPostsArr) {
            const stringifiedPosts = stringifiedPostsArr.split('~~~');
            const jsonPosts = stringifiedPosts.map(jsonPost => JSON.parse(jsonPost));
            return jsonPosts.filter(jsonPost => !!jsonPost);
        }
    });
}

function TypePage(props) {
    const {
        navigation,
        setModalVisible,
    } = props;
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

    async function handleForgetButton() {
        setModalVisible(true);
        sendForgetToServer(CryptoJS.MD5(contentToForget).toString());
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
    }

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
                (contentToForget.length > 10) &&
                <Button
                    onPress={handleForgetButton}
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

export default TypePage;
