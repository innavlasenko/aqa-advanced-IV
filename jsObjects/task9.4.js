const person = {
    firstName: 'Inna',
    lastName: 'Vlasenko',
    age: 35
};

person.email = 'ivashchenkoinnaivan@gmail.com';
delete person.age;

console.log(person);