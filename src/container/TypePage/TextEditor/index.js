import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import globalStyles, { deviceHeight } from '~/styles/globalStyle';
import { Text } from '~/common/index';

function TextEditor() {
    const [value, setValue] = useState('');
    const [isEmpty, setIsEmpty] = useState(true);
    return (
        <View style={styles.textEditorContainer}>
            <TextInput
                value={value}
                autoFocus={true}
                selectionColor={globalStyles.color.text}
                multiline
                autoCorrect={false}
                numberOfLines={3}
                onChange={e => {
                    setIsEmpty(e.nativeEvent.text.length === 0);
                    setValue(e.nativeEvent.text);
                }}
                style={[
                    styles.textInput,
                    ...isEmpty ? [styles.placeholderStyle] : [],
                ]}
            />
            <Text style={styles.placeholderStyle(isEmpty)} weight='light'>
                What is on your mind right now?
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    textEditorContainer: {
        display: 'flex',
        flexDirection: 'column-reverse',
        height: deviceHeight / 3,
    },
    textInput: {
        paddingBottom: 0,
        color: globalStyles.color.text,
        display: 'flex',
        justifyContent: 'flex-end',
        fontFamily: 'Quicksand-Medium',
        ...globalStyles.fontSize.lg,
        textAlignVertical: 'bottom',
    },
    placeholderStyle: (isEmpty) => {
        return ({
            position: 'absolute',
            ...globalStyles.fontSize.lg,
            color: globalStyles.color.gray500,
            marginLeft: globalStyles.gap.sm,
            ...!isEmpty ? {
                opacity: 0,
            } : {},
        });
    },
});

export default TextEditor;

