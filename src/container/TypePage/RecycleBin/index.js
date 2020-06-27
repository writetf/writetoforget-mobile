import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import globalStyles from '~/styles/globalStyle';
import RecycleIcon from '~/common/WtfIcon/RecycleIcon';
import { Text } from '~/common/index';

function RecycleBin({
    postNumber,
    onPress,
}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.recycleContainer}>
                <RecycleIcon color={globalStyles.color.darkPurple}/>
                <Text style={styles.recycleText}>{postNumber}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
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
});

export default RecycleBin;
