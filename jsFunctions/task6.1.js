//Function Declaration

function calcSquare(widht, height) {
    return widht * height
}

console.log(calcSquare(5, 10))

//Function Expression

const calcSquare1 = function (widht, height) {
    return widht * height
}
console.log(calcSquare1(7, 8))

//Arrow Function

const calcSquare2 = (widht, height) => widht * height

console.log(calcSquare2(3, 5))