const residentsName = async () => {
    const films = await fetch(`https://swapi.dev/api/films/3`)
    const filmsResults = await films.json();
    const planetsData = filmsResults.planets.map(
        async planetlink => {
            const planets = await fetch(planetlink);
            const planetsResults = await planets.json();
            const residentsResults = planetsResults.residents.map(
                async residentlink => {
                    const residentsData = await fetch(residentlink);
                    const residentsResults = await residentsData.json();
                    return residentsResults.name;
                });
            const residentsFinal = await Promise.all(residentsResults);
            return {
                planetName: planetsResults.name,
                residents: residentsFinal
            }
        }
    )
    const planetsAndResidents = await Promise.all(planetsData);
    console.log(planetsAndResidents)
}
residentsName()
