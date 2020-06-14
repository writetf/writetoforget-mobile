import { Dimensions } from 'react-native';

export const deviceWidth = Dimensions.get('window').width;
export const deviceHeight = Dimensions.get('window').height;


export default {
    fontSize: {
        sm: {
            fontSize: 15,
            lineHeight: 21,
        },
        md: {
            fontSize: 18,
            lineHeight: 24,
        },
        lg: {
            fontSize: 24,
            lineHeight: 28,
        },
    },
    gap: {
        sm: 8,
        md: 16,
        lg: 32,
    },
    color: {
        lightPurple: 'hsl(264, 45%, 50%)',
        darkPurple: 'hsl(264, 34%, 40%)',
        white: 'hsl(0, 0%, 100%)',
        gray500: 'hsl(0, 0%, 52%)',
    },
};
