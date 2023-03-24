export const EqualleCalc = (result: string, numberSecond: string, numberSymbol: string) => {
    const a = Number(result);
    const b = Number(numberSecond);
    let resultEq = 0;

    switch (numberSymbol) {
        case '+':
            resultEq = a + b;
            break;
        case '-':
            resultEq = a - b;
            break;
        case 'x':
            resultEq = a * b;
            break;
        case '/':
            resultEq = a / b;
            break;
    }
    return resultEq.toString();
};
