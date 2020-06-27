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
        xss: 2,
        xs: 4,
        sm: 8,
        md: 16,
        lg: 32,
    },
    borderRadius: 4,
    color: {
        lightPurple: 'hsl(264, 45%, 50%)',
        darkPurple: 'hsl(264, 34%, 40%)',
        white: 'hsl(0, 0%, 90%)',
        gray500: 'hsl(0, 0%, 52%)',
        text: 'hsl(0, 0%, 27%)',
        yellow: 'hsl(48, 94%, 64%)',
    },
};
