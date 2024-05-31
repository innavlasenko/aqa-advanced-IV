const planetsName = []
for (let i = 1; i < 11; i++) {
    const result = await fetch(`https://swapi.dev/api/planets/${i}`)
    const body = await result.json()
    planetsName.push(body.name)
}
console.log(planetsName);
