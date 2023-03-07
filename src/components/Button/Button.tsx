import React, { FC } from 'react';
import styles from './Button.module.scss';

interface IButton {
    value: string;
}

export const Button: FC<IButton> = ({ value }) => {
    return (
        <button value={value} className={value != '=' ? styles.button : styles.buttonEqualle}>
            {value}
        </button>
    );
};
