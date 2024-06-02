const car1 = {
    brand: 'VM',
    model: 'T-cross',
    year: 2022
};

const car2 = {
    brand: 'Audi',
    model: 'Q5',
    owner: 'Inna Vlasenko'
};

const car3 = { ...car1, ...car2 };

console.log(car3);