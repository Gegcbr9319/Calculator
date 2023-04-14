import React from 'react';
import { useSelector } from 'react-redux';
import styles from './CalculatorWrapper.module.scss';
import { ButtonsNumber, ButtonsSymbol, ButtonEqualle, Display } from '../index';

interface ISetting {
    change: boolean;
}

export const CalculatorWrapper = () => {
    const change = useSelector(
        (state: { settingState: { setting: ISetting } }) => state.settingState.setting
    );

    return (
        <div className={change.change ? styles.calculatorWrapper : styles.calculatorNoWrapper}>
            <Display data-id={'0'} />
            <ButtonsSymbol data-id={'1'} />
            <ButtonsNumber data-id={'2'} />
            <ButtonEqualle data-id={'3'} />
        </div>
    );
};
