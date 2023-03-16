import React from 'react';
import { useSelector } from 'react-redux';
import { useDrag } from 'react-dnd/dist/hooks';
import styles from './Display.module.scss';

export const Display = (props: { ['data-id']: string }) => {
    const idArray = useSelector((state: { idState: { id: string[] } }) => state.idState.id);
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'display',
        item: { id: '0', index: 0 },
        collect: (monitor) => ({
            isDragging: !monitor.isDragging(),
        }),
    }));
    return (
        <div
            className={idArray.includes(props['data-id']) ? styles.disabled : styles.display}
            ref={idArray.includes(props['data-id']) ? undefined : drag}
            data-id={props['data-id']}
        >
            <div className={styles.displayShow}>
                <h3>0</h3>
            </div>
        </div>
    );
};
