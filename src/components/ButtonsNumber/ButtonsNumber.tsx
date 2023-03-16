import React from 'react';
import { useSelector } from 'react-redux';
import { useDrag } from 'react-dnd/dist/hooks';
import styles from './ButtonsNumber.module.scss';
import { Button } from '../index';

export const ButtonsNumber = (props: { ['data-id']: string }) => {
    const idArray = useSelector((state: { idState: { id: string[] } }) => state.idState.id);
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'buttonsNumber',
        item: { id: '2', index: 2 },
        options: {
            dropEffect: 'move',
        },
        collect: (monitor) => ({
            isDragging: !monitor.isDragging(),
        }),
    }));
    return (
        <div
            className={idArray.includes(props['data-id']) ? styles.disabled : styles.buttonsNumber}
            ref={idArray.includes(props['data-id']) ? undefined : drag}
            data-id={props['data-id']}
        >
            <div className={styles.buttonsLine}>
                <Button value="7" />
                <Button value="8" />
                <Button value="9" />
            </div>
            <div className={styles.buttonsLine}>
                <Button value="4" />
                <Button value="5" />
                <Button value="6" />
            </div>
            <div className={styles.buttonsLine}>
                <Button value="1" />
                <Button value="2" />
                <Button value="3" />
            </div>
            <div className={styles.buttonsLine}>
                <Button value="+/-" />
                <Button value="0" />
                <Button value="." />
            </div>
        </div>
    );
};
