function calculate(a: number, b: number, operator: string) {
    if (operator === '+')
        return a + b
    else if (operator === '-')
        return a - b
    else
        return 'Undefined Operator'
}

const value = calculate(1, 2, '*')
console.log(value);