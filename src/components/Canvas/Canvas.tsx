import React, { useState } from 'react';
import { Reorder } from 'framer-motion';
import { useSelector } from 'react-redux';
import { useDrop } from 'react-dnd';
import { useDispatch } from 'react-redux';
import { addId, deleteId } from '../../redux/idSlice';
import { arrayFragment } from '../index';
import styles from './Canvas.module.scss';
import imageLoad from '../../../src/assets/image.svg';

interface IFragment {
    ['data-id']: string;
    fragment: (props: { ['data-id']: string }) => JSX.Element;
    index: number;
}

interface IFragmentProps {
    id: string;
    index: number;
}

interface ISetting {
    change: boolean;
}

export const Canvas = () => {
    const [canvas, setCanvas] = useState<IFragment[]>([]);
    const dispatch = useDispatch();

    const change = useSelector(
        (state: { settingState: { setting: ISetting } }) => state.settingState.setting
    );

    const idArray = useSelector((state: { idState: { id: string[] } }) => state.idState.id);

    const [{ isOver }, drop] = useDrop(() => ({
        accept: ['buttonEqualle', 'buttonsNumber', 'buttonsSymbol', 'display'],

        drop: (item: IFragmentProps) => {
            addFragmentCanvas(item.id);
        },
        collect: (monitor) => ({
            isOver: !monitor.isOver(),
        }),
    }));

    const addFragmentCanvas = (id: string) => {
        const fragment = arrayFragment.filter((fragment) => id === fragment['data-id']);

        setCanvas((prev) => {
            const isFragment =
                prev.filter((index) => index['data-id'] === fragment[0]['data-id']).length === 0;
            if (isFragment) {
                dispatch(addId(fragment[0]['data-id']));

                return [...prev, { ...fragment[0] }];
            } else return [...prev];
        });
    };

    const deleteFragment = (e: React.MouseEvent<Element, MouseEvent>) => {
        if (!change.change) {
            return;
        } else {
            const delId = e.currentTarget.getAttribute('data-id') as string;
            dispatch(deleteId(delId));

            setCanvas((prev) => prev.filter((index) => index['data-id'] !== delId));
        }
    };

    return (
        <div className={canvas.length === 0 ? styles.canvasEmpty : styles.canvas} ref={drop}>
            {canvas.length === 0 && (
                <div className={styles.info}>
                    <img src={imageLoad}></img>
                    <h2>Перетащите сюда</h2>
                    <p>
                        любой элемент <br></br> из левой панели
                    </p>
                </div>
            )}
            {canvas.length > 0 && (
                <Reorder.Group axis="y" values={canvas} onReorder={setCanvas}>
                    {canvas.map((item) => (
                        <Reorder.Item
                            value={change.change ? item : undefined}
                            key={item['data-id']}
                            data-id={item['data-id']}
                            onDoubleClick={deleteFragment}
                        >
                            {<item.fragment data-id={item['data-id']} />}
                        </Reorder.Item>
                    ))}
                </Reorder.Group>
            )}
        </div>
    );
};
