const users = [
    { name: 'Inna', age: 35, title: 'QA Team Leader' },
    { name: 'Olena', age: 35, title: 'QA Engineer IV' },
    { name: 'Sergii', age: 30, title: 'Platform Engineer', }
];

for (const user of users) {
    const { name, age, title } = user;
    console.log(name, age, title)
}