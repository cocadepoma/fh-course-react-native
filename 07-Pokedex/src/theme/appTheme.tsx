import { StyleSheet } from 'react-native';

const appStyles = StyleSheet.create({
    globalMArgin: {
        marginHorizontal: 20,
    },
    pokeBallBG: {
        position: 'absolute',
        top: -100,
        right: -100,
        width: 300,
        height: 300,
        opacity: 0.2,
    },
    pokelist: {
        alignItems: 'center',
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
    }
});

export default appStyles;