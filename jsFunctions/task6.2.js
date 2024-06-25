function checkAge(age) {
    if (age >= 18) {
        return true
    }
    else {
        return false
    }
}

console.log('Чи є особа дорослою:', checkAge(42));
console.log('Чи є особа дорослою:', checkAge(5));