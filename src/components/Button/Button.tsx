import React, { ButtonHTMLAttributes, FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNummberFirst } from '../../redux/numberSlice';
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

    const change = useSelector(
        (state: { settingState: { setting: ISetting } }) => state.settingState.setting
    );

    const buttonPush = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(e.currentTarget.value);
    };

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
