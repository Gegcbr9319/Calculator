import React from 'react';
import { useSelector } from 'react-redux';
import { useDrag } from 'react-dnd/dist/hooks';
import styles from './ButtonsSymbol.module.scss';
import { Button } from '../index';

export const ButtonsSymbol = (props: { ['data-id']: string }) => {
    const idArray = useSelector((state: { idState: { id: string[] } }) => state.idState.id);
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'buttonsSymbol',
        item: { id: '1', index: 1 },
        collect: (monitor) => ({
            isDragging: !monitor.isDragging(),
        }),
    }));
    return (
        <div
            className={idArray.includes(props['data-id']) ? styles.disabled : styles.buttonsSymbol}
            ref={idArray.includes(props['data-id']) ? undefined : drag}
            data-id={props['data-id']}
        >
            <Button value="/" />
            <Button value="x" />
            <Button value="-" />
            <Button value="+" />
        </div>
    );
};
