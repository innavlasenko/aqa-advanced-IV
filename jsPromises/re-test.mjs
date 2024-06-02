const planetSource = Array.from({ length: 10 }, (_, i) => `https://swapi.dev/api/planets/${i + 1}/`);
Promise.all(planetSource.map(url => fetch(url).then(response => response.json())))
  .then(planets => planets.map(planet => planet.name))
  .then(planetName => console.log(planetName))
  .catch(alarm => console.error('ALARM!: ', alarm));
