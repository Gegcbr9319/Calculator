import React from 'react';
import styles from './App.module.scss';
import { CalculatorWrapper } from '../index';

export function App() {
    return (
        <div className={styles.appWraper}>
            <CalculatorWrapper />
        </div>
    );
}

export default App;
