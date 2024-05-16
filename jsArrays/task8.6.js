const numbersList = [1, 10, 14, 2, 4, 5, 43, 34];

const newNumberLists = numbersList.slice()
newNumberLists.sort(function (a, b) {
    return a - b;
})

console.log(numbersList)
console.log(newNumberLists)
