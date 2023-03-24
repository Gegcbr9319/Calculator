import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    addNumberSecond,
    addNummberFirst,
    addResult,
    addSymbol,
    cleanEqualle,
    cleanNumbers,
    cleanNumberSecond,
    cleanNumberState,
    cleanResult,
    switchEqualle,
    updateNumberFirst,
    updateNumberSecond,
} from '../../redux/numberSlice';
import { Calculation } from '../Сalculation/Calculation';
import { EqualleCalc } from '../Сalculation/EqualleCalc';
import styles from './Button.module.scss';

interface IButton {
    value: string;
}
interface ISetting {
    change: boolean;
}

export const Button: FC<IButton> = ({ value }) => {
    const dispatch = useDispatch();

    const numberFirst = useSelector(
        (state: { numberState: { number: { first: string } } }) => state.numberState.number.first
    );

    const numberSymbol = useSelector(
        (state: { numberState: { number: { symbol: string } } }) => state.numberState.number.symbol
    );

    const numberSecond = useSelector(
        (state: { numberState: { number: { second: string } } }) => state.numberState.number.second
    );
    const result = useSelector(
        (state: { numberState: { number: { result: string } } }) => state.numberState.number.result
    );

    const equalle = useSelector(
        (state: { numberState: { number: { equalle: boolean } } }) =>
            state.numberState.number.equalle
    );

    const change = useSelector(
        (state: { settingState: { setting: ISetting } }) => state.settingState.setting.change
    );

    const buttonPush = (e: React.MouseEvent<HTMLButtonElement>) => {
        const button = e.currentTarget.value;
        const symbols = '/-+x';
        if (change === false) {
            if (symbols.includes(button)) {
                /* if (numberFirst && numberSecond && numberSymbol) {
                    dispatch(addResult(Calculation(numberFirst, numberSecond, numberSymbol)));
                    dispatch(cleanNumbers());
                    dispatch(switchEqualle());
                }
                if (result) {
                    dispatch(addResult(EqualleCalc(result, numberSecond, numberSymbol)));
                } */
                if (equalle === true) {
                    dispatch(updateNumberFirst(result));
                    dispatch(cleanResult());
                    dispatch(cleanEqualle());
                    dispatch(cleanNumberSecond());
                    dispatch(addSymbol(button));
                } else {
                    dispatch(addSymbol(button));
                }
            } else if (button === '+/-') {
                if (result) {
                    result[0] === '-'
                        ? dispatch(addResult(result.slice(1)))
                        : dispatch(addResult(`-${result}`));
                } else if (numberFirst.length > 0 && !numberSecond) {
                    numberFirst[0] === '-'
                        ? dispatch(updateNumberFirst(numberFirst.slice(1)))
                        : dispatch(updateNumberFirst(`-${numberFirst}`));
                } else
                    numberSecond[0] === '-'
                        ? dispatch(updateNumberSecond(numberSecond.slice(1)))
                        : dispatch(updateNumberSecond(`-${numberSecond}`));
            } else if (button === '=') {
                /*  if (!numberSecond) {
                    dispatch(updateNumberSecond(numberFirst));
                } */
                if (equalle === false) {
                    dispatch(addResult(Calculation(numberFirst, numberSecond, numberSymbol)));
                    dispatch(switchEqualle());
                } else {
                    /*   dispatch(updateNumberFirst(result));
                    dispatch(cleanResult()); */
                    dispatch(addResult(EqualleCalc(result, numberSecond, numberSymbol)));
                }
            } else if (button === 'Del') {
                dispatch(cleanNumberState());
            } else {
                if (numberSymbol.length === 0 || result) {
                    if (equalle === true) {
                        dispatch(cleanNumberState());
                        dispatch(addNummberFirst(button));
                    } else {
                        dispatch(addNummberFirst(button));
                    }
                } else {
                    dispatch(addNumberSecond(button));
                }
            }
        } else {
            return;
        }
    };

    useEffect(() => {
        console.log(numberSymbol, 'symb');
    }, [numberSymbol]);
    useEffect(() => {
        console.log(numberSecond, 'second');
    }, [numberSecond]);
    useEffect(() => {
        console.log(numberFirst, 'first');
    }, [numberFirst]);
    useEffect(() => {
        console.log(result, 'result');
    }, [result]);
    return (
        <button
            value={value}
            className={value != '=' ? styles.button : styles.buttonEqualle}
            onClick={(e) => buttonPush(e)}
        >
            {value}
        </button>
    );
};
