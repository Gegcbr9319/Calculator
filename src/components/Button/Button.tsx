import React, { ButtonHTMLAttributes, FC } from 'react';
import styles from './Button.module.scss';

interface IButton {
    value: string;
}

export const Button: FC<IButton> = ({ value }) => {
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
