import { useRef, useState } from "react";

enum Operators {
    addition, subtraction, multiplication, division
};

interface Memory {
    number: string;
    operation: Operators | '' | undefined;
};

interface Operation {
    lastOperation: Operators | string | undefined;
    number: string;
    smallNumber: string
};

export const useCalculator = () => {

    const [number, setNumber] = useState('0');
    const [smallNumber, setSmallNumber] = useState('0');
    const [finished, setFinished] = useState(false);
    const [lastOperationText, setLastOperationText] = useState('');

    const [memoryOperation, setMemoryOperation] = useState<Memory>({
        number: '',
        operation: '',
    });

    const lastOperation = useRef<Operators | ''>();

    const cleanCalc = () => {
        setMemoryOperation({
            number: '',
            operation: '',
        });
        setLastOperationText('');
        setNumber('0');
        setSmallNumber('0');
    };

    const deleteLastDigit = () => {
        if (number.length === 0 || number.length === 1 || number.length === 2 && number.includes('-')) {
            setNumber('0');
        } else {
            setNumber(number.slice(0, -1));
        }
    };

    const moveToSmallNumber = () => {
        if (number.endsWith('.')) {
            setSmallNumber(number.slice(0, -1));
        } else {
            setSmallNumber(number);
        }
        setNumber('0');
    };

    const concatNumber = (textNumber: string): void => {
        if (number === '0' && textNumber === '0') return;
        if (number.includes('.') && textNumber === '.') return;
        if (finished && lastOperation.current === '') {
            setFinished(false);
            return setNumber(textNumber);
        }

        if (number.startsWith('0') || number.startsWith('-0')) {
            if (textNumber === '.') {
                setNumber(number + textNumber);
            } else if (textNumber === '0' && number.includes('.')) {
                setNumber(number + textNumber);
            } else if (textNumber !== '0' && !number.includes('.')) {
                setNumber(textNumber);
            } else if (textNumber === '0' && !number.includes('.')) {
                setNumber(number);
            } else {
                setNumber(number + textNumber);
            }
        } else {
            setNumber(number + textNumber);
        }
    };

    const changeSign = () => {
        if (number.includes('-')) {
            setNumber(number.replace('-', ''));
        } else {
            setNumber('-' + number);
        }
    };

    const buttonDivision = () => {
        if (smallNumber === '0') {
            moveToSmallNumber();
        }
        lastOperation.current = Operators.division;
    };

    const buttonMultiplication = () => {
        if (smallNumber === '0') {
            moveToSmallNumber();
        }
        lastOperation.current = Operators.multiplication;
    };

    const buttonSubtraction = () => {
        if (smallNumber === '0') {
            moveToSmallNumber();
        }
        lastOperation.current = Operators.subtraction;
    };

    const buttonAddition = () => {
        if (smallNumber === '0') {
            moveToSmallNumber();
        }
        lastOperation.current = Operators.addition;
    };

    const calculateResult = () => {

        if (smallNumber !== '0' && number !== '0') {
            setMemoryOperation({
                number: number,
                operation: lastOperation.current
            });
        }

        setOperation({
            lastOperation: lastOperation.current,
            number,
            smallNumber
        });

        setLastOperationText('');
        setSmallNumber('0');

        if (finished) {
            repeatLastOperation();
        } else {
            setFinished(true);
        }
    };

    const repeatLastOperation = () => {
        const isSubtracting = memoryOperation.operation === Operators.subtraction;
        const isDivision = memoryOperation.operation === Operators.division;

        if (isSubtracting || isDivision) {
            setOperation({
                lastOperation: memoryOperation.operation,
                number: memoryOperation.number,
                smallNumber: number
            });
        } else {
            setOperation({
                lastOperation: memoryOperation.operation,
                number,
                smallNumber: memoryOperation.number
            });
        }
    };

    const setOperation = ({ lastOperation, number, smallNumber }: Operation) => {
        const number1 = Number(number);
        const number2 = Number(smallNumber);

        switch (lastOperation) {
            case Operators.addition:
                setNumber(`${number1 + number2}`);
                break;
            case Operators.subtraction:
                setNumber(`${number2 - number1}`);
                break;
            case Operators.multiplication:
                setNumber(`${number1 * number2}`);
                break;
            case Operators.division:
                if (number1 === 0) {
                    setNumber('0');
                } else {
                    setNumber(`${number2 / number1}`);
                }
            default:
                break;
        };
    };

    const startOperation = (type: string) => {
        if (number === '0') {
            return;
        }
        if (type === 'division') {
            setLastOperationText('÷');
            buttonDivision();
        }
        else if (type === 'multiplication') {
            setLastOperationText('x');
            buttonMultiplication();
        }
        else if (type === 'subtraction') {
            setLastOperationText('-');
            buttonSubtraction();
        }
        else if (type === 'addition') {
            setLastOperationText('+');
            buttonAddition();
        }
    };

    return {
        number,
        smallNumber,
        cleanCalc,
        deleteLastDigit,
        concatNumber,
        changeSign,
        calculateResult,
        lastOperationText,
        startOperation,
    };
};
