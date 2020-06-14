import React from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import { Text } from '~/common/index';
import globalStyles from '~/styles/globalStyle';

import TextEditor from '~/container/TypePage/TextEditor/index';


function App() {
    return (
        <SafeAreaView flex={1}>
            <View style={styles.appContainer}>
                <Text weight='bold' style={styles.text}>
                    Write to forget
                </Text>
                <TextEditor />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        padding: globalStyles.gap.md,
    },
    text: {
        ...globalStyles.fontSize.lg,
        color: globalStyles.color.darkPurple,
    },
});

export default App;
