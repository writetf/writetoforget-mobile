import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { View, StyleSheet, StatusBar } from 'react-native';
import moment from 'moment';
import AnonymousIcon from '~/common/WtfIcon/AnonymousIcon';
import { Text, Logo } from '~/common/index';
import globalStyles, { deviceHeight } from '~/styles/globalStyle';
import { ScrollView } from 'react-native-gesture-handler';

function parsePostsFromLocalStorage() {
    return AsyncStorage.getItem('@storage_posts').then(stringifiedPostsArr => {
        if (stringifiedPostsArr) {
            const stringifiedPosts = stringifiedPostsArr.split('~~~');
            const jsonPosts = stringifiedPosts.map(jsonPost => JSON.parse(jsonPost));
            return jsonPosts.filter(jsonPost => !!jsonPost);
        }
    });
}

function TrashThought({
    navigation,
}) {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        parsePostsFromLocalStorage().then(storagePosts => setPosts(storagePosts));
    }, []);
    return (
        <View style={styles.trashThoughtContainer} flex={1}>
            <View style={styles.headerContainer}>
                <View style={styles.credContainer}>
                    <AnonymousIcon color={globalStyles.color.gray500} />
                    <Text weight='bold' style={styles.credText}>
                        Anonymous
                    </Text>
                </View>
                <Logo onPress={() => navigation.navigate('Type')}/>
            </View>
            <ScrollView contentContainerStyle={styles.listContainer} flex={1}>
                <StatusBar
                    barStyle='dark-content'
                    backgroundColor={globalStyles.color.white}
                />
                {posts.map(post => {
                    return (
                        renderPost(post)
                    );
                })}

            </ScrollView>

        </View>
    );
}

function renderPost(post) {
    return (
        <View key={post.id} style={styles.postContainer}>
            <Text style={styles.contentText}>
                {post.content}
            </Text>
            <Text weight='bold' style={styles.datetimeText}>
                {moment(post.id).calendar()}
            </Text>

        </View>
    );
}

const styles = StyleSheet.create({
    trashThoughtContainer: {
        padding: globalStyles.gap.md,
        backgroundColor: globalStyles.color.white,
    },
    listContainer: {
        paddingBottom: deviceHeight / 5,
        display: 'flex',
        flexDirection: 'column-reverse',
    },
    postContainer: {
        marginBottom: globalStyles.gap.md,
        marginLeft: globalStyles.gap.sm,
        display: 'flex',
    },
    contentText: {
        ...globalStyles.fontSize.md,
    },
    datetimeText: {
        ...globalStyles.fontSize.sm,
        color: globalStyles.color.gray500,
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
    headerContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 42,
    },
});

export default TrashThought;
