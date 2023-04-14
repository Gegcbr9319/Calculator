import React from 'react';
import { useSelector } from 'react-redux';
import { useDrag } from 'react-dnd/dist/hooks';
import styles from './Display.module.scss';

export const Display = (props: { ['data-id']: string }) => {
    const idArray = useSelector((state: { idState: { id: string[] } }) => state.idState.id);
    const numberFirst = useSelector(
        (state: { numberState: { number: { first: string } } }) => state.numberState.number.first
    );
    const result = useSelector(
        (state: { numberState: { number: { result: string } } }) => state.numberState.number.result
    );
    const numberSymbol = useSelector(
        (state: { numberState: { number: { symbol: string } } }) => state.numberState.number.symbol
    );

    const numberSecond = useSelector(
        (state: { numberState: { number: { second: string } } }) => state.numberState.number.second
    );
    const equalle = useSelector(
        (state: { numberState: { number: { equalle: boolean } } }) =>
            state.numberState.number.equalle
    );

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
                {numberFirst.length === 0 && result.length === 0 && !numberSecond && <h3>0</h3>}
                {numberFirst.length > 0 &&
                    result.length === 0 &&
                    !numberSecond &&
                    !equalle &&
                    numberFirst}
                {result.length === 0 && numberSymbol && numberSecond}
                {result.length !== 0 && result}
            </div>
        </div>
    );
};
