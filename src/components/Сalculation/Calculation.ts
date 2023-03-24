export const Calculation = (numberFirst: string, numberSecond: string, numberSymbol: string) => {
    const a = Number(numberFirst);
    const b = numberSecond.length === 0 ? Number(numberFirst) : Number(numberSecond);
    let result = 0;

    switch (numberSymbol) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case 'x':
            result = a * b;
            break;
        case '/':
            result = a / b;
            break;
    }
    return result.toString();
};
