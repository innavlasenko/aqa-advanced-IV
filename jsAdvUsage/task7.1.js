function handleNum(num, evenCallback, oddCallback) {
    if (num % 2 === 0) {
        evenCallback();
    }
    else {
        oddCallback();
    }
}
function handleEven() {
    console.log(`number is even`)
}

function handleOdd() {
    console.log(`number is odd`)
}

handleNum(15, handleEven, handleOdd);
handleNum(50, handleEven, handleOdd);