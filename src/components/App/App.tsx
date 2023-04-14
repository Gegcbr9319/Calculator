import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import styles from './App.module.scss';
import { CalculatorWrapper, Setting, Canvas } from '../index';

export function App() {
    return (
        <DndProvider backend={HTML5Backend}>
            <div className={styles.appWrapper}>
                <CalculatorWrapper />
                <div className={styles.canvasWrapper}>
                    <Setting />
                    <Canvas />
                </div>
            </div>
        </DndProvider>
    );
}

export default App;
