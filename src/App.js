import React from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import { Text, Button } from '~/common/index';
import globalStyles from '~/styles/globalStyle';

import TextEditor from '~/container/TypePage/TextEditor/index';


function App() {
    return (
        <SafeAreaView flex={1}>
            <View style={styles.appContainer}>
                <View style={styles.headerContainer}>
                    <Text weight='bold' style={styles.text}>
                        Write to forget
                    </Text>
                    <Button width={108} height={40}>
                        <Text weight='bold' style={styles.buttonText}>
                            Forget..
                        </Text>
                    </Button>
                </View>
                <TextEditor />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        padding: globalStyles.gap.md,
    },
    headerContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    buttonText: {
        color: globalStyles.color.white,
        ...globalStyles.fontSize.md,
    },
    text: {
        ...globalStyles.fontSize.lg,
        color: globalStyles.color.darkPurple,
    },
});

export default App;
