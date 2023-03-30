export const Calculation = (numberFirst: string, numberSecond: string, numberSymbol: string) => {
    const firstOperand = Number(numberFirst);
    const secondOperand = numberSecond.length === 0 ? Number(numberFirst) : Number(numberSecond);
    let result = 0;

    switch (numberSymbol) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case 'x':
            result = firstOperand * secondOperand;
            break;
        case '/':
            result = firstOperand / secondOperand;
            break;
    }
    return result.toString();
};
