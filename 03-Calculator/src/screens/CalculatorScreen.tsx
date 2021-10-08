import React from 'react';
import { View, Text } from 'react-native';

import { appStyles } from '../theme/appTheme';

import ButtonCalc from '../components/ButtonCalc';
import { useCalculator } from '../hooks/useCalculator';

const CalculatorScreen = () => {

    const {
        number,
        smallNumber,
        cleanCalc,
        deleteLastDigit,
        concatNumber,
        changeSign,
        calculateResult,
        lastOperationText,
        startOperation,
    } = useCalculator();

    return (
        <View style={appStyles.calculatorContainer}>
            <Text
                style={appStyles.smallResult}
            >
                {smallNumber !== '0' && `${smallNumber} `}

                <Text style={appStyles.symbolOperation}>
                    {lastOperationText}
                </Text>

            </Text>
            <Text
                adjustsFontSizeToFit
                numberOfLines={1}
                style={appStyles.result}
            >
                {number}
            </Text>
            <View style={appStyles.row}>
                <ButtonCalc
                    bgColor="#9B9B9B"
                    text="C"
                    textColor="#000"
                    onPress={cleanCalc}
                />
                <ButtonCalc
                    bgColor="#9B9B9B"
                    text="+/-"
                    textColor="#000"
                    onPress={changeSign}
                />
                <ButtonCalc
                    bgColor="#9B9B9B"
                    text="del"
                    textColor="#000"
                    onPress={deleteLastDigit}
                />
                <ButtonCalc
                    isActive={lastOperationText === '÷'}
                    bgColor="#FF9427"
                    text="&#247;"
                    textColor="#fff"
                    onPress={() => startOperation('division')}
                />
            </View>

            <View style={appStyles.row}>
                <ButtonCalc
                    text="7"
                    textColor="white"
                    onPress={concatNumber}
                />
                <ButtonCalc
                    text="8"
                    textColor="white"
                    onPress={concatNumber}
                />
                <ButtonCalc
                    text="9"
                    textColor="white"
                    onPress={concatNumber}
                />
                <ButtonCalc
                    isActive={lastOperationText === 'x'}
                    bgColor="#FF9427"
                    text="x"
                    textColor="white"
                    onPress={() => startOperation('multiplication')}
                />
            </View>

            <View style={appStyles.row}>
                <ButtonCalc
                    text="4"
                    textColor="white"
                    onPress={concatNumber}
                />
                <ButtonCalc
                    text="5"
                    textColor="white"
                    onPress={concatNumber}
                />
                <ButtonCalc
                    text="6"
                    textColor="white"
                    onPress={concatNumber}
                />
                <ButtonCalc
                    isActive={lastOperationText === '-'}
                    bgColor="#FF9427"
                    text="-"
                    textColor="white"
                    onPress={() => startOperation('subtraction')}
                />
            </View>

            <View style={appStyles.row}>
                <ButtonCalc
                    text="1"
                    textColor="white"
                    onPress={concatNumber}
                />
                <ButtonCalc
                    text="2"
                    textColor="white"
                    onPress={concatNumber}
                />
                <ButtonCalc
                    text="3"
                    textColor="white"
                    onPress={concatNumber}
                />
                <ButtonCalc
                    isActive={lastOperationText === '+'}
                    bgColor="#FF9427"
                    text="+"
                    textColor="white"
                    onPress={() => startOperation('addition')}
                />
            </View>

            <View style={appStyles.row}>
                <ButtonCalc
                    text="0"
                    textColor="white"
                    onPress={concatNumber}
                    extraWide
                />
                <ButtonCalc
                    text="."
                    textColor="white"
                    onPress={concatNumber}
                />
                <ButtonCalc
                    bgColor="#FF9427"
                    text="="
                    textColor="white"
                    onPress={calculateResult}
                />
            </View>

        </View>
    );
};

export default CalculatorScreen;
