import { StyleSheet } from 'react-native';

export const appStyles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#000',
    },
    calculatorContainer: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'flex-end',
    },
    result: {
        color: 'rgba(255, 255, 255, 0.5)',
        fontSize: 60,
        textAlign: 'right',
        marginBottom: 10,
    },
    smallResult: {
        color: 'rgba(255, 255, 255, 0.5)',
        fontSize: 30,
        textAlign: 'right',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10,
    },
    button: {
        height: 70,
        width: 70,
        backgroundColor: '#9B9B9B',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    buttonText: {
        color: 'black',
        fontSize: 30,
        textAlign: 'center',
    },
    symbolOperation: {
        color: '#dddddd',
    },
});