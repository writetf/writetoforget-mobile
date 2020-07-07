import React, { useState, useRef, useEffect } from 'react';
import { View, StatusBar, BackHandler, TouchableWithoutFeedback} from 'react-native';
import { getUniqueId } from 'react-native-device-info';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import CryptoJS from 'react-native-crypto-js';
import Rate, { AndroidMarket } from 'react-native-rate';

import { Text, Button } from '~/common/index';
import DeleteIcon from '~/common/WtfIcon/DeleteIcon';
import AnonymousIcon from '~/common/WtfIcon/AnonymousIcon';

import globalStyles from '~/styles/globalStyle';

import checkIsSubscribed from '~/util/checkIsSubscribed';
import CheckedIcon from '~/common/WtfIcon/CheckedIcon';
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
        setModal,
    } = props;
    const [contentToForget, setContentToForget] = useState('');
    const [postNumber, setPostNumber] = useState(0);

    const inputRef = useRef(null);

    useFocusEffect(
        React.useCallback(() => {
            function renderRatingModal() {
                return (
                    <View style={styles.ratingModalContainer}>
                        <Text style={styles.rateModalText}>
                            Would you like to rate our app?
                        </Text>
                        <View style={styles.ratingModalFooter}>
                            <TouchableWithoutFeedback
                                onPress={() => {
                                    BackHandler.exitApp();
                                }}
                            >
                                <View>
                                    <Text weight='medium' style={styles.exitRatingText}>
                                        Exit
                                    </Text>
                                </View>
                            </TouchableWithoutFeedback>
                            <Button
                                onPress={() => {
                                    const options = {
                                        GooglePackageName:'com.writetf.writetoforget',
                                        preferredAndroidMarket: AndroidMarket.Google,
                                        preferInApp:false,
                                        openAppStoreIfInAppFails:true,
                                        fallbackPlatformURL: 'https://play.google.com/store/apps/details?id=com.writetf.writetoforget',
                                    };
                                    Rate.rate(options);
                                    setModal({
                                        isVisible: false,
                                    });
                                }}
                                style={styles.modalButton}
                                width={81}
                                height={40}
                            >
                                <Text style={styles.ratingtModalButtonText} weight='bold'>
                                    Rate
                                </Text>
                            </Button>
                        </View>
                    </View>);
            }
            const onBackPress = () => {
                setModal({
                    isVisible: true,
                    modalContent: renderRatingModal(),
                });
                return true;
            };
          BackHandler.addEventListener('hardwareBackPress', onBackPress);
          return () =>
            BackHandler.removeEventListener('hardwareBackPress', onBackPress);
        }, [setModal])
      );
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

    function renderForgetModal() {
        return (
        <View style={styles.forgetModalContainer}>
            <CheckedIcon height={64} width={64} color={globalStyles.color.lightPurple} />
            <Text>Congratulations on successfully deleting what you don't want to remember.</Text>
            <Button
                onPress={() => setModal({
                    isVisible: false,
                })}
                style={styles.forgetModalButton}
                width={81}
                height={40}
            >
                <Text style={styles.forgetModalButtonText} weight='bold'>
                    Got it!
                </Text>
            </Button>
        </View>);
    }

    async function handleForgetButton() {
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
        setTimeout(() => {
            setModal({
                isVisible: true,
                modalContent: renderForgetModal(),
            });
        }, 350);
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
