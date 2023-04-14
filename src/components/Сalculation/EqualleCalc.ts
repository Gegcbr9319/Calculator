export const EqualleCalc = (result: string, numberSecond: string, numberSymbol: string) => {
    const firstOperand = Number(result);
    const secondOperand = Number(numberSecond);
    let resultEq = 0;

    switch (numberSymbol) {
        case '+':
            resultEq = firstOperand + secondOperand;
            break;
        case '-':
            resultEq = firstOperand - secondOperand;
            break;
        case 'x':
            resultEq = firstOperand * secondOperand;
            break;
        case '/':
            resultEq = firstOperand / secondOperand;
            break;
    }
    return resultEq.toString();
};
