//Завдання 3: Генерація таблиці множення

const number = 3;

for (let i = 1; i <= 10; i++) {
    console.log(`${number} * ${i} = ${number * i}`);
}

let factor = 1;
while (factor <= 10) {
    console.log(`${number} * ${factor} = ${number * factor}`)
    factor++
}

