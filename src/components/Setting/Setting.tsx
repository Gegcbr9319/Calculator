import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cleanNumberState } from '../../redux/numberSlice';
import { changeSetting } from '../../redux/settingsSlice';
import styles from './Setting.module.scss';

interface ISetting {
    change: boolean;
}

export const Setting = () => {
    const dispatch = useDispatch();
    const change = useSelector(
        (state: { settingState: { setting: ISetting } }) => state.settingState.setting
    );
    return (
        <div className={styles.setting}>
            <button
                className={change.change ? styles.runtimeUnactive : styles.runtimeActive}
                onClick={() => {
                    dispatch(changeSetting(false));
                    dispatch(cleanNumberState());
                }}
            >
                <img
                    src={
                        change.change
                            ? '../src/assets/eyeUnactive.svg'
                            : '../src/assets/eyeActive.svg'
                    }
                    className={styles.img}
                />
                Runtime
            </button>
            <button
                className={
                    change.change === true ? styles.constructorActive : styles.constructorUnactive
                }
                onClick={() => {
                    dispatch(changeSetting(true));
                    dispatch(cleanNumberState());
                }}
            >
                <img
                    src={
                        change.change === true
                            ? '../src/assets/selectorActive.svg'
                            : '../src/assets/selectorUnactive.svg'
                    }
                    className={styles.img}
                />
                Constructor
            </button>
        </div>
    );
};
