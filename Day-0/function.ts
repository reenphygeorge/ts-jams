// With no return type
function sumOfTwo(a: number, b: number) {
    console.log(a + b)
}

// With return type & optional parameter
function sum(a: number, b: number, c?: number): number {
    if (c)
        return (a + b + c)
    else
        return (a + b);
}

sumOfTwo(1, 2)
const sumValue = sum(1, 2)
console.log(sumValue);

export { }