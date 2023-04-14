import React from 'react';
import { useSelector } from 'react-redux';
import { useDrag } from 'react-dnd/dist/hooks';
import styles from './ButtonEqualle.module.scss';
import { Button } from '../index';

export const ButtonEqualle = (props: { ['data-id']: string }) => {
    const idArray = useSelector((state: { idState: { id: string[] } }) => state.idState.id);

    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'buttonEqualle',
        item: { id: '3', index: 3 },
        options: {
            dropEffect: 'move',
        },
        collect: (monitor) => ({
            isDragging: !monitor.isDragging(),
        }),
    }));

    return (
        <div
            className={idArray.includes(props['data-id']) ? styles.disabled : styles.buttonEquale}
            ref={idArray.includes(props['data-id']) ? undefined : drag}
            data-id={props['data-id']}
        >
            <Button value="=" />
        </div>
    );
};
