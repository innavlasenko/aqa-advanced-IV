function divide(numerator, denominator) {
    if (denominator === 0) {
        throw new Error('Ділення на нуль недопустиме!')
    };
    if (typeof numerator !== 'number' || typeof denominator !== 'number') {
        throw new Error('Oдин з аргументів не є числом.')
    };
    return numerator / denominator;
};

try {
    console.log(divide(15, 5));
    console.log(divide(undefined, 2));
} catch (error) {
    console.error('Сталася помилка:', error.message)
}
finally {
    console.log('Робота завершена')
};
