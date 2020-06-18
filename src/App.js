import React from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import { Text, Button } from '~/common/index';
import DeleteIcon from '~/common/WtfIcon/DeleteIcon';
import RecycleIcon from '~/common/WtfIcon/RecycleIcon';
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
                        <DeleteIcon color={globalStyles.color.white} />
                        <Text weight='bold' style={styles.buttonText}>
                            Forget..
                        </Text>
                    </Button>
                </View>
                <View style={styles.bodyContainer}>
                    <TextEditor />
                </View>
                <View style={styles.footerContainer}>
                    <Text>
                        The footer
                    </Text>
                    <RecycleIcon color={globalStyles.color.darkPurple}/>
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
